import React from 'react';
import { Text, Button } from 'react-native'
import Screen from './app/components/Screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import { navigationRef } from './app/navigation/rootNavigation';
import * as Notifications from 'expo-notifications';


function App(props) {
  const [user, setUser] = React.useState();
  const [isReady, setIsReady] = React.useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  if (!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => setIsReady(false)} />

  const showNotification = () => {
    Notifications.presentNotificationAsync({
      title: 'order success',
      body: 'Order done',
      data: {
        _displayInForeground: true,
      }
    })
  }

  return (
    // <Button title='tapme' onPress={showNotification} />
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App


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