import { Text, View } from "react-native";

import styles from './styles'

type Props = {
    user: any,
    edit: (id: number) => void
}

export default function UserView({ user, edit }: Props) {
    return (
        <View style={styles.container} onTouchEnd={() => edit(user.id)}>
            <Text style={styles.title}>{user.name}</Text>
            <Text style={styles.subTitle}>{user.username}</Text>
        </View>
    )
}