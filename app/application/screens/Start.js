import 	React, {Component} from 'react';
var styles = require('../../assets/files/Styles');
import {Image, StatusBar} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import { Body, Text, Toast, View, Button} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import * as firebase from "firebase";
import Strings from '../utils/Strings';
import * as Facebook from 'expo-facebook';
import FacebookConfig from '../utils/FacebookConfig';
import ColorsApp from '../utils/ColorsApp';

export default class Start extends Component {

	 login = () => {
        this.props.navigation.navigate('Login');
    };

 	 register = () => {
        this.props.navigation.navigate('Register');
    };

	async facebook () {

		await Facebook.initializeAsync({ appId: FacebookConfig.config.application_id, appName: FacebookConfig.config.application_name});

		const {type, token, permissions} = await Facebook.logInWithReadPermissionsAsync({ permissions: FacebookConfig.config.permissions });

		if(type === "success") {
			const credentials = firebase.auth.FacebookAuthProvider.credential(token);
			firebase.auth().signInWithCredential(credentials)
				.catch(error => {
			Toast.show({ text: `${Strings.ST32}`, position: 'bottom', buttonText: `${Strings.ST33}` })

				})
		}
	}

	render () {

		return (

    	<BackgroundImage source={require('../../assets/images/bg.jpg')}>
    	<StatusBar barStyle="light-content"/>
		<Body>
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
			<Image source={require('../../assets/images/logo.png')} style={styles.logo_start} resizeMode="contain"/>
			<View style={{height: 30}}/>
			<Button rounded block onPress={this.login.bind(this)} style={styles.button_start_1}>
			<Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>{Strings.ST26.toUpperCase()}</Text>
			</Button>
			<Button rounded bordered block onPress={this.register.bind(this)} style={styles.button_start}>
			<Text style={{color: ColorsApp.PRIMARY, fontWeight: 'bold', fontSize: 14}}>{Strings.ST27.toUpperCase()}</Text>
			</Button>

			<Button iconLeft rounded block onPress={this.facebook.bind(this)} style={styles.socialFacebook}>
			<FontAwesome name='facebook' style={{fontSize: 18, color: '#3b5998'}} />
			<Text style={{color: '#3b5998', fontWeight: 'bold', fontSize: 14}}>{Strings.ST104.toUpperCase()}</Text>
			</Button>

			</View>

		
		</Body>
		</BackgroundImage>

		);
	}
}