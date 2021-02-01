import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// import { SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './pages/Home';
import RWebView from './pages/Webview';

function Demo() {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerBackTitle: ' ' }}>
          <Stack.Screen name="Home" options={{ header: () => null }}>
            {() => (
              <Tab.Navigator initialRouteName="Analytics">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Demo} />
              </Tab.Navigator>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Webview"
            component={RWebView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
