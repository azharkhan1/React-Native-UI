import React from 'react';
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress'
import colors from '../config/colors';
import LottieView from 'lottie-react-native';


function UploadScreen({ progress = 0, visible = false, onDone }) {
    if (!visible) return null;
    return (
        <Modal visible={visible}>
            <View style={styles.container}>

                {progress < 1 ? (
                    <Progress.Bar color={colors.primary} progress={progress} width={200} />)
                    : (<LottieView
                        source={require('../assets/animations/done.json')}
                        autoPlay loop={false}
                        style={styles.animaton}
                        onAnimationFinish={onDone}
                    />)}
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    animation: {
        width: 150,
    }
})

export default UploadScreen