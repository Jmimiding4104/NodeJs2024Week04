const { ImgurClient } = require('imgur');
const multer = require('multer');
const path = require('path');

const upload = multer({
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg') {
      cb('檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式。');
    }
    cb(null, true);
  },
}).any();


async function uploadToImgur(req, res, next) {
  upload(req, res, async () => {
    const client = new ImgurClient({
      clientId: process.env.IMGUR_CLIENTID,
      clientSecret: process.env.IMGUR_CLIENT_SECRET,
      refreshToken: process.env.IMGUR_REFRESH_TOKEN,
    });
    const response = await client.upload({
      image: req.files[0].buffer.toString('base64'),
      type: 'base64',
      album: process.env.IMGUR_ALBUM_ID
    });
    res.send({ url: response.data.link });
  });
}

module.exports = uploadToImgur;
