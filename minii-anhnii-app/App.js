import Homescreen from "../minii-anhnii-app/screens/Hemoscreen";
import Hoyrdahi from "./screens/Hoyrdahi";
import Gurawdugaar from "./screens/Gurawdugaar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
  
  export default function App() {
    return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
            name="Home"
            component={Homescreen}
            options={{title: "Буцах"}}
        />
        <Stack.Screen
          name="Second"
          component={Hoyrdahi}
        />
        <Stack.Screen
          name="Guravdahi"
          component={Gurawdugaar}
          options={{headerShown: false}}
        />
    </Stack.Navigator>
   </NavigationContainer>
    )
};
  