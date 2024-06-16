// src/pages/user/EditUserScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userService } from '../../services/user.service'; // Importe o serviço de usuário para interagir com o backend

interface EditUserScreenProps {
  route: {
    params: {
      userId: string; // parâmetro para o ID do usuário a ser editado
    };
  };
}

const EditUserScreen: React.FC<EditUserScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = route.params; // obter o ID do usuário a ser editado

  const [userName, setUserName] = useState(''); // estado para armazenar o novo nome do usuário

  const handleBack = () => {
    navigation.goBack();
  };

    const handleEditUser = () => {
        userService.editUser(userId, userName)
            .then(() => {
                // Se o usuário foi editado com sucesso, navega de volta para a tela anterior
                navigation.goBack();
            })
            .catch(error => {
                // Trata erros de edição de usuário
                console.error('Erro ao editar usuário:', error);
                alert('Erro ao editar o usuário. Por favor, tente novamente.');
            });
    };

  return (
    <View style={styles.container}>
      <Text>Edição de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Novo nome do Usuário"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <Button title="Voltar" onPress={handleBack} />
      <Button title="Editar Usuário" onPress={handleEditUser} />
    </View>
  );
};

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

export default EditUserScreen;
