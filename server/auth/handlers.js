//james to finish later

// require("dotenv").config({ path: "../.env" });
// let jwt = require('jsonwebtoken');

// class HandlerGenerator {

//     login(req, res) {
//         let username = req.body.username;
//         let password = req.body.password;
//         console.log('username ', username, 'password ', password);
//         // For the given username fetch user from DB
//         let mockedUsername = 'admin';
//         let mockedPassword = 'password';

//         if (username && password) {
//             if (username === mockedUsername && password === mockedPassword) {
//                 let token = jwt.sign({ username: username },
//                     process.env.REACT_APP_JWT_SECRET,
//                     {
//                         expiresIn: '24h' // expires in 24 hours
//                     }
//                 );
//                 console.log('token = ', token)
//                 // return the JWT token for the future API calls
//                 res.json({
//                     success: true,
//                     message: 'Authentication successful!',
//                     token: token
//                 });
//             } else {
//                 console.error("first else")
//                 //need to set status without ending below
//                 res.json({
//                     success: false,
//                     message: 'Incorrect username or password'
//                 });
//             }
//         } else {
//             console.error("second else  ")
//             //need to set status without ending below
//             res.json({
//                 success: false,
//                 message: 'Authentication failed! Please check the request'
//             });
//         }
//     }
//     createPost(req, res) {
//         res.json({
//             success: true,
//             message: 'createPost page'
//         });
//     }
// }

// module.exports = HandlerGenerator;