/*
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Button, View, Alert } from 'react-native'

import { authService } from '../../services/auth.service'
import MyInput from '../../components/MyInput'
import styles from './styles'

export default function LoginPage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signIn() {
        authService.login(username, password).then(isLogged => {
            if (isLogged) {
                navigation.navigate('Home')
            } else {
                Alert.alert('Login/senha inválido(a) 1')
            }
        }).catch(error => {
            Alert.alert('Login/senha inválido(a) 2')
        })
    }

    return (
        <View style={styles.container}>
            <MyInput title='Login' value={username} change={setUsername} />
            <MyInput title='Senha' value={password} change={setPassword} isPassword />

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={signIn} />
            </View>
        </View>
    )
}
*/

// src/pages/login/index.tsx
// ALUNO BRUNO APARECIDO DE SOUZA / MBA ES 26 / Prof. Dr. Uedson Reis / Mobile Applications

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../Types/types';;

export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleListUsers = () => {
        navigation.navigate('UserList');
    };

    const handleListRoles = () => {
        navigation.navigate('RoleList');
    };

    const handleCreateRole = () => {
        navigation.navigate('CreateRole');
    };

    return (
        <View style={styles.container}>
            <Text>Seja bem-vindo!</Text>
            <Button title="Listar Usuários" onPress={handleListUsers} />
            <Button title="Listar Roles" onPress={handleListRoles} />
            <Button title="Criar Nova Role" onPress={handleCreateRole} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

