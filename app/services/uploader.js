const path = require('path');

// file uploader
// middleware odczytujący wartości multipart/form-data z formularzy
const multer = require('multer');
const storage = multer.diskStorage({ // plik konfiguracyjny
    destination: function(req, file, cb) {
        cb(null, 'public/uploads'); // null - w tym miejscu mogę przesłać jakieś zmienne/błędy, drugi arg.: folder docelowy dla uploadowanych plików
    },
    filename: function(req, file, cb){ // pole w którym określa się jak ma się nazywać uploadowany plik
        const name = Date.now() + path.extname(file.originalname);
        cb(null, name); // name - nazwa jaką ma dostać uploadowany plik
    }
})
const upload = multer({ storage }); // <-- można tak, ablbo tak: --> const upload = multer({ storage: storage });
// const upload = multer({ dest: 'public/uploads' }); // tworzę obiekt na podstawie multera z konfiguracją
// dest - ustawiam tutaj do jakiego folderu uploadowane pliki powinny zostać przesłane

module.exports = upload;