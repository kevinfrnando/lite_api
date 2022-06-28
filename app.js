import 'dotenv/config';
import express from 'express';
import bodyParser from "body-parser";
import mysql from 'mysql';

const app = express();
const { API_VERSION, PORT, HOST, USER, PASSWORD, DATABASE } = process.env;

/* ***************************
* **** CONECTION TO DDBB ****
* ***************************/
const connection = mysql.createConnection({
    host : HOST,
    user : USER,
    password : PASSWORD,
    database : DATABASE
});
connection.connect( ( e )=>{
    if( e )  
    console.log(e);
}); 


app.use( bodyParser.urlencoded({ extended: false }));       
app.use( bodyParser.json() );


app.listen( PORT , () =>{
    console.log( "########################################");
    console.log( `## SERVER CONNECTED IN PORT ${ PORT } ##`);
    console.log( "########################################");
}) 