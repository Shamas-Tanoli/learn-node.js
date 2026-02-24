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

const fs = require('fs/promises');

