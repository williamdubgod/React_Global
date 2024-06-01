import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import CategoryCard from '../CategoryCard/CategoryCard';
import estilos from './estilos';
import Footer from '../Rodape/Footer'

export default function HomeScreen() {
  return (
    <View style={estilos.outerContainer}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <View>
            <Text style={estilos.greeting}>Bem-vindo</Text>
            <Text style={estilos.username}>Vinicius Rodrigues</Text>
          </View>
          <TouchableOpacity style={estilos.notificationIcon}>
            <Image source={require('../../assets/notification.png')} style={estilos.iconImage} />
          </TouchableOpacity>
        </View>
        <CategoryCard
          title="Lixo"
          description="reportar áreas com alta concentração de lixo"
          image={require('../../assets/trash.png')}
          onPress={() => alert('Registrar Lixo')}
        />
        <CategoryCard
          title="Animais"
          description="Reportar animais marinhos presentes na praia"
          image={require('../../assets/fish.png')}
          onPress={() => alert('Registrar Animais')}
        />
        <TouchableOpacity style={[estilos.myRecordsButton, estilos.shadow]}>
          <Text style={estilos.myRecordsButtonText}>Meus Registros</Text>
        </TouchableOpacity>
        <Text style={estilos.recordsInfo}>
          Você possui 1 registro. Informe-nos sobre novas ocorrências.
        </Text>
      </View>
      <Footer />
    </View>
  );
}