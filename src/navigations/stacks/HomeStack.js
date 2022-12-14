import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatScreen, HomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ChatScreen" component={ChatScreen} 
            options={{
                headerShown: true,
            }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;