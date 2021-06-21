import React from 'react';
import * as Location from 'expo-location';



export default useLocation = () => {

    const [location, setLocation] = React.useState();

    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') return;

            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude })
        } catch (error) {
            console.log('error while getting location', error);
        }


    }

    React.useEffect(() => {
        getLocation();
    }, [])
    return location;
}


