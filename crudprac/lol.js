const fs = require('fs');
const os = require('os');

//Synchronous

// // fs.mkdirSync('lolo');
// // fs.writeFileSync('bio.txt',"Heyyy");
// // fs.appendFileSync('bio.txt'," SHUBHAM");
// // const data = fs.readFileSync('bio.txt');
// // console.log(data.toString());
// // fs.renameSync("bio.txt","BB.txt");
// // fs.unlinkSync('BB.txt')
// fs.rmdirSync('lolo');

//Asynchronous

// fs.mkdir('lolo',(err)=>{
//     console.log("Created");
// });
 
// fs.writeFile('./lolo/a.txt','SHHHHUUUU',(err)=>{
//     console.log("Written");
// })

// fs.appendFile('./lolo/a.txt','   cdccdSHHHHUUUU',(err)=>{
//     console.log("Appended");
// })
// fs.readFile('./lolo/a.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.unlink('./lolo/a.txt',(err)=>{
//     console.log("DELETED");
// })
// fs.rmdir('./lolo',(err)=>{
//     console.log("DONE");
// })

console.log(os.arch());


