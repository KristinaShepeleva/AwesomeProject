import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({route}) => { 
    const [location, setLocation] = useState(null);
   
    useEffect(() => {
        if (route.params) {
            setLocation(route.params.postLocation)
        };
  }, []);

return (
    <View style={styles.container}>
        <MapView style={styles.mapStyle}
            region={{
                ...location,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
            }}
            mapType="standard"
            minZoomLevel={15}
        >
        {location && <Marker title="It`s here" coordinate={location} />}
        </MapView>
        </View>
)
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
});


