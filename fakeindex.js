const S3 = require('aws-sdk/clients/s3');
var uuid = require('uuid');
const { accessKeyId, secretAccessKey } = require('../config/aws.js');
// var bundle = require('../public/bundle.js');
const fs = require('fs');
const path = require('path');

var Bucket = 'trevorbetsyinfo';

// var keyName = '../public/bundle.js'

// //send bundle.js
var file = fs.readFile(path.join(__dirname.slice(0, -4) + '/public/bundle.js'), (err, data) => {
	var base64Data = new Buffer(data, 'binary');

	var bucketPromise = new S3({
		region: 'us-west-2',
		credentials: {
			accessKeyId,
			secretAccessKey,
		},
	});

	bucketPromise.putObject(
		{
			Bucket,
			Key: 'tbundle.js',
			Body: base64Data,
			ACL: 'public-read',
		},
		(err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log('uploaded bundle');
				console.log(data);
			}
		},
	);
});
// console.log(file);
