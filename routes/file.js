const express = require("express");
const router = express.Router();
const multer = require("multer");
const getFile = require("../utils/getFile");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio de destino para guardar los archivos
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalname = file.originalname;
    const extension = originalname.substring(originalname.lastIndexOf("."));
    const filename = `${timestamp}${extension}`; // Nombre del archivo guardado con la extensión .csv
    cb(null, filename);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res, next) => {
  //   const folderPath = "./uploads";
  //   let fileContent
  //   fs.readdir(folderPath, (err, files) => {
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
  //       fileContent = data
  //       console.log(`Contenido del archivo ${primerArchivo}:`);
  //       console.log(data);
  //     });
  //   });
  //   const csvContent = parse(fileContent)
  //   console.log(csvContent)
  getFile();
  try {
    res.status(200).json({ ok: "upload file" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
