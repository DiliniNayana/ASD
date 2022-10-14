import React from 'react';
import {View, Text, Dimensions, ImageBackground, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (email === 'Dilini' && password === '123') {
      console.warn('sign in');
      // alert = ('hello');
      navigation.navigate('bottomTab');
    }


  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={require('./../assest/background.png')} resizeMode='cover' style={styles.image}>
          <View style={styles.logo}>
            <Image source={require('./../assest/ceb.png')} style={styles.logo1} />
          </View>
          <View>
            <View style={styles.userfeild}>
              <TextInput style={styles.input} placeholder={'User Name'} value={email} onChangeText={text => setEmail(text)}/>
              <Image source={require('./../assest/callUser.png')} style={styles.userimage} />
            </View>
            <View style={styles.userfeild}>
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <Image source={require('./../assest/key.png')} style={styles.userimage1} />
            </View>
          </View>
          <View style={styles.forget}>
            <Text>Forget Password ?</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button1} onPress={handleSignIn}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>Login</Text>
              <Image source={require('./../assest/send2.png')} style={styles.send} />
            </TouchableOpacity>
          </View>
          <View style={styles.copy}>
            <Text style={{color: '#C5BFC1', fontSize: 12}}>Version 1.0.0</Text>
            <Text style={{color: '#C5BFC1', fontSize: 12}}>Ceylon Electricity borad @ 2022</Text>
          </View>

        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    flex: 1,
  },
  image2: {
    justifyContent: 'center',
    height: 286,
    width: 50,
  },
  logo: {
    alignItems: 'center',
    alignContent: 'center',
  },
  logo1: {
    height: 55,
    width: 270,
    marginTop: 140,
    marginBottom: 40,
  },
  userfeild: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 60,
    marginLeft: 25,
    marginRight: 25,
    elevation: 5,
    flexDirection: 'row',
    paddingBottom: 10,
    padding: 10,
  },
  userimage: {
    height: 23,
    width: 20,
    marginTop: 12,
    opacity: 0.5,
  },
  userimage1: {
    height: 20.5,
    width: 21,
    marginTop: 15,
    opacity: 0.4,
  },
  input: {
    width: '85%',
    marginLeft: 10,
  },
  button: {
    marginLeft: 230,
    marginTop: 40,
    backgroundColor: '#710F30',
    marginRight: 30,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    color: '#fff',
  },
  forget: {
    marginLeft: 30,
    marginTop: 20,
  },
  copy: {
    alignItems: 'center',
    marginTop: 200 ,
    opacity: 0.5,
  },
  send: {
    height: 16,
    width: 18,
    marginLeft: 10,
    marginTop: 3,
  },
  button1: {
    flexDirection: 'row',
  },
});