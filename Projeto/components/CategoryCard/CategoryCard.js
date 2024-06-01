import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import estilos from './estilos';

const CategoryCard = ({ title, description, image, onPress }) => {
  return (
    <View style={estilos.cardContainer}>
      <ImageBackground source={require('../../assets/wave.png')} style={estilos.cardBackground} imageStyle={estilos.cardImageBackground}>
        <View style={estilos.card}>
          <View style={estilos.cardContent}>
            <Text style={estilos.cardTitle}>{title}</Text>
            <Text style={estilos.cardDescription}>{description}</Text>
            <TouchableOpacity style={estilos.button} onPress={onPress}>
              <Text style={estilos.buttonText}>Faça um Registro</Text>
            </TouchableOpacity>
          </View>
          <Image source={image} style={estilos.cardImage} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;
