
const grid = require('gridfs-stream');
const mongoose = require('mongoose') ;
const url = 'http://localhost:8000';



// For getImage from mongodb we used gridfs-stream 

let gfs, gridfsBucket;

// assigned the current Mongoose connection object
const conn = mongoose.connection;

// if connection is successfully open 
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {

        // photos.files, photos.chunks in database
        bucketName: 'photos'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});


// ---------------------- UploadImage -------------------------------------------------------------------


module.exports.uploadImage = (req, res) => {
    if (!req.file) {
        console.log("Upload image route in image controller.............");
        return res.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${req.file.filename}`;
    console.log(`File uploaded successfully: ${imageUrl}`);
    return res.status(200).json(imageUrl);
};
  

// ---------------------- GetImage -------------------------------------------------------------------


module.exports.getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};
  