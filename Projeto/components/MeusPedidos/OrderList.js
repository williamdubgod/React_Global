import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const OrderList = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const existingOrders = await AsyncStorage.getItem('orders');
    if (existingOrders) {
      setOrders(JSON.parse(existingOrders));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchOrders();
    }, [])
  ); 

  const handleDeleteOrder = async (id) => {
    const filteredOrders = orders.filter(order => order.id !== id);
    setOrders(filteredOrders);
    await AsyncStorage.setItem('orders', JSON.stringify(filteredOrders));
  };

  const handleEditOrder = (order) => {
    navigation.navigate('CreateOrder', { order });
  };

  const renderItem = ({ item }) => (
    <View style={estilos.orderContainer}>
      <Text style={estilos.orderName}>{item.name}</Text>
      <Text style={estilos.orderDetails}>{item.details}</Text>
      <Text style={estilos.orderQuantity}>Localização: {item.quantity}</Text>
      <View style={estilos.buttonGroup}>
        <TouchableOpacity style={estilos.editButton} onPress={() => handleEditOrder(item)}>
          <Text style={estilos.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.deleteButton} onPress={() => handleDeleteOrder(item.id)}>
          <Text style={estilos.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Meus Registros</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={estilos.listContainer}
      />
      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('CreateOrder')}>
        <Text style={estilos.buttonText}>Adicionar Novo Pedido</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
};

export default OrderList;
