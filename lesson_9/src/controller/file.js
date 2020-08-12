const file = {
    upload: async (req, res) => {
        let filedata = req.file;

        console.log(filedata);

        if(!filedata) return res.send("File upload error.");

        res.send("File uploaded");
    },

};

module.exports = file;