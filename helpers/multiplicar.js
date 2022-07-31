const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.red} ${i} ${'='.yellow} ${base * i}\n`;
        }
        if (listar) {
            console.log('=============='.green);
            console.log('tabla del:'.green, colors.blue(base));
            console.log('=============='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}