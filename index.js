const hello="Hello World";
// console.log(hello);

const fs=require('fs');
const textIn=fs.readFileSync('./TEXT/TestFile.txt','utf-8');

const replaceTemp=(temp,product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output=output.replace(/{%IMAGE%}/g,product.image);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%FROM%}/g,product.from);
    output=output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output=output.replace(/{%QUANTITY%}/g,product.quantity);
    output=output.replace(/{%DESCRIPTION%}/g,product.description);
    output=output.replace(/{%ID%}/g,product.id);

    if(!product.organic)
    output=output.replace(/{%NOT_ORGANIC%}/g,'not-organic');

    return output;
    

}
// console.log(textIn);

// const textOut=`This is what we know about node: ${textIn}.\nCreate on blah blah`;
// fs.writeFileSync('./TEXT/output.txt',textOut);
// console.log("File Written!");

// fs.readFile('./TEXT/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./TEXT/${data1}.txt`,'utf-8', (err, data2)=>{
//         console.log(data2);
//         fs.readFile('/TEXT/append.txt', 'utf-8', (err, data3)=>{
//             console.log(data3);

//             fs.writeFile('./TEXT/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('Your file has been written');

//             })

//         })
//     })
// })

const http=require('http');
const path = require('path');
const url=require('url');

const temp_Overview=fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const temp_Card=fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const temp_product=fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data=fs.readFileSync(`${__dirname}/dev_data/data.json`,'utf-8');
const dataObj=JSON.parse(data);




const server=http.createServer((req,res)=>{
    // const pathname=req.url;

    const { query, pathname } = url.parse(req.url, true);


   if(pathname ==='/' || pathname==='/overview'){
    res.writeHead(200,{'Content-type':'text/html'});

    const carsdsHtml=dataObj.map(el=> replaceTemp(temp_Card,el)).join('');
    const output=temp_Overview.replace('{%PRODUCT_CARDS%}',carsdsHtml);
    res.end(output);
   }
   

   else if(pathname === '/product'){
    res.writeHead(200,{'Content-type':'text/html'});
    const product= dataObj[query.id];
    const output=replaceTemp(temp_product,product);
    res.end(output);
   }
   

   else if(pathname === '/api'){
      fs.readFile(`${__dirname}/dev_data/data.json`, 'utf-8', (err,data)=>{
        res.end(data);
      })
   }
   
   else{
    res.writeHead(404);
    res.end('PAGE NOT FOUND');
   }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');
});
