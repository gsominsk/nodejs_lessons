const { cloudinary } = require('./../services/cloudinary');
let streamifier = require('streamifier');

const file = {
    upload: async (req, res) => {
        const filedata = req.file;

        if(!filedata) return res.send("File upload error.");

        const uploadResponse = await cloudinary.uploader.upload(__dirname + '/../static/draft/jimcarrey.jpg');

        res.send("File uploaded");
    },
    uploadCloud: async (req, res) => {
        const buffer = req.file.buffer;

        let cld_upload_stream = cloudinary.uploader.upload_stream({},
            function(error, result) {
                console.log(error, result);
            }
        );

        await streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);

        res.send("File uploaded");
    },
};

module.exports = file;