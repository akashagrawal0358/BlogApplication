const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DB_username;
const password = process.env.DB_password;

const storage = new GridFsStorage({
    url: `mongodb+srv://${username}:${password}@blog-application.e7mgxxr.mongodb.net/?retryWrites=true&w=majority&appName=blog-application`,
    file: (req, file) => {
        return {
            filename: file.originalname,  
            bucketName: 'photos',         
            metadata: {                   
                contentType: file.mimetype,
                uploadDate: new Date(),
                // Add more metadata fields as needed 
            }
        };
    }, 
   // options: { useUnifiedTopology: true }
});

const upload = multer({ storage });

module.exports = upload;
