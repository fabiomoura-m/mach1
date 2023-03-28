import fs from 'fs';
import { IStudent } from '../interfaces/student';

const dataStudentsPath = './src/model/student.json';

function loadStudents() {
    const fileBuffer = fs.readFileSync(dataStudentsPath, 'utf-8');
    const contentJson = JSON.parse(fileBuffer);
    return contentJson;
}

function saveStudents(students: IStudent[]) {
    const studentsString = JSON.stringify(students);
    return fs.writeFileSync(dataStudentsPath, studentsString);
}

export { loadStudents, saveStudents };
