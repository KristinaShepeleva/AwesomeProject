import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
       height: 240,
    marginTop: 32,
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.2,
    alignSelf: "center",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderColor: "white",
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: 50,
    marginBottom: 8,
  },
});




// import React, {useState} from "react";
// import { Text, View, StyleSheet, TouchableOpacity, Image  } from 'react-native';
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";

// const CreatePostsScreen = () => {
//   const [cameraRef, setCameraRef] = useState(null);
//   const [photo, setPhoto] = useState('');

//   const takePhoto = async () => {
//     const photo = await cameraRef.takePictureAsync();
//     setPhoto(photo.uri);
//   }

//   return (
//     <View styles={styles.container}>
//       <Camera style={styles.camera} ref={setCameraRef}>
//         {photo && (
//           <View style={styles.takePhotoContainer}>
//           <Image source={{ uri: photo }} style={{height: 240, width: 340}} />
//         </View>
//         )}
//         <View>
//         <TouchableOpacity onPress={takePhoto} style={styles.btnContainer}>
// <Text style={styles.btn}>Завантажте фото</Text>
//           </TouchableOpacity>
//           </View>
//       </Camera>
//       <Text style={styles.text}>Завантажте фото</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//     backgroundColor: '#F6F6F6',      
//   },
//   camera: {
//     height: 240,
//     marginTop: 32,
//     alignItems: "center",
//     marginHorizontal: 16,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnContainer: {
//     height: 60,
//     width: 60,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btn: {
//     color: '#BDBDBD',
//   },
//   takePhotoContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     height: 240,
//   },
//   text: {
//     color: '#BDBDBD',
//     paddingHorizontal: 16,
//     paddingTop: 8,
// }
// });

// export default CreatePostsScreen;