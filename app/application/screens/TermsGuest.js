import React, {Component} from 'react';
import {Alert, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Label, Form} from 'native-base';
import * as firebase from "firebase";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Ionicons } from '@expo/vector-icons';
import ColorsApp from '../utils/ColorsApp';
import { StatusBar } from "react-native";
import {Grid, Row, Col } from 'react-native-easy-grid';
import ConfigApp from '../utils/ConfigApp';
import HTMLView from 'react-native-htmlview';
import Strings from '../utils/Strings';
import AppPreLoader from '../components/AppPreLoader'; 
import { LinearGradient } from 'expo-linear-gradient';

var styles = require('../../assets/files/Styles');

export default class TermsGuest extends Component {

_isMounted = false;

constructor(props) {

    super(props);

    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    
       this._isMounted = true;
       
       return fetch(ConfigApp.URL+'json/data_strings.php')
         .then((response) => response.json())
         .then((responseJson) => {
          if (this._isMounted) {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           });
           }
         })
         .catch((error) => {
           console.error(error);
         });
     }

  componentWillUnmount() {
    this._isMounted = false;
  }

	render() {

      if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

return (

<Container style={styles.background_general}>

<ScrollView>


<View style={{padding: 20}}>

<HTMLView value={this.state.dataSource[0]['st_aboutus']}/>
<View style={{height: 40}}/>
<HTMLView value={this.state.dataSource[0]['st_termsofservice']}/>

</View>
</ScrollView>
		</Container>
			);
	}
}