const multer  = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, __dirname + '/../../static/draft');
//     },
//     filename: (req, file, cb) =>{
//         cb(null, file.originalname);
//     }
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = { upload };