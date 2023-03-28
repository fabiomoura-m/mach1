import { IStudent } from '../interfaces/student';

function handleBodyRegister(returnAPI: any, idStudent: number): IStudent {
    const newStudent = {
        id: idStudent,
        name: returnAPI.name,
        age: returnAPI.age,
        cpf: returnAPI.cpf
    };
    return newStudent;
}

export { handleBodyRegister };
