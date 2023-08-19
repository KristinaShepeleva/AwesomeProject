// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
 import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyCcFFtiPgUvNVoGnvV9zKYy84t8fhTCiBk",
//   authDomain: "travel-d0ddb.firebaseapp.com",
//   projectId: "travel-d0ddb",
//   storageBucket: "travel-d0ddb.appspot.com",
//   messagingSenderId: "440356844168",
//   appId: "1:440356844168:web:9187a502a23f0cd5ef653d"
// };

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
export const storage = getStorage(app);
export const db = getFirestore(app);





