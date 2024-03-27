import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Tab1 from '../screens/tabs/Tab1';
import Tab2 from '../screens/tabs/Tab2';
import Tab3 from '../screens/tabs/Tab3';
import TestScreen from '../screens/test/TestScreen';


const Stack = createStackNavigator();

function StackNavigator () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tab1" component={Tab1} />
            <Stack.Screen name="Tab2" component={Tab2} />
            <Stack.Screen name="Tab3" component={Tab3} />
            <Stack.Screen name="Test" component={TestScreen} />
        </Stack.Navigator>
    );
}