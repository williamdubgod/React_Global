import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import estilos from './estilos';

const CardEmpresa = ({ nome, imagem, avaliacao, textoVendas }) => {
  return (
    <View style={estilos.card}>
      <Image source={imagem} style={estilos.logo} />
      <View style={estilos.info}>
        <Text style={estilos.nomeEmpresa}>{nome}</Text>
        <View style={estilos.avaliacaoContainer}>
          <View style={estilos.avaliacaoItem}>
            <Text style={{ color: 'white', marginRight: 3 }}>{avaliacao}</Text>
            <Icon name="star" type="font-awesome" size={12} color="white" />
          </View>
          <View style={estilos.vendasContainer}>
            <Text style={estilos.vendasText}>{textoVendas}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardEmpresa;
