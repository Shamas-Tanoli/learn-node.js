import { readFile } from "node:fs/promises";

const filePath = process.argv[2]


const fileContent = await  readFile(filePath,'utf8');
const wordArray = fileContent.split(/[\W]/).filter((w)=> w);

const wordCount = {};

wordArray.forEach((word)=>{
    if(word in wordCount){
        wordCount[word] += 1
    }
    else{
         wordCount[word] = 1
    }
});

console.log(wordCount);