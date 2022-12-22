import React, {useState} from 'react';
import {View, Text, Dimensions, ImageBackground, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import fetchService from '../components/fetchService';
import {asyncStorageServiceSetItem} from '../components/asyncStorageService';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  // const handleSignIn = () => {
  //   if (email === '042998' && password === '123') {
  //     console.warn('sign in');
  //     // alert = ('hello');
  //     navigation.navigate('bottomTab');
  //   }


  // }

  const handleSignIn = () => {
    fetchService(`https://asd.ceb.lk/API/User.php?epf=040567`, 'GET', undefined)
      .then(res => {
        const data = res;
        console.log("Your Data " + JSON.stringify(data))

       // asyncStorageServiceSetItem('user_data', JSON.stringify(data));

       let userData = data;

        // alert(res.full_name);
      //  navigation.navigate('Home');
      })
      .catch(error => console.log("LOGIN "+error))


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
    width: 273,
    marginTop: '30%',
    marginBottom: '10%',
  },
  userfeild: {
    backgroundColor: '#fff',
    marginTop: '7%',
    borderRadius: 60,
    marginLeft: '8%',
    marginRight: '8%',
    elevation: 5,
    flexDirection: 'row',
    paddingBottom: 10,
    padding: 10,
  },
  userimage: {
    height: 23,
    width: 20,
    marginTop: '4%',
    opacity: 0.5,
  },
  userimage1: {
    height: 20.5,
    width: 21,
    marginTop: '5%',
    opacity: 0.4,
  },
  input: {
    width: '85%',
    marginLeft: '3%',
  },
  button: {
    marginLeft: '60%',
    marginTop: '10%',
    backgroundColor: '#710F30',
    marginRight: '8%',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    color: '#fff',
  },
  forget: {
    marginLeft: '9%',
    marginTop: '4%',
  },
  copy: {
    alignItems: 'center',
    marginTop: '53%' ,
    opacity: 0.5,
  },
  send: {
    height: 16,
    width: 18,
    marginLeft: '8%',
    marginTop: '3%',
  },
  button1: {
    flexDirection: 'row',
  },
});
