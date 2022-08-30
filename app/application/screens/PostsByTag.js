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

export default class PostsByTag extends Component {

_isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[],
    };
  }

  componentDidMount() {
    
    this.props.navigation.setOptions({
      title: this.props.route.params.TitleTag,
      headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { this.props.navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

       this._isMounted = true;

       return fetch(ConfigApp.URL+'json/data_posts.php?tag='+this.props.route.params.IdTag)
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

  PostDetails = (item) => {
    this.props.navigation.navigate('PostDetailsScreen', {item});
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
        <ListEmpty title={Strings.ST143}/>
      );
    } 

    const { params } = this.props.route.params;
    const IdTag = params ? params.IdTag : null;

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>


<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

<FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
                <TouchableOpacity onPress={() => this.PostDetails(item)} activeOpacity={1} style={{marginBottom: 5}}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.post_image}} style={styles.background_card} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']} style={styles.gradient_card} imageStyle={{borderRadius: 8}}>
                    <Text style={styles.category_card}>{item.tag_title.toUpperCase()}</Text>
                    <Text numberOfLines={2} style={styles.title_card}>{item.post_title}</Text>
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

