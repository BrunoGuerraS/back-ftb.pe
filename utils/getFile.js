const { parse } = require("csv-parse/sync");
const fs = require("fs/promises");
const path = require("path");

async function getFile() {
  const folderPath = "./uploads";

  try {
    const files = await fs.readdir(folderPath);

    if (files.length === 0) {
      console.log("No se encontraron archivos en la carpeta uploads");
      return [];
    }
    const primerArchivo = files[0];
    const rutaArchivo = path.join(folderPath, primerArchivo);

    const data = await fs.readFile(rutaArchivo, "utf8");
    const csvContent = parse(data, {
      columns: true,
    });

    return csvContent;
  } catch (error) {
    console.error("Error al leer el archivo CSV:", error);
    throw error;
  }
}

module.exports = getFile;

// const { parse } = require("csv-parse/sync");
// const fs = require("fs");
// const path = require("path");

// function getFile() {
//   const folderPath = "./uploads";
//   let parseData = fs.readdir(folderPath, (err, files) => {
//     if (err) {
//       console.error("Error al leer el directorio de uploads:", err);
//       return;
//     }

//     if (files.length === 0) {
//       console.log("No se encontraron archivos en la carpeta uploads");
//       return;
//     }

//     const primerArchivo = files[0];
//     const rutaArchivo = path.join(folderPath, primerArchivo);
//     const resultados = [];

//     fs.readFile(rutaArchivo, "utf8", (error, data) => {
//       if (error) {
//         console.error(`Error al leer el archivo ${primerArchivo}:`, error);
//         return;
//       }
//       fileContent = data;
//       console.log('data', data);
//       const csvContent = parse(data, {
//         columns: true,
//       });
//       // console.log('csvContent',csvContent);
//       return csvContent;
//     });
//   });
//   console.log('parseData', parseData);
// }

// module.exports = getFile