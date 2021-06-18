import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    SafeAreaView,
    Image,
    TouchableNativeFeedback,
    View,
    Button,
    Alert,
    Platform,
    StatusBar,
    Dimensions,
} from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
    // console.log(require('./assets/icon.png'));
    // console.log(Dimensions.get('screen'));
    console.log(useDeviceOrientation())
    const { landscape } = useDeviceOrientation();
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    width: '100%',
                    height: landscape ? '100%' : '30%',
                }}
            >

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})


// Alert with yes or no

{/* <Button title={'Click me'}
onPress={() => Alert.alert('Message', 'My Message', [
  { text: 'yes', onPress: () => alert('Yes pressed') },
  { text: 'No', onPress: () => alert('No Pressed') }
])}
/> */}


{/* <Text>
Hello
</Text>

<TouchableNativeFeedback
onPress={() => console.log('image pressed')}
>
<View style={{ backgroundColor: 'dodgerblue', width: 200, height: 70 }}>

</View>
</TouchableNativeFeedback> */}
{/* <Image
source={{
  uri: 'https://picsum.photos/200/300',
  width: 200,
  height: 300,
}}
/> */}


// import WelcomeScreen from './screen/WelcomeScreen';
// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
// } from 'react-native';



// export default function App() {
//   return (

//     <View
//       style={{
//         flex: 1,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >

//       <View
//         style={{
//           backgroundColor: 'dodgerblue',
//           width: 100,
//           height: 100,
//           // borderWidth: 10,
//           borderColor: 'royalblue',
//           // borderRadius: 10,
//           // shadowColor: 'gray',
//           // shadowOffset: { height: 10, width: 10 }, // For Shadow ios
//           // shadowOpacity: 1,
//           // shadowRadius: 10,
//           // elevation: 20, // For android shadow
//           padding: 20,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: 'gold',
//             width: 50,
//             height: 50,
//           }}
//         >

//         </View>


//       </View>
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: 'tomato',
//           margin: 50,
//         }}
//       >

//       </View>
//     </View>

//   )
// }