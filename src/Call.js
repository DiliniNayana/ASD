import React from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import call from 'react-native-phone-call';


export default function Call() {

  const triggerCall = () => {

    const args = {
      number: '0112390854',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall2 = () => {

    const args = {
      number: '0714240519',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall3 = () => {

    const args = {
      number: '0701922412',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall4 = () => {

    const args = {
      number: '0714301171',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall5 = () => {

    const args = {
      number: '0701922423',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall6 = () => {

    const args = {
      number: '0701922416',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall7 = () => {

    const args = {
      number: '0701922417',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };
  const triggerCall8 = () => {

    const args = {
      number: '0701922415',
      prompt: false,
    };
    //make a call
    call(args).catch(console.error); 

  };

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
            <Text style={styles.title}>Contact</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* <Body ....................................................................................................................!/> */}
          {/* <View style={styles.topicView}>
              <Text style={styles.topic}>Contact Service Desk</Text>
            </View> */}
          <ScrollView style={styles.ScrollView1}>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>General Line</Text>
                <Text style={styles.callText2}>Manager ISO Unit</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall} >
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Miss. Meththa Perera</Text>
                <Text style={styles.callText2}>Manager ISO</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall2}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Mr. Sameera Indunil</Text>
                <Text style={styles.callText2}>Ledger/MIS reports/ PIV</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall3}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Mr. Manju Alwis</Text>
                <Text style={styles.callText2}>FIFO/ Inventory/ CBRS/ Bulk e-bills/ LED/ Purchase Invoice</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall4}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Mr. Chathuranga</Text>
                <Text style={styles.callText2}>Requisitions/ Returns/ Service Desk/ ABES</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall5}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Mr. Niroshan</Text>
                <Text style={styles.callText2}>Payslips/ Purchase/ Invoice/ Inventory/ Requisitions/ Returns/ PP</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall6}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Mr. Lakshitha</Text>
                <Text style={styles.callText2}>HRIMS/ Service Main Card/ Service Desk</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall7}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <Image source={require('./../assest/callUser.png')} style={styles.callUser} />
              <View style={styles.textContainer}>
                <Text style={styles.callText1}>Ms. Pradeepa</Text>
                <Text style={styles.callText2}>Payslips/ Payment Plans/ MITFIN Configuration</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPress={triggerCall8}>
                <Image source={require('./../assest/callRing.png')} style={styles.callRing} />
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* <End of Body .............................................................................................................!/> */}
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
    marginBottom: 22,
  },
  //  <body..................................................................................!/>
  // topicView: {
  //   marginTop: 80,
  // },
  // topic: {
  //   fontSize: 18,
  //   fontWeight: '500',
  //   textAlign: 'center',
  // },
  rowWrapper: {
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 5,
    marginBottom: 3,
  },
  callRing: {
    height: 40,
    width: 40,
    margin: 15,
  },
  callUser: {
    height: 28,
    width: 24,
    margin: 18,
    marginLeft: 20,
    marginRight: 25,
    opacity: 0.7,
  },
  callText1: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 10,
    color: '#000',
  },
  textContainer: {
    width: '60%',
  },
  callText2: {
    opacity: 0.7,
    marginBottom: 5,
  },
  ScrollView1: {
    marginBottom: 50,
  },
  //  < End of body..........................................................................!/>
});