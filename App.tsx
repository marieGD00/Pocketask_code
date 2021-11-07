import 'react-native-gesture-handler';
import React, { useEffect, useContext, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from './components/Auth/Login/LoginScreen'
import RegisterScreen from './components/Auth/Register2/RegisterScreen'
import { SplashScreen } from './components/SplashScreen';
import AppInit from './AppInit';


import { stateConditionString, storeData, getData } from './components/utils/helpers';
import { AuthContext } from './AuthContext';
import { WorkingContext } from './WorkingContext';
import { reducer, initialState } from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ConfirmCodeScreen from './components/Auth/Register/ConfirmCodeScreen';
import MainScreen from './components/Main/MainScreen';
import ResetPasswordMain from './components/Auth/ResetPassword/ResetPasswordMain';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from 'sentry-expo';

const Stack = createStackNavigator();

Sentry.init({
  dsn: 'https://a2591729c655491ea28beba3dfef3b78@o721190.ingest.sentry.io/5781379',
  enableInExpoDevelopment: true,
  debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});



export default App = ({ navigation }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  let reducerWork = (stateWork, action) => {
    switch (action.type) {
      case "SET_UNREAD_MESSAGES":
        return { ...stateWork, unreadMessagesCount: action.number };
      case "SET_UNREAD_NOTIFICATIONS":
        return { ...stateWork, unreadNotificationsCount: action.number };
      case "SET_CURRENT_TASK":
        return { ...stateWork, currentTaskId: action.id };
      default:
        return;
    }
  };
  const initialStateWork = { unreadMessagesCount: 0, currentTaskId: 0, unreadNotificationsCount: 0 }
  const [stateWork, dispatchWork] = useReducer(reducerWork, initialStateWork);

  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {

    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let profileType;


      try {
        userToken = await getData('userToken')
        profileType = await getData('profileType')
      } catch (e) {
        // Restoring token failed
      }

      if (userToken != '' && (profileType == '0' || profileType == '1')) {
        dispatch({ type: 'SIGN_IN', token: userToken });
        console.log('Login type ' + profileType)

      } else {
        AsyncStorage.clear()
        dispatch({ type: 'TO_SIGNIN_PAGE' });
        //dispatch({ type: 'SIGN_OUT', token: userToken });
        console.log('Sign out')
      }

      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.

    };
    bootstrapAsync();
  }, []);

  // In a production app, we need to send some data (usually username, password) to server and get a token
  // We will also need to handle errors if sign in failed
  // After getting token, we need to persist the token using `AsyncStorage`
  const authContextValue = useMemo(
    () => ({
      signIn: async (data) => {

        if (
          data &&
          data.token !== undefined,
          data.profileType !== undefined
        ) {

          let items = [['userToken', data.token], ['profileType', JSON.stringify(data.profileType)]]

          await AsyncStorage.multiSet(items, () => {
            //then
            dispatch({ type: 'SIGN_IN', token: data.token });
          });

        } else {
          dispatch({ type: 'TO_SIGNIN_PAGE' });
        }
      },
      signOut: async (data) => {

        storeData('userToken', '');
        storeData('profileType', '')

        dispatch({ type: 'SIGN_OUT' });
        dispatch({ type: 'TO_SIGNIN_PAGE' });
      },

      signUp: async (data) => {
        if (
          data &&
          data.name !== undefined &&
          data.phone !== undefined
        ) {
          dispatch({ type: 'TO_SIGNIN_PAGE' });
        } else {
          dispatch({ type: 'TO_SIGNUP_PAGE' });
        }
      },

      forgotPassword: () => {
        dispatch({ type: 'TO_FORGOT_PAGE' });
      },

    }),
    [],
  );




  const chooseScreen = (state) => {
    let navigateTo = stateConditionString(state);
    let arr = [] as any;

    switch (navigateTo) {
      case 'LOAD_APP':
        arr.push(<Stack.Screen name="Splash" component={SplashScreen} />);
        break;

      case 'LOAD_FORGOT':
        arr.push(<Stack.Screen name="Forgot" component={ResetPasswordMain} />);
        break;

      case 'LOAD_SIGNUP':
        arr.push(
          <Stack.Screen
            name="SignUp"
            component={RegisterScreen}
            options={{
              title: 'Sign Up',
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />,
        );

        break;
      case 'LOAD_SIGNIN':
        arr.push(<Stack.Screen name="SignIn" component={LoginScreen} />);
        break;

      case 'LOAD_HOME':
        arr.push(
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              title: 'Home Screen Parent',
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: 'white',
            }}
          />,
        );
        break;
      default:
        arr.push(<Stack.Screen name="SignIn" component={LoginScreen} />);
        break;
    }
    return arr[0];
  };

  const [fontsLoaded] = useFonts({
    'HelveticaNeue-Thin': require('./assets/fonts/HelveticaNeue-Thin.otf'),
    'HelveticaNeue-Regular': require('./assets/fonts/HelveticaNeue-Regular.otf'),
    'HelveticaNeue-RegularItalic': require('./assets/fonts/HelveticaNeue-RegularItalic.otf'),
    'HelveticaNeue-Medium': require('./assets/fonts/HelveticaNeue-Medium.otf'),
    'HelveticaNeue-light': require('./assets/fonts/HelveticaNeue-Light.otf'),
    'HelveticaNeue-Bold': require('./assets/fonts/HelveticaNeue-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {
    return (
      <AuthContext.Provider value={authContextValue}>
        <WorkingContext.Provider value={{ stateWork, dispatchWork }}>
          <SafeAreaProvider>
            {!state.isLoading ? (
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}>{chooseScreen(state)}</Stack.Navigator>
              </NavigationContainer>

            )
              : (
                <NavigationContainer>
                </NavigationContainer>
              )}
          </SafeAreaProvider>
        </WorkingContext.Provider>
      </AuthContext.Provider>

    );
  }
};