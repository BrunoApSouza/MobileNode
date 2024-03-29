import React from 'react'
import { Button, Text, View, Alert } from 'react-native'

import MyInput from '../../components/MyInput'

import styles from './styles'

export default function LoginPage() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function login(username: string, password: string) {
        return (username === 'uedsonreis' && password === '123456')
    }

    function signIn() {
        if (login(username, password)) {
            Alert.alert('Usuário logado com sucesso')
        } else {
            Alert.alert('Login/senha inválido(a)')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Acesso</Text>
            
            <MyInput title='Login' value={username} change={setUsername} />
            <MyInput title='Senha' value={password} change={setPassword} isPassword />

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={signIn} />
            </View>
        </View>
    )
}

