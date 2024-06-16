import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { roleService } from '../../services/role.service';// Importe o serviço de Role para interagir com o backend

export default function CreateRoleScreen() {
    const navigation = useNavigation();

    // Estado para armazenar o nome da Role
    const [roleName, setRoleName] = useState('');

    const handleBack = () => {
        navigation.goBack();
    };

    const handleCreateRole = () => {
        // Verifica se o nome da Role está vazio
        if (!roleName.trim()) {
            alert('Por favor, preencha o nome da Role.');
            return;
        }

        // Chama o serviço para criar a Role
        roleService.createRole(roleName)
            .then(() => {
                // Se a Role foi criada com sucesso, navega de volta para a tela anterior
                navigation.goBack();
            })
 
    };

    return (
        <View style={styles.container}>
            <Text>Cadastro de Nova Role</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome da Role"
                value={roleName}
                onChangeText={text => setRoleName(text)}
            />
            <Button title="Voltar" onPress={handleBack} />
            <Button title="Criar Role" onPress={handleCreateRole} />
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
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});
