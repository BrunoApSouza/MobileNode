// role.service.ts

// Função para criar uma role no backend
export const createRole = async (roleName: string): Promise<void> => {
    // Lógica para criar a role no backend
    console.log(`Criando a role ${roleName} no backend...`);
    // Simulação de uma requisição assíncrona
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            // Suponha que a criação da role foi bem-sucedida
            console.log(`Role ${roleName} criada com sucesso.`);
            resolve(); // Resolvendo a Promise para indicar sucesso
        }, 1000); // Simula um tempo de resposta de 1 segundo (1000 milissegundos)
    });
};
