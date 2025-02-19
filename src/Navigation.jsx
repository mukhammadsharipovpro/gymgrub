import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import GymGrubHomeScreen from './pages/GymGrubHomeScreen';
import GymGrubCartScreen from './pages/GymGrubCartScreen';
import GymGrubCartSuccessScreen from './pages/GymGrubCartSuccessScreen';
import GymGrubReservationScreen from './pages/GymGrubReservationScreen';
import GymGrubReservationSuccessScreen from './pages/GymGrubReserveSuccessScreen';
import GymGrubContactsScreen from './pages/GymGrubContactsScreen';
import GymGrubTranslationsScreen from './pages/GymGrubTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'МЕНЮ', screen: 'GymGrubHomeScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'GymGrubTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'GymGrubContactsScreen'},
    {label: 'БРОНЬ СТОЛИКА', screen: 'GymGrubReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={() => navigateToScreen('GymGrubCartScreen')}>
          <Image source={CartIcon} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'GymGrubHomeScreen', component: GymGrubHomeScreen},
  {name: 'GymGrubCartScreen', component: GymGrubCartScreen},
  {name: 'GymGrubCartSuccessScreen', component: GymGrubCartSuccessScreen},
  {name: 'GymGrubReservationScreen', component: GymGrubReservationScreen},
  {
    name: 'GymGrubReservationSuccessScreen',
    component: GymGrubReservationSuccessScreen,
  },
  {name: 'GymGrubContactsScreen', component: GymGrubContactsScreen},
  {
    name: 'GymGrubTranslationsScreen',
    component: GymGrubTranslationsScreen,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: '20%',
    alignItems: 'center',
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  drawerItem: {
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    margin: 30,
    // position: 'absolute',
    // top: 100,
  },
});
