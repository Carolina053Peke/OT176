require('dotenv').config();
const {
  v4: uuidv4,
} = require('uuid');
const {
  validationResult,
} = require('express-validator');
// eslint-disable-next-line semi
const s3 = require('./s3')

const uploadImg = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    if (!req.file) return next();
      const myFile = await req.file.originalname.split('.');
      console.log('myFile', myFile);
      const fileType = await myFile[myFile.length - 1];

      console.log('myFile', myFile);
      console.log('fileType', fileType);

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuidv4()}.${fileType}`,
        Body: req.file.buffer,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentDisposition: 'inline',
        ContentType: 'image/jpeg',
      };

      const image = await s3.upload(params, (error, data) => {});

      req.user.image = `https://${params.Bucket}.s3.amazonaws.com/${image.singlePart.params.Key}`;
      next();
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = uploadImg;
