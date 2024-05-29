import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicialPage from './components/Inicial/InicialPage';
import LoginScreen from './components/Login/LoginScreen';
import RegisterScreen from './components/Cadastro/RegisterScreen';
import HomeScreen from './components/Home/HomeScreen';
import FornecedoresScreen from './components/BuscarFornecedores/FornecedoresScreen';
import ProductsScreen from './components/BuscarProdutos/ProductsScreen';
import UserScreen from './components/User/UserScreen';
import CreateOrder from './components/CadastrarPedido/CreateOrder';
import OrderList from './components/MeusPedidos/OrderList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicialPage">
        <Stack.Screen
          name="InicialPage"
          component={InicialPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="FornecedoresScreen"
          component={FornecedoresScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="CreateOrder"
          component={CreateOrder}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
