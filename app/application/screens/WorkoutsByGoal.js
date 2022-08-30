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
import ListEmpty from '../components/ListEmpty'; 

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class WorkoutsByGoal extends Component {

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

    this.props.navigation.setOptions({
      title: this.props.route.params.TitleGoal,
      headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { this.props.navigation.goBack() }} style={styles.arrowbackicon}/>,
    });
    
       this._isMounted = true;
       
       return fetch(ConfigApp.URL+'json/data_wgoal.php?goal='+this.props.route.params.IdGoal)
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
  
  WorkoutDetails = (item) => {
    this.props.navigation.navigate('WorkoutDetailsScreen', {item});
  };

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    const dataSource = this.state.dataSource

    if (dataSource.length == []) {
      return (
        <ListEmpty title={Strings.ST141}/>
      );
    } 

    const { params } = this.props.route.params;
    const IdGoal = params ? params.IdGoal : null;

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

        <FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
                <TouchableOpacity onPress={() => this.WorkoutDetails(item)} activeOpacity={1}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.workout_image}} style={styles.background_card} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']} style={styles.gradient_card}>
                            <Text style={styles.category_card}>{item.level_title.toUpperCase()}</Text>
                            <Text numberOfLines={2} style={styles.title_card}>{item.workout_title}</Text>
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

