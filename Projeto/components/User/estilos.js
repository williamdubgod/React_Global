import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 35, 
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#fff',
        marginLeft: 10,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: 'bold',
    },
    userIcon: {
        marginTop: 20,
        width: 60, 
        height: 60, 
        borderRadius: 30,
    },
    logoutButtonIcon: {
        marginTop: 20,
        color: '#fff',
        fontSize: 24, 
    },
    form: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    botao: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    botaoTexto: {
        fontWeight: 'bold',
        color: 'white'
    },
    botaoDesativado: {
        backgroundColor: 'gray',
    },
    botaoPreenchido: {
        backgroundColor: 'green',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    switchButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        alignSelf: 'center',
    },
    switchButtonSelected: {
        borderBottomWidth: 2,
        borderBottomColor: 'green', // Cor da linha quando selecionado
    },
    switchButtonText: {
        fontSize: 16,
    },
    switchButtonTextSelected: {
        color: 'black', // Cor do texto quando selecionado
    },
    switchButtonTextUnselected: {
        color: 'gray', // Cor do texto quando não selecionado
    },
});
