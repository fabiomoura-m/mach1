import fs from 'fs';

function createDataInJson(data: any) {
    try {
        const file = require('../students.json');
        if (file) {
            return file;
        }
    } catch (error) {
        const fileJson = JSON.stringify(data);
        return fs.writeFile('./src/students.json', fileJson, err => {
            if (err) {
                console.log(err);
            } else {
                return fileJson;
            }
        });
    }
}

export default createDataInJson;
