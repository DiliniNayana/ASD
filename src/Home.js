import React, {useState, useEffect} from 'react';
import {ImageBackground, SafeAreaView, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

const dataSource = [
  {
    title: "CEB 1",
    caption: "Description",
    url:
      ""
  },
  {
    title: "CEB 2",
    caption: "Description",
    url:
      ""
  },
  {
    title: "CEB 3",
    caption: "Description",
    url:
      ""
  }
];

export default function Home() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 1000);

    return () => clearInterval(toggle);
  });

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
            <Text style={styles.title}>Home</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* < Cards..................................................................................................................! /> */}
          <View style={styles.mainCardwrapper}>
            <View style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card} >
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job3.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>2</Text>
                </View>
                <Text style={styles.cardText1}>Unassigned Jobs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>12</Text>
                </View>
                <Text style={styles.cardText1}>Assigned Jobs</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job2.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>8</Text>
                </View>
                <Text style={styles.cardText1}>Resolved Jobs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job1.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>22</Text>
                </View>
                <Text style={styles.cardText1}>All Jobs</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* < End of Cards...............................................................................................................! /> */}
          {/* < News.......................................................................................................................! /> */}
          <View style={styles.newsWrapper}>
            <View style={styles.newsTopic}>
              <Text style={styles.newsTopic1}>News Alert</Text>
            </View>
            <View>
              <Slideshow position={position} dataSource={dataSource} style={styles.newsCard} />
            </View>
          </View>
          {/* < End of News.....................................................................................................................! /> */}
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
  // <card style....................................! />
  card: {
    backgroundColor: '#fff',
    width: '40%',
    margin: 10,
    borderRadius: 20,
    elevation: 5,
    marginLeft: 15,
    marginRight:15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  cardImage: {
    height: 50,
    width: 50,
    margin: 8,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 20,
    marginLeft: 40,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#861C17',
  },
  cardWrapper: {
    flexDirection: 'row',
  },
  mainCardwrapper: {
    marginTop: 28,
    alignItems: 'center',
  },
  cardtextWrapper: {
    flexDirection: 'row',
  },
  cardText1: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 16,
    marginTop: 5,
  },
  // <card style end.................................! />
  // <News style.....................................! />
  newsWrapper: {
    margin: 20,
  },
  newsTopic1: {
    fontSize: 22,
    fontWeight: '500',
    color: '#710F30',
    marginLeft: 10,
  },
  newsTopic: {
    marginBottom: 18,
    marginTop: 10,
  },
  // <News style end.................................! />
});