const { createReadStream, cloudUploadOne } = require('./../services/cloudinary');

const uploadMany = (files) =>
    Promise.all(files.map((file) => {
        const { buffer } = file;
        return createReadStream(buffer);
    }))

const file = {
    upload: async (req, res) => {
        const filedata = req.file;

        if(!filedata) return res.send("File upload error.");

        const uploadResponse = await cloudUploadOne(__dirname + '/../static/draft/jimcarrey.jpg');

        res.send("File uploaded");
    },
    uploadCloud: async (req, res) => {
        const buffer = req.file.buffer;
        const result = await createReadStream(buffer);

        res.send("File uploaded");
    },
    uploadCloudMany: async (req, res) => {
        const { files } = req;
        const result = await uploadMany(files);

        console.log({ result });

        res.send('ok');
    }
};

module.exports = file;