import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Cadastro from '../../assets/cadastro.png';
import Pedidos from '../../assets/pedidos.png';
import Fornecedor from '../../assets/fornecedor.png';
import Produtos from '../../assets/produtos.png';
import Comparador from '../../assets/comparador.png';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const HomeScreen = () => {

  const navigation = useNavigation();

  const navigateToFornecedoresScreen = () => {
    navigation.navigate('FornecedoresScreen'); 
  };

  const navigateToProductsScreen = () => {
    navigation.navigate('ProductsScreen'); 
  };

  const navigateToCreateOrder = () => {
    navigation.navigate('CreateOrder'); 
  };

  const navigateToOrderList = () => {
    navigation.navigate('OrderList'); 
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Image source={require('../../assets/miniLogo.png')} style={estilos.logo} />
        <TouchableOpacity>
          <Icon name="notifications" type="material-icons" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={estilos.buttonsContainer}>
        <TouchableOpacity style={estilos.button} onPress={navigateToCreateOrder}>
          <Text style={estilos.buttonText}>Cadastrar Pedido</Text>
          <Image source={Cadastro} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={estilos.button} onPress={navigateToOrderList}>
          <Text style={estilos.buttonText}>Meus Pedidos</Text>
          <Image source={Pedidos} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={estilos.title}>Recomendações</Text>

      <ScrollView>
        <View style={estilos.rectangleContainer}>
          <TouchableOpacity onPress={navigateToFornecedoresScreen} style={estilos.imageContainer}>
            <Image source={Fornecedor} style={estilos.image} />
            <Text style={estilos.imageText}>Busque os melhores fornecedores</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToProductsScreen} style={estilos.imageContainer}>
            <Image source={Produtos} style={estilos.image} />
            <Text style={estilos.imageText}>Busque os melhores produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.imageContainer}>
            <Image source={Comparador} style={estilos.image} />
            <Text style={estilos.imageText}>Comparador os produtos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default HomeScreen;
