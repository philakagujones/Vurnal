/**
 * Copyright (c) 2019 Ugur Demirel
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet, Dimensions, Platform, Linking, Alert, Share} from 'react-native';

let facebookParameters = ""
let TwitterParameters = ""

class BoxedShare extends React.Component {

   componentDidMount(){

        // Check which props given and create url query
        if(this.props.FacebookShareURL != undefined)
        {
            if(facebookParameters.includes("?") == false)
            {
                facebookParameters = facebookParameters+"?u="+encodeURI(this.props.FacebookShareURL);
            }else{
                facebookParameters = facebookParameters+"&u="+encodeURI(this.props.FacebookShareURL);
            }
        }
        if(this.props.FacebookShareMessage != undefined)
        {
            if(facebookParameters.includes("?") == false)
            {
                facebookParameters = facebookParameters+"?quote="+encodeURI(this.props.FacebookShareMessage);
            }else{
                facebookParameters = facebookParameters+"&quote="+encodeURI(this.props.FacebookShareMessage);
            }
        }
        if(this.props.TwitterShareURL != undefined)
        {
            if(TwitterParameters.includes("?") == false)
            {
                TwitterParameters = TwitterParameters+"?url="+encodeURI(this.props.TwitterShareURL);
            }else{
                TwitterParameters = TwitterParameters+"&url="+encodeURI(this.props.TwitterShareURL);
            }
        }
        if(this.props.TwitterShareMessage != undefined)
        {
            if(TwitterParameters.includes("?") == false)
            {
                TwitterParameters = TwitterParameters+"?text="+encodeURI(this.props.TwitterShareMessage);
            }else{
                TwitterParameters = TwitterParameters+"&text="+encodeURI(this.props.TwitterShareMessage);
            }
        }
        if(this.props.TwitterViaAccount != undefined)
        {
            if(TwitterParameters.includes("?") == false)
            {
                TwitterParameters = TwitterParameters+"?via="+encodeURI(this.props.TwitterViaAccount);
            }else{
                TwitterParameters = TwitterParameters+"&via="+encodeURI(this.props.TwitterViaAccount);
            }
        }
    }
    render(){
        return(
            <View style={styles.ShareArea}>
                <View style={styles.ShareTitleArea}>
                  <Text style={styles.ShareTitle}>Share!</Text>
                </View>
                <View style={styles.ShareItems}>
                <TouchableOpacity onPress={() => {
                  let url = 'whatsapp://send?text='+this.props.WhatsappMessage;
                  Linking.openURL(url).then((data) => {
                  }).catch(() => {
                    Alert.alert('Error',
                    'Make sure Whatsapp installed on your device',
                    {cancelable: true})
                  });
                }}>
                <Image source={require('../../assets/images/whatsapp.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>
                <Text>WhatsApp</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.ShareItems}>
                <TouchableOpacity onPress={() => {
                  let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;
                  Linking.openURL(url).then((data) => {
                  }).catch(() => {
                    Alert.alert('Error',
                    'An error occurred while share',
                    {cancelable: true})
                  });
                }}>
                <Image source={require('../../assets/images/facebook.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>
                <Text>Facebook</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.ShareItems}>
                <TouchableOpacity onPress={() => {
                    let url = 'https://twitter.com/intent/tweet'+TwitterParameters;
                  Linking.openURL(url).then((data) => {
                  }).catch(() => {
                    Alert.alert('Error',
                    'An error occurred while share',
                    {cancelable: true})
                  });
                }}>
                <Image source={require('../../assets/images/twitter.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>
                <Text>Twitter</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.ShareItems}>
                <TouchableOpacity onPress={() => {
                  Share.share({
                    message: this.props.NativeShareMessage != undefined?this.props.NativeShareMessage:null,
                    url: this.props.NativeShareURL != undefined?this.props.NativeShareURL:null, //only for ios
                    title: this.props.NativeShareTitle != undefined?this.props.NativeShareTitle:null
                  });
                }}>
                <Image source={require('../../assets/images/twitter.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>
                <Text style={{textAlign: 'center', fontSize: 13}}>More</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    ShareArea: {
      backgroundColor: '#e4eaed',
      width: screenWidth-20,
      alignSelf: 'center',
      marginTop: 7,
      marginBottom: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    ShareTitleArea: {
      height: 40,
      width: screenWidth-20,
      backgroundColor: '#dfe5e8',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ShareTitle:{
      fontSize: 20
    },
    ShareItems:{
      width: 70,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 7,
      marginRight: 7
    }
  });

export default BoxedShare;
