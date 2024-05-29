import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import estilos from './estilos';

export default function Footer() {

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('HomeScreen'); 
    };

    const navigateToFornecedoresScreen = () => {
        navigation.navigate('FornecedoresScreen'); 
    };

    const navigateToProductsScreen = () => {
        navigation.navigate('ProductsScreen'); 
    };

    const navigateToUser = () => {
        navigation.navigate('UserScreen'); 
    };

    return(
        <View style={estilos.footer}>
            <TouchableOpacity onPress={navigateToHome}>
                <Icon name="home" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToFornecedoresScreen}>
                <Icon name="search" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProductsScreen}>
                <Icon name="shopping-cart" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToUser}>
                <Icon name="account-circle" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

