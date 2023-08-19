// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBS1Rl81JYVuFWkgUEXKTmaDA2jNNL3Vms",
  authDomain: "rn-social-ae7c8.firebaseapp.com",
  databaseURL: "https://rn-social-ae7c8-default-rtdb.firebaseio.com",
  projectId: "rn-social-ae7c8",
  storageBucket: "rn-social-ae7c8.appspot.com",
  messagingSenderId: "966948588402",
  appId: "1:966948588402:web:7b8361ff30df5370016beb",
  measurementId: "G-98Y1HE9551"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



// // initialize the project
// import { initializeApp } from 'firebase/app';
// // Function for connecting the database to the project
// import { getFirestore } from 'firebase/firestore';
// // Function for connecting file storage to the project
// import { getStorage } from 'firebase/storage';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';


// const firebaseConfig = {
//   apiKey: 'AIzaSyAY1V_g8F-nGX6LZWaUN1T_45-WUmDdqlQ',
//   authDomain: 'theart-of-travel.firebaseapp.com',
//   projectId: 'theart-of-travel',
//   storageBucket: 'theart-of-travel.appspot.com',
//   messagingSenderId: '1097815860473',
//   appId: '1:1097815860473:web:569112da3e3771ad332e28',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export const db = getFirestore(app);
// export const storage = getStorage(app);