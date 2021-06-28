import React from 'react';
import expoPushTokensApi from "../api/expoPushTokens";
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';



export default useNotifications = (notificationListener) => {
    React.useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener)

    }, [])

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!permission.granted) return;
            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token.data);
        } catch (error) {
            console.log('error getting push token', error);
        }

    }
}