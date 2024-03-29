import React from 'react'
import { Button, View, Text, Alert } from 'react-native'

import MyInput from '../../components/MyInput'

import styles from './styles'

export default function UserPage() {

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPass, setConfirmPass] = React.useState('')

    function save() {
        if (!name || name.trim().length < 1) {
            Alert.alert('Nome é obrigatório')
            return
        }
        if (!username || username.trim().length < 1) {
            Alert.alert('Login é obrigatório')
            return
        }
        if (!password || password.trim().length < 1) {
            Alert.alert('Senha é obrigatória')
            return
        }
        if (password !== confirmPass) {
            Alert.alert('Senha não confere')
            return
        }
        
        Alert.alert('Usuário cadastrado com sucesso')

        setName('')
        setUsername('')
        setPassword('')
        setConfirmPass('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Cadastro de Usuário</Text>

            <MyInput title='Nome' value={name} change={setName} />
            <MyInput title='Login' value={username} change={setUsername} />
            <MyInput title='Senha' value={password} change={setPassword} isPassword />
            <MyInput title='Confirmar Senha' value={confirmPass} change={setConfirmPass} isPassword />

            <View style={styles.buttonView}>
                <Button title='Salvar' onPress={save} />
            </View>

        </View>
    )
}