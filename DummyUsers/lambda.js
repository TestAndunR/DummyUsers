let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	let email = "andun@adroitlogic.com";
	// let long = 7.8731;
	let changeCoord = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4);
	console.log(changeCoord);
	let long = 7.8731 + changeCoord;
	let latitude = 80.7718 + changeCoord;
	console.log(long,latitude);
	password = "12345678"
	ddb.put({
		TableName: 'DummyUsers',
		Item: {
			'Email': email,
			'Password': password,
			'longitude': long,
			'latitude': latitude
		}
	}, function (err, data) {
		if (err) {
			console.log(err);

			//handle error
		} else {
			//your logic goes here
			console.log("Success");
		}
	});

	callback(null, 'Successfully executed');
}