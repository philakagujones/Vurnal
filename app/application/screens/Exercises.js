import React, {Component} from 'react';
import AppPreLoader from '../components/AppPreLoader'; 
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, ActivityIndicator, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Exercises extends Component {

  navigateToScreen = (route) => () => {
    this.props.navigation.navigate(route);
  }

  render() {


    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<ScrollView>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

<TouchableOpacity onPress={this.navigateToScreen('EBodypartsScreen')} activeOpacity={1} style={{marginBottom: 10}}>
<ImageBackground source={require('../../assets/images/bodyparts.jpg')} style={styles.card_general} imageStyle={{borderRadius: 8}}>
<LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']} style={styles.gradient_general}>                        
    <Text style={styles.title_general}>{Strings.ST37.toUpperCase()}</Text>
    <Text style={styles.subtitle_general}>{Strings.ST40.toUpperCase()}</Text>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>


<TouchableOpacity onPress={this.navigateToScreen('EquipmentsScreen')} activeOpacity={1}>
<ImageBackground source={require('../../assets/images/equipments.jpg')} style={styles.card_general} imageStyle={{borderRadius: 8}}>
<LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']} style={styles.gradient_general}>                        
    <Text style={styles.title_general}>{Strings.ST38.toUpperCase()}</Text>
    <Text style={styles.subtitle_general}>{Strings.ST39.toUpperCase()}</Text>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>

</View>

</ScrollView>


</Container>
    );
  }
}

