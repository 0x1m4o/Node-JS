const fs = require('fs');

let blog = ''; 

async function readBlogFile() {
    try {
        const data = await fs.promises.readFile('./docs/blog.txt');
        for (let index = 0; index < 5000; index++) {
        blog += `${data.toString()}\n`; 
    }
    } catch (err) {
        console.error(err);
    }
}

async function writeBlogToFile() {
    await readBlogFile();
    fs.promises.writeFile('./docs/blog2.txt', blog)
}

readBlogFile();
writeBlogToFile();
console.log('file has been written');