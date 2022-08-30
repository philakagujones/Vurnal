import React, {Component} from 'react';
import {Alert, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Label, Form} from 'native-base';
import * as firebase from "firebase";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import ColorsApp from '../utils/ColorsApp';
import { StatusBar } from "react-native";
import {Grid, Row, Col } from 'react-native-easy-grid';
import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');
var width = Dimensions.get('window').width;

export default class ForgetPass extends Component {


constructor() {
    super();;
    this.state = {
      email: ''
    }
 }
	restpass (){

		const { email }  = this.state;
		if (email) {
        firebase.auth().sendPasswordResetEmail(email).then(()=>{
				Toast.show({ text: `${Strings.ST34}`, position: 'bottom'})
        }).catch((e)=>{
            console.log(e);

            if(e.code == 'auth/user-not-found'){
				Toast.show({ text: `${Strings.ST31}`, position: 'bottom', buttonText: `${Strings.ST33}` })
               
            }else{
				Toast.show({ text: `${Strings.ST32}`, position: 'bottom', buttonText: `${Strings.ST33}` })
            }
            
        	});
        }
	}

	render() {
		return (
<Container style={styles.background_general}>

      <LinearGradient colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 45, paddingHorizontal: 30, width: width}}>
</LinearGradient>

    <KeyboardAwareScrollView>


<LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)']} style={{paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5}}>

<Grid >
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#000'}}/>
</TouchableOpacity>
    </Col>
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold' }}>{Strings.ST29.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    </Col>
</Grid>
</LinearGradient>


		<View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
			<Image source={require('../../assets/images/logo_dark.png')} style={styles.logo_start} resizeMode="contain"/>

						<Form ref="formId" style={{marginTop: 15}}>

			<Item rounded style={styles.inputLogin}>
			<Ionicons name="md-mail" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
           	<Input onChangeText={email => this.setState({email})} placeholder={Strings.ST107} placeholderTextColor="#a4a4a4" style={{fontSize: 16, color: '#a4a4a4'}} autoCapitalize="none"/>
          	</Item>
			</Form>


			<TouchableOpacity onPress={this.restpass.bind(this)}>
			<LinearGradient colors={[ColorsApp.SECOND, ColorsApp.PRIMARY]} start={[0, 0]} end={[1, 0]} style={styles.button_auth}>
			<Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>{Strings.ST28.toUpperCase()}</Text>
			</LinearGradient>
			</TouchableOpacity>	

				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.text_auth}>
				<Text style={styles.text_auth}>{Strings.ST35.toUpperCase()}</Text>
				</TouchableOpacity>

			</View>
			</KeyboardAwareScrollView>
		</Container>
			);
	}
}