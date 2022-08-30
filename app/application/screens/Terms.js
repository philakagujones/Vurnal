import React, {Component} from 'react';
import * as firebase from "firebase";
import AppPreLoader from '../components/AppPreLoader'; 
import {TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-htmlview';
import Strings from '../utils/Strings';
import { Ionicons } from '@expo/vector-icons';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Terms extends Component {

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
           }, function() {
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

  render () {

        if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>
<ScrollView>

<View style={{padding: 20}}>

<HTML value={this.state.dataSource[0]['st_termsofservice']}/>
<View style={{height: 40}}/>
<HTML value={this.state.dataSource[0]['st_privacypolicy']}/>


</View>
</ScrollView>

</Container>

    )
  }

}