const fs = require('fs');
const colors = require('colors');

const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('==================='.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de base ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido de limite ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }



        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);


        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}