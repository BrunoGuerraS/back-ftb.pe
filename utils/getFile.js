const { parse } = require("csv-parse/sync");
const fs = require("fs");
const path = require("path");

function getFile() {
  const folderPath = "./uploads";
  let fileContent;
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error al leer el directorio de uploads:", err);
      return;
    }

    if (files.length === 0) {
      console.log("No se encontraron archivos en la carpeta uploads");
      return;
    }

    const primerArchivo = files[0];
    const rutaArchivo = path.join(folderPath, primerArchivo);
    const resultados = [];

    fs.readFile(rutaArchivo, "utf8", (error, data) => {
      if (error) {
        console.error(`Error al leer el archivo ${primerArchivo}:`, error);
        return;
      }
      fileContent = data;
    //   console.log(`Contenido del archivo ${primerArchivo}:`);
    //   console.log(data);
    });
  });
  const csvContent = parse(fileContent, {
    columns: true,
  });
  console.log('soy csvContent',  csvContent);
}

module.exports = getFile;
