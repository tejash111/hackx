import multer from "multer";
import fs from "fs";

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
// Configure storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to 'uploads/' directory
  },
  filename: function (req, file, cb) {
    // Use original filename, or customize as needed
    cb(null, file.originalname);
  },
});

// Export the upload instance
const upload = multer({ storage });

export default upload;
