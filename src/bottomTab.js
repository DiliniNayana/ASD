import React from 'react';
import {Text, View, Image} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import he from 'react-native-vector-icons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//src
import MyIssue from './../src/Newissu';
import MyHome from './../src/Home';
import Mycall from './../src/Call';
import Myall from './../src/All';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#fff',
          borderRedius: 15,
          hight: 90,
        }
      }}>
      <Tab.Screen name="Hello" component={MyHome} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems:'center', justifyContent:'center', top:10}}>
              <Image
                source={require("./../assest/home.png")}
                resizeMode="contain"
                style ={{width:25, height:25, tintColor: focused? '#710F30' : '#666464'}}
              />
              <Text style ={{fontSize:12, fontWeight: 'bold', color: focused? '#710F30' : '#666464', paddingBottom: 10}}>Home</Text>
            </View>
          ),
          headerShown: false,
        }}/>
      <Tab.Screen name="Issue" component={MyIssue} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems:'center', justifyContent:'center', top:10}}>
              <Image
                source={require("./../assest/add.png")}
                resizeMode='contain'
                style ={{width:25, height:25, tintColor: focused? '#710F30' : '#666464'}}
              />
              <Text style ={{fontSize:12, fontWeight: 'bold', color: focused? '#710F30' : '#666464', paddingBottom: 10}}>Issue</Text>
            </View>
          ),
          headerShown: false,
        }}/>
          <Tab.Screen name="All" component={Myall} options={{
              tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Image
                    source={require("./../assest/mag.png")}
                    resizeMode='contain'
                    style ={{width:25, height:25, tintColor: focused? '#710F30' : '#666464'}}
                    />
                    <Text style ={{fontSize:12, fontWeight: 'bold', color: focused? '#710F30' : '#666464', paddingBottom: 10}}>Issues</Text>
                </View>
            ),
            headerShown:false,
          }}/>
          <Tab.Screen name="Call" component={Mycall} options={{
              tabBarIcon: ({focused}) =>(
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Image
                    source={require("./../assest/call1.png")}
                    resizeMode='contain'
                    style ={{width:25, height:25, tintColor: focused? '#710F30' : '#666464'}}
                    />
                    <Text style ={{fontSize:12, fontWeight: 'bold', color: focused? '#710F30' : '#666464', paddingBottom: 10}}>Contact</Text>
                </View>
            ),
            headerShown:false,
          }}/>


        </Tab.Navigator>



/*
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={Mylogin} />
<Stack.Screen name="Home" component={MyHome}  />
</Stack.Navigator>
</NavigationContainer>
*/
    );
  }

export default BottomTab;


