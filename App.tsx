import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Login';
import HomePage from './src/pages/Home';
import UserPage from './src/pages/User';
import RoleListScreen from './src/pages/Home/RoleList';
import CreateRoleScreen from './src/pages/Home/CreateRole';
import EditUserScreen from './src/pages/User/editUser'; // Verifique se o caminho está correto
import { RootStackParamList } from './src/Types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>   
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Página de Acesso' }} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="UserList" component={UserPage} />
        <Stack.Screen name="RoleList" component={RoleListScreen} />
        <Stack.Screen name="CreateRole" component={CreateRoleScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} options={{ title: 'Editar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
