import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const CreateOrder = ({ route, navigation }) => {
  const orderToEdit = route.params?.order;
  const [orderName, setOrderName] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [orderQuantity, setOrderQuantity] = useState('');

  useEffect(() => {
    if (orderToEdit) {
      setOrderName(orderToEdit.name);
      setOrderDetails(orderToEdit.details);
      setOrderQuantity(orderToEdit.quantity);
    }
  }, [orderToEdit]);

  const handleAddOrUpdateOrder = async () => {
    if (orderName === '' || orderDetails === '' || orderQuantity === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const newOrder = { 
      id: orderToEdit ? orderToEdit.id : Date.now().toString(), 
      name: orderName, 
      details: orderDetails,
      quantity: orderQuantity 
    };

    const existingOrders = await AsyncStorage.getItem('orders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    
    if (orderToEdit) {
      const updatedOrders = orders.map(order => order.id === newOrder.id ? newOrder : order);
      await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
    } else {
      orders.push(newOrder);
      await AsyncStorage.setItem('orders', JSON.stringify(orders));
    }

    setOrderName('');
    setOrderDetails('');
    setOrderQuantity('');
    navigation.navigate('OrderList', { reload: true });
  };

  const formatQuantity = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setOrderQuantity(new Intl.NumberFormat('de-DE').format(numericText));
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>{orderToEdit ? 'Editar Pedido' : 'Novo Pedido'}</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nome do Pedido"
        value={orderName}
        onChangeText={setOrderName}
      />
      <TextInput
        style={estilos.input}
        placeholder="Quantidade do Pedido"
        value={orderQuantity}
        onChangeText={formatQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={[estilos.input, estilos.detailsInput]}
        placeholder="Detalhes do Pedido"
        value={orderDetails}
        onChangeText={setOrderDetails}
        multiline
      />
      <TouchableOpacity style={estilos.button} onPress={handleAddOrUpdateOrder}>
        <Text style={estilos.buttonText}>{orderToEdit ? "Atualizar Pedido" : "Adicionar Pedido"}</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
};

export default CreateOrder;
