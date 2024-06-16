
/*
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginPage from './src/pages/Login'
import HomePage from './src/pages/Home'
import UserPage from './src/pages/User'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Página de Acesso' }} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="User" component={UserPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

*/


//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Login';
import HomePage from './src/pages/Home';
import UserPage from './src/pages/User';
import RoleListScreen from './src/pages/Home/RoleList'; // novo
import CreateRoleScreen from './src/pages/Home/CreateRole'; // novo
import EditUserScreen from './src/pages/User/editUser'; // novo
import RoleList from './src/pages/Home/RoleList';



const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Página de Acesso' }} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="User" component={UserPage} />
                <Stack.Screen name="RoleList" component={RoleListScreen} /> {/* novo */}
                <Stack.Screen name="CreateRole" component={CreateRoleScreen} /> {/* novo */}
                <Stack.Screen name="editUser" component={EditUserScreen} /> {/* novo */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

