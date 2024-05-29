import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',  
    paddingHorizontal: 20,
    backgroundColor: '#E9FFE5',
  },
  logo: {
    width: 242,
    height: 225,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',  
    justifyContent: 'center',  
  },
  loginButton: {
    backgroundColor: 'black',
    height: 54,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    alignSelf: 'center',
    width: '80%'
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
