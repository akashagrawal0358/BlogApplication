

const url = 'http://localhost:8000';




module.exports.uploadImage = (req, res) => {
    if (!req.file) {
        console.log("Upload image route in image controller.............");
        return res.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${req.file.filename}`;
    console.log(`File uploaded successfully: ${imageUrl}`);
    return res.status(200).json(imageUrl);
};
  