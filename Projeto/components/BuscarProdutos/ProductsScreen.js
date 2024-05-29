import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from '../Rodape/Footer';
import Card from '../Cards/Card'
import estilos from './estilos';
import produto1 from '../../assets/produto1.png';
import produto2 from '../../assets/produto2.png';
import produto3 from '../../assets/produto3.png';

const ProductsScreen = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <View style={estilos.searchContainer}>
          <Icon name="search" type="material-icons" size={24} color="black" style={estilos.searchIcon} />
          <TextInput
            style={estilos.searchInput}
            placeholder="Buscar Produtos"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity>
          <Card nome="Caneta" imagem={produto1} avaliacao={5} textoVendas={"Mais de 100.000 unidades vendidas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Sacola kraft" imagem={produto2} avaliacao={4.5} textoVendas={"Mais de 40.000 unidades vendidas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Sacola de papel" imagem={produto3} avaliacao={4} textoVendas={"Mais de 10.500 unidades vendidas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Caneta" imagem={produto1} avaliacao={5} textoVendas={"Mais de 100.000 unidades vendidas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Sacola kraft" imagem={produto2} avaliacao={4.5} textoVendas={"Mais de 40.000 unidades vendidas"}/>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ProductsScreen;
