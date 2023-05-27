import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';
import { THEME } from './src/theme';

import { AuthContext } from '@contexts/AuthContext';

import { Loading } from '@components/Loading';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider value={{
        id: '1',
        name: 'Jorge',
        email: "jorge@hm.com",
        avatar: 'jorge.png'
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}