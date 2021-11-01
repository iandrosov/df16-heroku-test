'use strict';

var url = require('url');

const {Pool} = require('pg');
const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: {
  rejectUnauthorized: false
 }
});

//var Accounts = require('./AccountsService');


module.exports.accountsGET = function accountsGET (req, res, next) {

  console.log('## TEST PG method');

  pool.query('SELECT * FROM salesforce.Account;', (err, result) => {
    if (err) {
        console.log("Error - Failed to select all from Account");
        console.log(err);
    }else{
        console.log(result.rows);
        /** HTML Ouytput 
        var temp = '<html>';
        result.rows.forEach(function(value){
          //console.log(value);
          console.log('Object Stringified:'+value.name+'\n');
          temp += 'Name:'+value.name+'<br/>'
        });
        temp += '</html>';
        //res.setHeader('Content-Type', 'text/html');
        //res.end(temp, null, 4);

        */
        // JSON
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result.rows, null, 4));
    
            
    }
  });
  //Accounts.accountsGET(req.swagger.params, res, next);
};

