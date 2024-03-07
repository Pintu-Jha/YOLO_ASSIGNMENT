import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function Routes() {
  // const [loading, setLoading] = useState(true);
  // const isLoggedIn = useSelector(state=>state?.auth?.isUserLoggedIn)
  //    setLoading(false)

  // if (loading) {
  //   return <LoadingScreen />
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>{MainStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}
