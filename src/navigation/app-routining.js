import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../context/ThemeContext';
import {StatusBar} from 'react-native';
import ToDoScreen from '../screen/ToDoScreen';
const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const {dynamicColors} = React.useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={dynamicColors.DARK_PRIMARY_COLOR}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen
            name="ToDo"
            component={ToDoScreen}
            options={{
              title: 'ToDo',
              headerStyle: {
                backgroundColor: dynamicColors.PRIMARY_COLOR,
              },
              headerTitleStyle: {
                color: dynamicColors.TEXT_ICON_COLOR,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
