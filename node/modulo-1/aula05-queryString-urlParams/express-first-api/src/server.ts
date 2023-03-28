import express from 'express';
import { Router, Request, Response } from 'express';
import { IStudent } from './interfaces/student';
import { loadStudents, saveStudents } from './service/students.service';
import getLastId from './utils/getLastId';
import { handleBodyRegister } from './utils/handleBodyRegister';

const students: IStudent[] = loadStudents();

enum messages {
    studentNotFind = 'Estudante não encontrado',
    studentNotSet = 'Estudante não cadastrado',
    studentRegisterSuccess = 'Estudante cadastrado com sucesso'
}

const app = express();
const route = Router();
app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Seja bem vindo a mach1' });
});

// Uma lista de estudantes
route.get('/studentList', (req: Request, res: Response) => {
    res.json(students);
});

// Retornar um estudante específico através do ID
route.get('/student/:id', (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let student: any = students.find(item => item.id == id);
    if (student) {
        res.json(student);
    } else {
        res.json({ message: messages.studentNotFind });
    }
});

route.post('/studentRegister', (req: Request, res: Response) => {
    // Como valido o Body enviado?
    if (req.body.name && req.body.age && req.body.cpf) {
        let lastID = getLastId(students);
        let student = handleBodyRegister(req.body, lastID);
        students.push(student);

        saveStudents(students);

        res.json({ message: messages.studentRegisterSuccess });
    } else {
        res.json({
            message: messages.studentNotSet,
            bodyExpected: {
                name: 'string',
                age: 'number',
                cpf: 'string'
            }
        });
    }
});

// Setando uso da rota ou das rotas
app.use(route);
// Startando o servidor
app.listen(8080, () => 'server running port 8080');
