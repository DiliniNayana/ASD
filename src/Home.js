import React, {useState, useEffect} from 'react';
import {ImageBackground, SafeAreaView, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import {createStackNaviator} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import fetchService from '../components/fetchService';
import {asyncStorageServiceGetItem} from '../components/asyncStorageService';

import Myall from './../src/All';

const movieURL = "https://asd.ceb.lk/API/news.php?id=1";

const dataSource = [
  {
    title: "CEB 1",
    caption: "Description",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaQhsHmLU-AgjPMXKan4yyTAKxUnzfd3VrbkFzxR6OL-Ho82sTuEKXu3p694CZEf0Xeo&usqp=CAU"
  },
];

export default function Home({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(undefined);
  
  const [mantisData1, setMantisData1] = useState();
  const [mantisData2, setMantisData2] = useState();
  const [mantisData3, setMantisData3] = useState();
  const [mantisData4, setMantisData4] = useState();

  useEffect(() => {
    // fetch(movieURL)
    //   .then((response) => response.json())
    //   //.then(json => setData(json.movies))
    //   .then(json => setData(json))
    //   .catch((error) => alert(error))
    //   .finally(() => setLoading(false));

    asyncStorageServiceGetItem('user_data').then(data => setUserData(JSON.parse(data)))
  }, []);

  useEffect(() => {
    console.log(userData)
    if (userData !== undefined) {
      //  API calls

      fetch(movieURL)
        .then((response) => response.json())
        //.then(json => setData(json.movies))
        .then(json => setData(json))
        .catch((error) => alert(error))
        .finally(() => setLoading(false));

      fetchService(`https://asd.ceb.lk/API/issue_get1.php?epf=${userData?.id}`, 'GET', undefined)
        .then(res => {
          setMantisData1(res[0]);

          //asyncStorageServiceSetItem('user_data', JSON.stringify(data));

          //mantisData = JSON.stringify(data);



        })
        .catch(error => console.log(error))

      fetchService(`https://asd.ceb.lk/API/issue_get2.php?epf=${userData?.id}`, 'GET', undefined)
        .then(res => {
          setMantisData2(res[0]);

          //asyncStorageServiceSetItem('user_data', JSON.stringify(data));

          //mantisData = JSON.stringify(data);



        })
        .catch(error => console.log(error))

      fetchService(`https://asd.ceb.lk/API/issue_get3.php?epf=${userData?.id}`, 'GET', undefined)
        .then(res => {
          setMantisData3(res[0]);

          //asyncStorageServiceSetItem('user_data', JSON.stringify(data));

          //mantisData = JSON.stringify(data);



        })
        .catch(error => console.log(error))

      fetchService(`https://asd.ceb.lk/API/issue_get4.php?epf=${userData?.id}`, 'GET', undefined)
        .then(res => {
          setMantisData4(res[0]);

          //asyncStorageServiceSetItem('user_data', JSON.stringify(data));

          //mantisData = JSON.stringify(data);



        })
        .catch(error => console.log(error))
    }
  }, [userData]);


  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 4000);

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
              <Text style={styles.text1}>{userData?.full_name}</Text>
              <Text style={styles.text2}>{userData?.designation}</Text>
            </View>
          </View>
          <View style={styles.title1}>
            <Text style={styles.title}>Home</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* < Cards..................................................................................................................! /> */}
          <View style={styles.mainCardwrapper}>
            <View style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card} 
                onPress={() => navigation.navigate('All')} >
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job3.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>{mantisData1?.num}</Text>
                </View>
                <Text style={styles.cardText1}>Unassigned Jobs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>{mantisData2?.num}</Text>
                </View>
                <Text style={styles.cardText1}>Assigned Jobs</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardWrapper}>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job2.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>{mantisData3?.num}</Text>
                </View>
                <Text style={styles.cardText1}>Resolved Jobs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardtextWrapper}>
                  <Image source={require('./../assest/job1.png')} style={styles.cardImage} />
                  <Text style={styles.cardText}>{mantisData4?.num}</Text>
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
    margin: '4%',
  },
  userLogo: {
    height: 35,
    width: 35,
    marginTop: '4%',
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
    marginTop: '5%',
  },
  // <card style....................................! />
  card: {
    backgroundColor: '#fff',
    width: '40%',
    margin: 10,
    borderRadius: 20,
    elevation: 5,
    marginLeft: '5%',
    marginRight: '2%',
    paddingTop: '2%',
    paddingBottom: '1%',
  },
  cardImage: {
    height: 50,
    width: 50,
    margin: '6%',
    borderRadius: 10,
  },
  cardText: {
    marginTop: '10%',
    marginLeft: '20%',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#861C17',
  },
  cardWrapper: {
    flexDirection: 'row',
  },
  mainCardwrapper: {
    marginTop: '10%',
    alignItems: 'center',
  },
  cardtextWrapper: {
    flexDirection: 'row',
  },
  cardText1: {
    textAlign: 'center',
    marginBottom: '8%',
    fontWeight: '600',
    fontSize: 16,
    marginTop: '3%',
  },
  // <card style end.................................! />
  // <News style.....................................! />
  newsWrapper: {
    margin: '5%',
  },
  newsTopic1: {
    fontSize: 22,
    fontWeight: '500',
    color: '#710F30',
    marginLeft: '3%',
  },
  newsTopic: {
    marginBottom: '5%',
    marginTop: '3%',
  },
  // <News style end.................................! />
});