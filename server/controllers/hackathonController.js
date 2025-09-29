import fs from "fs";
import FormData from "form-data";
import axios from "axios";
import { hackathonSchema } from "../models/hackathonSchema.js";

const PINATA_FILE_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JSON_URL = "https://api.pinata.cloud/pinning/pinJSONToIPFS";

export const uploadHackathon = async (req, res) => {
  try {
    // Parse hackathon object from req.body (as JSON string)
    const hackathon = JSON.parse(req.body.hackathon);

    // Validate hackathon object
    const { error } = hackathonSchema.validate(hackathon);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    // If image is uploaded, pin to IPFS and update hackathon.image
    if (req.file) {
      const fileStream = fs.createReadStream(req.file.path);
      const form = new FormData();
      form.append("file", fileStream, { filename: req.file.originalname });

      // Optional: attach metadata for the pinned file
      const fileMetadata = {
        name: req.file.originalname,
        keyvalues: { title: hackathon.title || "untitled" },
      };
      form.append("pinataMetadata", JSON.stringify(fileMetadata));

      const fileResp = await axios.post(PINATA_FILE_URL, form, {
        maxBodyLength: "Infinity",
        headers: {
          ...form.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_API_SECRET,
        },
      });

      // Clean up local temp file
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("unlink err", err);
      });

      const imageHash = fileResp.data.IpfsHash;
      hackathon.image = `https://gateway.pinata.cloud/ipfs/${imageHash}`;
    }

    // Pin full hackathon object to IPFS
    const jsonResp = await axios.post(PINATA_JSON_URL, hackathon, {
      headers: {
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_API_SECRET,
        "Content-Type": "application/json",
      },
    });

    const jsonHash = jsonResp.data.IpfsHash;
    const metadataUrl = `https://gateway.pinata.cloud/ipfs/${jsonHash}`;

    return res.json({
      success: true,
      metadataUrl,
      jsonHash,
      hackathon,
    });
  } catch (err) {
    console.error(err.response?.data || err.message || err);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: err.message });
  }
};
