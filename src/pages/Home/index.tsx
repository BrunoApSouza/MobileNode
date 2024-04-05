import React from 'react'
import { Alert, Button, FlatList, Text, View } from "react-native"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { userService } from '../../services/user.service'
import UserView from '../../components/UserView'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [users, setUsers] = React.useState<any[]>([])

    navigation.setOptions({
        headerLeft: () => <Button title="Sair" onPress={logOut} />,
        headerRight: () => (
            <>
                <Button title="Add" onPress={goToUser} />
            </>
        )
    })

    React.useEffect(() => {
        fetchUser()
    }, [])

    function logOut() {
        navigation.goBack()
    }

    function goToUser() {
        navigation.navigate('User')
    }

    async function fetchUser() {
        const list = await userService.get()
        if (list) setUsers(list)
        else logOut()
    }

    function editUser(id: number) {
        navigation.navigate('User') // e passar o id como parametro
    }

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserView user={item} edit={editUser} />}
            />
        </View>
    )
}