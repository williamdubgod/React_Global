import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9FFE5',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        alignItems: 'center',
        marginTop: 80
      },
      logo: {
        width: 242,
        height: 225,
        marginBottom: 50,
      },
      formContainer: {
        alignItems: 'center',
      },
      input: {
        width: 321,
        height: 52,
        borderRadius: 15,
        backgroundColor: 'rgba(128, 128, 128, 0.50)',
        paddingHorizontal: 15,
      },
      loginButton: {
        backgroundColor: 'black',
        width: 153,
        height: 54,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
      },
      loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      registerLink: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
      },
      registerLinkText: {
        color: 'black',
        marginBottom: 10,
      },
      registerButtonText: {
        color: 'black',
        textDecorationLine: 'underline',
      },
    
});