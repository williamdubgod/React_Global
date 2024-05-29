import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      marginTop: 60
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      paddingLeft: 16,
      flex: 1,
    },
    searchIcon: {
      marginRight: 10, 
    },
    searchInput: {
      flex: 1,
      height: 60,
    },
  });