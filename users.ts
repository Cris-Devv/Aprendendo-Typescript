// Importação dos tipos Request e Response do Express
import type { Request, Response } from 'express';

// Definição da interface para o usuário
interface usuarioInfo {
    id: number;
    nome: string;
    email: string;
    idade: number;
}

// Simulação de BD
const usuarios = [
    { id: 1, nome: 'João', email: "joao@gmail.com", idade: 30 },
    { id: 2, nome: 'Maria', email: "maria@gmail.com", idade: 25 },   
];

// Função para mostrar os usuários
export const pegarUsuario = (res: Response): void => {
    res.status(200).json(usuarios);
}

// Função para criar um novo usuário
export const criarUsuario = (req: Request<{}, {}, usuarioInfo>, res: Response): void => {
    const { nome, email, idade } = req.body;

    if (!nome || !email){
        res.status(400).json({ message: "Bota o nome e o email aí, cumpade." });
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        idade: idade || null
    };

    usuarios.push(novoUsuario as any);

    res.status(201).json(novoUsuario);
}


// função para encontrar usuários pelo ID
export const encontrarID = (req: Request<{ id: string }>, res: Response): void => {

}