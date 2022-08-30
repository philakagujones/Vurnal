import React, {Component} from 'react';
import AppPreLoader from '../components/AppPreLoader'; 
import { ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, ActivityIndicator, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class WGoals extends Component {

_isMounted = false;

  navigateToScreen = (route) => () => {
    this.props.navigation.navigate(route);
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[],
    };
  }

  componentDidMount() {
    
       this._isMounted = true;
       
       return fetch(ConfigApp.URL+'json/data_goals.php')
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


ListWorkoutsByGoal=(goal_id, goal_title)=>
{
      this.props.navigation.navigate('WorkoutsByGoalScreen', { IdGoal: goal_id, TitleGoal: goal_title });    
}

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

        <FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
                <TouchableOpacity onPress={this.ListWorkoutsByGoal.bind(this, item.goal_id, item.goal_title)} activeOpacity={1}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.goal_image}} style={styles.background_categories} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.gradient_categories}>
                    <View style={styles.title_categories_border}></View>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.title_categories_background}>
                            <Text style={styles.title_categories}>{item.goal_title.toUpperCase()}</Text>
                    </LinearGradient>
                    </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />

</View>


</Container>
    );
  }
}

