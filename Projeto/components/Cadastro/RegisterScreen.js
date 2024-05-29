import React, { useState } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { EntradaTexto } from '../EntradaTexto';
import estilos from './estilos';
import { cadastrar } from '../../servicos/requisicoesFirebase';

export default function RegisterScreen  ({ useNavigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarCadastro() {
    if (nome === '') {
      setMensagemError('Preencha o campo Nome');
      setStatusError('nome');
    } else if (email === '') {
      setMensagemError('Preencha o campo E-Mail');
      setStatusError('email');
    } else if (senha === '') {
      setMensagemError('Preencha o campo senha');
      setStatusError('senha');
    } else if (confirmaSenha === '') {
      setMensagemError('Preencha o campo confirmar senha');
      setStatusError('confirmaSenha');
    } else if (confirmaSenha !== senha) {
      setMensagemError('As senhas devem ser iguais');
      setStatusError('confirmaSenha');
      Alert.alert('As senhas devem ser iguais');
    } else {
      const resultado = await cadastrar(email, senha);
      if (resultado === 'sucesso') {
        Alert.alert('Usuário cadastrado com sucesso');
        setEmail('');
        setSenha('');
        setConfirmaSenha('');
        setNome('');
      } else {
        Alert.alert(resultado);
      }
      setStatusError('');
      setMensagemError('');
    }
  }

  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled
      keyboardVerticalOffset={-100}
    >
      <ScrollView contentContainerStyle={estilos.scrollContainer}>
      <Image source={require('../../assets/logo.png')} style={estilos.logo} />
        <EntradaTexto
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          error={statusError === 'nome'}
          messageError={mensagemError}
        />
        <EntradaTexto
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          error={statusError === 'email'}
          messageError={mensagemError}
        />
        <EntradaTexto
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          error={statusError === 'senha'}
          secureTextEntry
          messageError={mensagemError}
        />
        <EntradaTexto
          label="Confirmar Senha"
          value={confirmaSenha}
          onChangeText={(text) => setConfirmaSenha(text)}
          error={statusError === 'confirmaSenha'}
          secureTextEntry
          messageError={mensagemError}
        />
        <TouchableOpacity
          style={estilos.loginButton}
          onPress={() => realizarCadastro()}
        >
          <Text style={estilos.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

