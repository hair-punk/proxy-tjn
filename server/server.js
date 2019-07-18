const express = require('express')
const bodyParser = require('body-parser')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const request = require("request")
const path = require("path");
const app = express();
const fs = require('fs');
const PORT = 3000

app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(express.static(__dirname +'/public'))
 app.use( function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "origin, xRequested-With, Content-Type, Accept")
	next();
})

// app.get("/", (req, res)=> {
// 	res.sendFile(path.join(__dirname + '/public/index.html'))
// })
const forward = function (req,res){

request('http://52.53.189.14:3006/', (error,response, body)=>{
//console.log(body);
res.send(body)
})

//	console.log(req.method,' request recieved')
//	request('http://52.53.189.14:3006/'),(err,response, body)=>{
//		res.send(body)
//		 console.log('statuscode', response.statusCode)
//		fs.writeFile('/home/ubuntu/proxy-tjn/public/index.html',`<html><head></head><body">${body}</body></html>`,(err)=>{
//			if(err) {console.log('there was an error', err)}
//			else{
//			console.log('write successful');
//			res.sendFile('/home/ubuntu/proxy-tjn/public/index.html')
//			}
		// )
//	};
}

app.get("/", forward);
app.get('/loaderio-55ffdfbfc38d2c44bf172c54c695ca28',(req,res)=>{
res.send('loaderio-55ffdfbfc38d2c44bf172c54c695ca28')
})
app.listen(PORT, ()=> {
	console.log('tjn-proxy Server listening on port ',  PORT)
})
