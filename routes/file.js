const express = require("express");
const router = express.Router();
const multer = require("multer");
const getFile = require("../utils/getFile");
const {exchange} = require("../utils/exchange");

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
  const parseData = await getFile();
  console.log( exchange(parseData))
  console.log('parseData', parseData);
  try {
    res.status(200).json(parseData);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
