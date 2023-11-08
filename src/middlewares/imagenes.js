import multer from 'multer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          const ruta = dirname(fileURLToPath(import.meta.url));
          cb(null, path.join(ruta, '../public/uploads'));
     },
     filename: (req, file, cb) => {
          const extension = path.extname(file.originalname);
          let name = file.originalname.replace(extension, '');
          name = name.replace(/\s+/g, '');
          const date = Date.now();
          const newName = `${name}-${date}${extension}`;
          cb(null, newName);
     }
})

export const upload = multer({ storage: storage });