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
app.use(express.static(path.join(__dirname,'public')))
 app.use( function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "origin, xRequested-With, Content-Type, Accept")
	next();
})

// app.get("/", (req, res)=> {
// 	res.sendFile(path.join(__dirname + '/public/index.html'))
// })
const forward = function (req,res){
	console.log(req.method,' request recieved')

	request('http://localhost:3006/'+Math.floor(Math.random() * 10000000),(err,response, body)=>{

		 console.log('statuscode', response.statusCode)

		fs.writeFile('/home/abhi/proxy-tjn/public/index.html',`<html><head></head><body">${body}</body></html>`,(err)=>{
			if(err) {console.log('there was an error', err)}
			else{
			console.log('write successful');
			res.sendFile('/home/abhi/proxy-tjn/public/index.html')
			}
		})

		// res.send(payload.replace('<div id="app"></div>',body))
		// )
	;
});
}

 app.get("/", forward);

app.listen(PORT, ()=> {
	console.log('tjn-proxy Server listening on port ',  PORT)
})
