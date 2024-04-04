import React from 'react'
import { Button, Text, View } from "react-native"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { authRepository } from '../../services/auth.repository'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [user, setUser] = React.useState({ name: '' })

    navigation.setOptions({
        headerLeft: () => <Button title="Sair" onPress={logOut} />,
        headerRight: () => (
            <>
                <Button title="Add" onPress={goToUser} />
            </>
        )
    })

    authRepository.getLoggedUser().then(logged => setUser(logged))

    function logOut() {
        navigation.goBack()
    }

    function goToUser() {
        navigation.navigate('User')
    }

    return (
        <View>
            <Text>Listagem de Usuários</Text>
            <Text>Seja bem vindo, {user.name}</Text>
        </View>
    )
}