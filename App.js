import React from 'react';
import { Text, Button } from 'react-native'
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from './app/navigation/AuthNavigator';


const Tweets = ({ navigation }) => (
  <Screen>
    <Button title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails')}
    />

  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Hello</Text>
  </Screen>
)

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
  // screenOptions={{
  //   headerStyle: { backgroundColor: 'dodgerblue' },
  //   headerTintColor: 'white',
  // }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}

    />
    <Stack.Screen name='TweetDetails' component={TweetDetails}

    />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black',
    }}
  >
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
      }} />


    <Tab.Screen name='Account' component={Account}

    />
  </Tab.Navigator>
)

function App(props) {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App