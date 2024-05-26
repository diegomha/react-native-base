import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View
      style={{
        backgroundColor: '#C6C6C6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Details Screenssss</Text>
    </View>
  );
}

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName="Home">
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Details" component={DetailsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export {App};
