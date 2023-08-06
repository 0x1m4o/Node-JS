const fs = require('fs');
// reading files
fs.readFile('./file-system/docs/blog.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
});

// write files
fs.writeFile('./file-system/docs/blog.txt', 'lorem ipsum - edited', () => {
    console.log('file has been written')
})

// check if folder is not exist
if (!fs.existsSync('./file-system/assets')) {
    // if not exist create the folder
    fs.mkdir('./file-system/assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    // if exist remove the folder
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// check if file is not exist
if (!fs.existsSync('./file-system/docs/deleteme.txt')) {
    // if not exist create the file
    fs.writeFile('./file-system/docs/deleteme.txt', '', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File Created');
    })
} else {
    // if exist delete the file
    fs.unlink('./file-system/docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}