const express = require('express')
const bodyParser = require('body-parser')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const request = require("request")
const app = express();
const PORT = 3000

app.use(bodyParser.json())
app.use(express.urlencoded())
// app.use(express.static('public'))
app.use( function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "origin, xRequested-With, Content-Type, Accept")
	next();
})

// app.get("/", (req, res)=> {
// 	res.sendFile(path.join(__dirname + '/public/index.html'))
// })
const forward = function (req,res){
	console.log('get request recieved')
	var payload = '<!DOCTYPE html><html><head\></head\><body\><div id="app"></div></body\></html>';
	request('http://localhost:3006/'+Math.floor(Math.random() * 10000000),(err,response, body)=>{
		// console.log(err);
		// console.log('statuscode', response.statusCode)
		// console.log(body);
		//  return res.send(payload.replace('<div id="app"></div>', '<div id="app">'+ReactDOMServer.renderToString(<App />)+'</div>' )
		res.send(payload.replace('<div id="app"></div>',body))
		// )
	;
});
}

app.use("/", forward);

app.listen(PORT, ()=> {
	console.log('tjn-proxy Server listening on port ',  PORT)
})
