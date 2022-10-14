import React from 'react';
import {Text, Modal, View, StyleSheet, Dimensions, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, Animated} from 'react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = ()=>{
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue,{
        toValue: 1,
        duration: 300, 
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  }
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function All() {
  const [visible, setVisible] = React.useState(false);
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
            <Text style={styles.title}>Issues</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* < Body...............................................................................................................! /> */}
          <View>
            <View style={styles.mainSearchViewWrapper}>
              <View style={styles.searchViewWrapper}>
                <TextInput placeholder='Search problem' style={styles.searchView} />
                <TouchableOpacity style={styles.search1}>
                  <Image source={require('./../assest/search1.png')} style={styles.search} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView style={{marginBottom: 50}}>
            <View style={styles.issueWrapper}>
              <View style={styles.issueTextes}>
                <Text style={styles.issueText1}>Please give permission in HRIS system for personal file handling </Text>
                <View style={styles.issueTextes1}>
                  <Text style={styles.issueText2}>2022.05.05</Text>
                  <Text style={styles.issueText3}>DGM</Text>
                  <Text style={styles.issueText4}>Job No:</Text>
                  <Text style={styles.issueText5}>542.20/CRJ/22/0099</Text>
                </View>
              </View>
              <View>
                <ModalPoup visible={visible}>
                  <View style={{alignItems: 'center'}}> 
                    <View style={styles.header1}>
                      <TouchableOpacity onPress={() => setVisible(false)}>
                        <Image source={require('./../assest/closed.png')} style={{height: 13, width: 13}} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.issueTextes}>
                      <View style={styles.modalTexthead}>
                        <View style={styles.modalTexthead1}>
                          <Text style={styles.issueTexts2}>Issue Number: </Text>
                          <Text style={styles.issueTexts2}># 0090</Text>
                        </View>
                        <Text style={styles.issueTexts3}>2022-05-05</Text>
                      </View>
                      <Text style={styles.issueTexts1}>Please give permission in HRIS system for personal file handling </Text>
                      <View style={styles.rowtext1}>
                        <Text style={styles.issueTexts6}>Job No: </Text>
                        <Text style={styles.issueTexts5}>542.20/CRJ/22/0099</Text>
                      </View>
                      <View style={styles.rowtext1}>
                        <Text style={styles.issueTexts6}>Job finalize Date: </Text>
                        <Text style={styles.issueTexts5}>2022-04-07</Text>
                      </View>
                      <View style={styles.rowtext1}>
                        <Text style={styles.issueTexts6}>User: </Text>
                        <Text style={styles.issueTexts5}>Imalka</Text>
                        <Text style={styles.issueTexts6}>:</Text>
                        <Text style={styles.issueTexts5}>0771600949</Text>
                      </View>
                      <View style={styles.imageWrapper}>
                        <Image source={require('./../assest/callUser1.png')} style={styles.imageme} />
                        <Image source={require('./../assest/callRing.png')} style={styles.imageme} />
                        <View style={styles.rowtext2}>
                          <View style={styles.rowtext1}>
                            <Text style={styles.issueTexts6}>Status:</Text>
                            <Text style={styles.issueTexts5}>Ongoing</Text>
                          </View>
                          <View style={styles.rowtext1}>
                            <Text style={styles.issueTexts6}>Assign to:</Text>
                            <Text style={styles.issueTexts5}>Lakshitha</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </ModalPoup>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Image source={require('./../assest/more.png')} style={styles.issueImageRight}/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          {/* < End of body..........................................................................................................! /> */}          
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
  // < body...............................................................................................! />
  search: {
    height: 24,
    width: 24,
    marginTop: 8,
    marginLeft: 8,
  },
  search1: {
    backgroundColor: '#710F30',
    height: 40,
    width: 40,
    borderRadius: 10,
    marginTop: 5,
  },
  searchViewWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    margin: 15,
    elevation: 5,
  },
  searchView: {
    width: '85%',
    marginLeft: 10,
    fontSize: 16,
  },
  mainSearchViewWrapper: {
    marginTop: 20,
  },
  // <issue........................................................................................................!/>
  issueWrapper: {
    backgroundColor: '#ECECEC',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  issueImageLeft: {
    height: 31,
    width: 31,
    marginTop: 30,
    margin: 5,
  },
  issueImageRight: {
    height: 31,
    width: 31,
    marginTop: 20,
    margin: 10,
  },
  issueTextes: {
    width: '84%',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  issueTextes1: {
    flexDirection: 'row',
    marginTop: 10,
  },
  issueText1: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#710F30',
    marginLeft: 5,
  },
  issueText2: {
    fontSize: 13,
    marginLeft: 10,
    marginRight: 5,
    width: '25%',
  },
  issueText3: {
    fontSize: 13,
    marginLeft: 10,
    marginRight: 5,
    width: '20%',
  },
  issueText4: {
    fontSize: 13,
    marginLeft: 10,
  },
  issueText5: {
    fontSize: 13,
    marginLeft: 2,
    marginRight: 5,
    width: '40%',
  },
  // <End of issue.................................................................................................!/>
  // <Modal style..................................................................................................!/>
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
  },
  header1: {
    marginLeft: 260,
    marginBottom: 5,
  },
  modalTexthead: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  rowtext1: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  rowtext2: {
    marginTop: 15,
  },
  issueTexts2: {
    fontWeight: '700',
    color: '#5E5E5E',
  },
  modalTexthead1: {
    width: '70%',
    flexDirection: 'row',
  },
  issueTexts3: {
    color: '#5B5959',
    fontWeight: '600',
  },
  issueTexts1: {
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#A7363A',
    marginBottom: 13,
  },
  issueTexts6: {
    color: '#9E989A',
    fontWeight: '600',
    marginRight: 8,
    marginBottom: 3,
  },
  issueTexts5: {
    color: '#000',
    fontWeight: 'bold',
    marginRight: 2,
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  imageme: {
    height: 50,
    width: 50,
    marginTop: 15,
    marginRight: 20,
    marginBottom: 8,
  },
  // <End of Modal style...........................................................................................!/>

  // <End of body.........................................................................................! />
});