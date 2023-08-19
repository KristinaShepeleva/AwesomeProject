import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
// import { useFonts } from 'expo-font';

import Main from './Screens/HomeScreens/Main'

export default function App() {

  //  const [fontsLoaded] = useFonts({
  // 'Roboto-Regular': require('./assets/fonts/Roboro-Regular.ttf'),
  // 'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
     <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Main />
      </PersistGate>
      </Provider>
  );
};
