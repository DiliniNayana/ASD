import React from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Newissu() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={require('./../assest/homebg.png')} style={styles.image}>
          {/* <header.................................................................................................................! /> */}
          <View style={styles.header}>
            <View style={styles.userLogo1}>
              <Image source={require('./../assest/userLogo.png')} style={styles.userLogo} />
            </View>
            <View style={styles.text}>
              <Text style={styles.text1}>Employee Name</Text>
              <Text style={styles.text2}>Job Type</Text>
            </View>
          </View>
          <View style={styles.title1}>
            <Text style={styles.title}>Issue</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* < Body....................................................................................................................! /> */}
          <View style={styles.mainTextWrapper}>
            <View style={styles.textWrapper1}>
              <Text style={styles.inputss1}>Dept ID</Text>
              <TextInput style={styles.inputss2} editable={false} placeholder={'np-008977999'} />
            </View>
            <View style={styles.textWrapper1}>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>User Name</Text>
                <TextInput style={styles.inputs2} />
              </View>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>Contact Number</Text>
                <TextInput style={styles.inputs2} />
              </View>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.input1}>Summary</Text>
              <TextInput style={styles.input2} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.input1}>Description</Text>
              <TextInput style={styles.input3} multiline={true} />
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonView1}>
              <Text style={styles.send1}>Send</Text>
              <Image source={require('./../assest/send2.png')} style={styles.send} />
            </TouchableOpacity>
          </View>
          {/* < End of Body.............................................................................................................! /> */}

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
  header: {
    flexDirection: 'row',
    margin: 15,
  },
  userLogo: {
    height: 35,
    width: 35,
    marginTop: 3,
  },
  text: {
    marginLeft: 10,
  },
  text1: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  text2: {
    color: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  title1: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  //  <body................................................................................................!/>
  textWrapper: {
    marginTop: 2,
  },
  textWrapper2: {
    marginTop: 2,
    width: '48%',
    marginHorizontal: 5,
  },
  mainTextWrapper: {
    margin: 20,
    marginTop: 50,
  },
  input2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
  },
  inputs2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
  },
  inputss2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
    width: '50%',
  },
  input1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  inputs1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  inputss1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
  },
  input3: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 2,
    height: 80,
  },
  buttonView: {
    backgroundColor: '#861C17',
    borderRadius: 60,
    marginLeft: 220,
    marginRight: 15,
  },
  buttonView1: {
    backgroundColor: '#861C17',
    borderRadius: 60,
    marginLeft: 50,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  send1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  send: {
    height: 20,
    width: 24,
    marginLeft: 10,
  },
  textWrapper1: {
    flexDirection: 'row',
  },
  //  < End of body........................................................................................!/>
});