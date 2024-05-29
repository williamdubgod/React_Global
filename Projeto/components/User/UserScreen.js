import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../config/firebase';
import estilos from './estilos';
import Footer from '../Rodape/Footer';
import axios from 'axios'; 

export default function UserScreen({ navigation }) {
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [tipoProdutoBusca, setTipoProdutoBusca] = useState('');
    const [tipoProdutoFornecedor, setTipoProdutoFornecedor] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('comprador');
    const [camposPreenchidos, setCamposPreenchidos] = useState(false);

    const usuario = auth.currentUser;

    useEffect(() => {
        // Verificar se todos os campos estão preenchidos
        if (
            nomeEmpresa &&
            cnpj &&
            telefone &&
            endereco &&
            cep &&
            numero &&
            ((tipoUsuario === 'comprador' && tipoProdutoBusca) || (tipoUsuario === 'fornecedor' && tipoProdutoFornecedor))
        ) {
            setCamposPreenchidos(true);
        } else {
            setCamposPreenchidos(false);
        }
    }, [nomeEmpresa, cnpj, telefone, endereco, cep, numero, tipoProdutoBusca, tipoProdutoFornecedor, tipoUsuario]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigation.navigate('InicialPage');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    const handleSave = () => {
        console.log('Nome da empresa:', nomeEmpresa);
        console.log('CNPJ:', cnpj);
        console.log('Telefone:', telefone);
        console.log('Endereço:', endereco);
        console.log('CEP:', cep);
        console.log('Número:', numero);
        if (tipoUsuario === 'comprador') {
            console.log('Tipo de produto que busca:', tipoProdutoBusca);
        } else {
            console.log('Tipo de produto que fornece:', tipoProdutoFornecedor);
        }
       
    };

    const formatarCNPJ = (cnpj) => {
        return cnpj.replace(/\D/g, '') // Remove caracteres não numéricos
                   .replace(/^(\d{2})(\d)/, '$1.$2') // Coloca ponto após os dois primeiros dígitos
                   .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // Coloca ponto após os próximos três dígitos
                   .replace(/\.(\d{3})(\d)/, '.$1/$2') // Coloca barra após os próximos três dígitos
                   .replace(/(\d{4})(\d)/, '$1-$2'); // Coloca hífen após os próximos quatro dígitos
    };

    const formatarTelefone = (telefone) => {
        return telefone.replace(/\D/g, '') // Remove caracteres não numéricos
                       .replace(/^(\d{2})(\d)/g, '($1) $2') // Adiciona parênteses em volta dos dois primeiros dígitos
                       .replace(/(\d)(\d{4})$/, '$1-$2'); // Adiciona hífen entre os últimos quatro dígitos
    };

    const formatarCEP = (cep) => {
        cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona hífen após os primeiros cinco dígitos
        return cep;
    };    

    const consultarCEP = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                console.log('CEP não encontrado');
            } else {
                setEndereco(response.data.logradouro);
            }
        } catch (error) {
            console.error('Erro ao consultar CEP:', error);
        }
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.header}>
                <Image source={require('../../assets/user.png')} style={estilos.userIcon} />
                <Text style={estilos.headerText}>{usuario.email}</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Ionicons name="log-out" style={estilos.logoutButtonIcon} />
                </TouchableOpacity>
            </View>

            <View style={estilos.switchContainer}>
                <TouchableOpacity
                    style={[estilos.switchButton, tipoUsuario === 'comprador' && estilos.switchButtonSelected]}
                    onPress={() => setTipoUsuario('comprador')}>
                    <Text style={estilos.switchButtonText}>Comprador</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilos.switchButton, tipoUsuario === 'fornecedor' && estilos.switchButtonSelected]}
                    onPress={() => setTipoUsuario('fornecedor')}>
                    <Text style={estilos.switchButtonText}>Fornecedor</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <ScrollView style={{ flex: 1 }}>
                    <View style={estilos.form}>
                        <TextInput
                            placeholder="Nome da empresa"
                            style={estilos.input}
                            value={nomeEmpresa}
                            onChangeText={setNomeEmpresa}
                        />
                        <TextInput
                            placeholder="CNPJ"
                            style={estilos.input}
                            value={formatarCNPJ(cnpj)}
                            onChangeText={(text) => setCnpj(formatarCNPJ(text))}
                            maxLength={18} // Mascara CNPJ
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder="Telefone"
                            style={estilos.input}
                            value={formatarTelefone(telefone)}
                            onChangeText={(text) => setTelefone(formatarTelefone(text))}
                            maxLength={15} // Mascara telefone
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder="CEP"
                            style={estilos.input}
                            value={cep}
                            onChangeText={(text) => setCep(formatarCEP(text))}
                            onBlur={consultarCEP} // Consulta o CEP quando o campo perde o foco
                            maxLength={9} // Mascara CEP
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder="Endereço"
                            style={estilos.input}
                            value={endereco}
                            onChangeText={setEndereco}
                        />
                        <TextInput
                            placeholder="Número"
                            style={estilos.input}
                            value={numero}
                            onChangeText={setNumero}
                            keyboardType='numeric'
                        />
                        {tipoUsuario === 'comprador' && (
                            <TextInput
                                placeholder="Tipo de produto que busca"
                                style={estilos.input}
                                value={tipoProdutoBusca}
                                onChangeText={setTipoProdutoBusca}
                            />
                        )}
                        {tipoUsuario === 'fornecedor' && (
                            <TextInput
                                placeholder="Tipo de produto que fornece"
                                style={estilos.input}
                                value={tipoProdutoFornecedor}
                                onChangeText={setTipoProdutoFornecedor}
                            />
                        )}
                        <TouchableOpacity
                            style={[estilos.botao, camposPreenchidos ? estilos.botaoPreenchido : estilos.botaoDesativado]}
                            onPress={handleSave}
                            disabled={!camposPreenchidos}>
                            <Text style={estilos.botaoTexto}>Salvar</Text>
                        </TouchableOpacity>   
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <Footer />
        </View>
    );
}
