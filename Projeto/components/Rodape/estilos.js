import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#202022',
      padding: 0.075 * width, 
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });