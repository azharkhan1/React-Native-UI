import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        bottom: 20,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NewListingButton