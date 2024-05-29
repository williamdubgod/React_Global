import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from '../Rodape/Footer';
import estilos from './estilos';
import Card from '../Cards/Card'
import empresa1 from '../../assets/empresa1.png';
import empresa2 from '../../assets/empresa2.png';
import empresa3 from '../../assets/empresa3.png';

const SearchScreen = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <View style={estilos.searchContainer}>
          <Icon name="search" type="material-icons" size={24} color="black" style={estilos.searchIcon} />
          <TextInput
            style={estilos.searchInput}
            placeholder="Buscar fornecedores"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity>
          <Card nome="Bragança Embalagens" imagem={empresa1} avaliacao={5} textoVendas={"Mais de 15.000 vendas realizadas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Panorama Embalagens" imagem={empresa2} avaliacao={4.5} textoVendas={"Mais de 10.000 vendas realizadas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Embalagem Fácil" imagem={empresa3} avaliacao={4} textoVendas={"Mais de 5.000 vendas realizadas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Bragança Embalagens" imagem={empresa1} avaliacao={5} textoVendas={"Mais de 15.000 vendas realizadas"}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card nome="Panorama Embalagens" imagem={empresa2} avaliacao={4.5} textoVendas={"Mais de 10.000 vendas realizadas"}/>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default SearchScreen;
