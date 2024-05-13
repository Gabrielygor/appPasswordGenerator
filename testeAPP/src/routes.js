import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'


const Tab = createBottomTabNavigator();

export function Routes() {
    return (

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />

            <Tab.Screen
                name="Passwords"
                component={Passwords}
            />
        </Tab.Navigator>

    )
}