import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

export default function App() {
  const Stack = createNativeStackNavigator()

  const [isLoaded] = useFonts({
    'Futura-Medium': require('./assets/fonts/FuturaPT-Medium.ttf'),
  });

  if (isLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={MainScreen}></Stack.Screen>
          <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <></>
    );
  }
}
