import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();

// Configuração da conexao com o banco de dados
const poll = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'livraria_mach1',
    password: '',
    port: 5432
});

//Função generica assincrona para executar consultas
async function executeQuery(query: string, params: any[]) {
    const client = await poll.connect();

    try {
        const result = await client.query(query, params);
        return result.rows;
    } finally {
        client.release();
    }
}

async function getBooks() {
    const query = 'select * from livros';
    const booksDB = await executeQuery(query, []);

    return booksDB;
}

// Buscar Dados
app.get('/api/livros', async (req: Request, res: Response) => {
    const books = await getBooks();
    res.send(books);
});

app.get('/api/livros/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;
    res.send('Busca todos os livros');
});

// Criar Registros
app.post('/api/livros/cadastro', (req: Request, res: Response) => {
    res.send('Cria livros');
});

// Atualizar Registros
app.put('/api/livros/update/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;

    res.send('Atualiza livro');
});

// Remove Registro
app.delete('/api/livros/delete/:id', (req: Request, res: Response) => {
    const bookId = req.params.id;

    res.send('Remove livro');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
