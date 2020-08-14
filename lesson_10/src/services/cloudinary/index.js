const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudUploadStream = (resolve, reject) =>
    cloudinary.uploader.upload_stream({}, (err, res) =>
        err ? reject(err) : resolve(res)
    );

const createReadStream = (buffer) =>
    new Promise((resolve, reject) =>
        streamifier
            .createReadStream(buffer)
            .pipe(cloudUploadStream(resolve, reject)))

const cloudUploadOne = (path) => cloudinary.uploader.upload(path)

module.exports = { cloudinary, createReadStream, cloudUploadStream, cloudUploadOne };