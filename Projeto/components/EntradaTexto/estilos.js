import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const larguraDaTela = Dimensions.get('window').width;


export default StyleSheet.create({
      input: {
        height: 50,
        width: larguraDaTela * 0.8,
        borderColor: "#e6e6e6",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: 'rgba(128, 128, 128, 0.50)',
      }
})