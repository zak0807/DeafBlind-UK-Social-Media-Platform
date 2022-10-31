//import required packages for the navigation;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importing screens to load in the navigation
import OnBoarding from './app/screens/OnBoarding';
import LogScreen from './app/screens/LogScreen';
import HomePage from './app/screens/HomePage';
import PersonalFinance from './app/screens/PersonalFinance';

import HelpScreen from './app/screens/HelpScreen';
import DiscussionForum from './app/screens/DiscussionForum';

const Stack = createNativeStackNavigator();

//Navigation for all the screens within Bath Financial Knowledge applicaiton
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello"
          component={OnBoarding}
          options={{title:"Hello"}}
        />
        <Stack.Screen 
          name="LogScreen" 
          component={LogScreen}
          options={{title:"Login"}}
          />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage}
          options={{title:"Home"}}
          />
          <Stack.Screen 
          name="HelpScreen" 
          component={HelpScreen}
          options={{title:"Help & Guide"}}
          />
          <Stack.Screen 
          name="DiscussionForum" 
          component={DiscussionForum}
          options={{title:"Assistance Call"}}
          />
          
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MyStack