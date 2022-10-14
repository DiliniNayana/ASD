import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

//screen
import Login from './src/Login';
import BottomTab from './src/bottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
          headerShown: false
      }}>
        <Screen name="Login" component={Login} />
        <Screen name="bottomTab" component={BottomTab} />
      </Navigator>
    </NavigationContainer>
  );
}
