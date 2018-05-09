let firebase = require('firebase');
let AWS = require('aws-sdk');


const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	
	let email = "andun@adroitlogic.com";
	// let long = 7.8731;
	changeCoord = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4);
	console.log(changeCoord);
	let long = 7.8731 + parseFloat(changeCoord);
	let latitude = 80.7718 + parseFloat(changeCoord);
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
	class FirebaseService{
		constructor(){
			let config = {
				apiKey: "AIzaSyDMF17Pu7_5gLRYX_Ff_dbA8Ak5_RONIQA",
				authDomain: "testusercreate-89b32.firebaseapp.com",
				databaseURL: "https://testusercreate-89b32.firebaseio.com",
				projectId: "testusercreate-89b32",
				storageBucket: "testusercreate-89b32.appspot.com",
				messagingSenderId: "157406510033"
			}
			if (!firebase.apps.length) {
            firebase.initializeApp(config);
			console.log("Success");
        }

        //TODO configure proper authentication
        firebase.auth().signInWithEmailAndPassword('andun@adroitlogic.com', 'Andun!12345').catch(error => {
            console.log(error);
        });
        // Get a reference to the database service
        this.database = firebase.database();
		}


		
	}

	callback(null, 'Successfully executed');
	
}
