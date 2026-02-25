// -------- read file-------------

// const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log( data);
// })

// const data = fs.readFileSync('file.txt','utf8');
// console.log(data);


// const fs = require('fs/promises');

// const readfile = async ()=>{
// const data = await fs.readFile('./file.txt','utf8');
// console.log(data);
// }
// readfile()

//  ----------- write file --------------

// const fs = require('fs');

// fs.writeFile('./file.txt','shamas khan',(err,data)=>{
//     if (err) throw err
//     console.log('File written successfully!');
// })

// fs.writeFileSync('./file.txt','shamas khana');
//  console.log('File written successfully!');


// const fs = require('fs/promises');
 
// const writeFile = async ()=>{
//     await fs.writeFile('./file.txt','shamas khan');
//     console.log('File written successfully!');
// }
// writeFile();


// ------- append file ---------

//  const fs = require('fs/promises');

// const appendFile = async ()=>{
//     await fs.appendFile('./file.txt',' Tanoli');
//      console.log('File appended successfully!');
// }
// appendFile();

// ---- delete file  --- 

// const fs = require('fs');

// fs.unlink('./dummy.txt',(err)=>{
//     if (err) {
//        console.error('File delete nahi hui:', err);
//     }
//    console.log('File successfully deleted!');
// })

// const fs = require('fs/promises');

//  const deleteFile = async ()=>{
//     await fs.unlink('./dummy.txt');
//      console.log('File successfully deleted!');
// }
// deleteFile();


// --- delete empty directory ----- 
// const fs = require('fs');

// fs.rmdir('./shamas',(err)=>{
//     if (err) {
//         console.error('Folder delete nahi hua:', err);
//         return;
//     }

//      console.log('Folder successfully deleted!');
// })


// --- delete empty directory with file and directory  ---- 
// fs.rm('./shamas',{ recursive: true, force: true },(err)=>{
//     if (err) {
//         console.error('Folder delete nahi hua:', err);
//         return;
//     }

//      console.log('Folder successfully deleted!');
// })

// ------------- file or folder rename -------

const fs = require('fs');

fs.rename('./file.txt','text.txt',(err) =>{
 if (err){
    console.log("error" ,err);
    return;
 }
 console.log('file successfully changed!')
})
