import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <></>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
