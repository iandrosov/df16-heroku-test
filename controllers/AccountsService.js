'use strict';

var util = require('util');
const Promise = require('bluebird');
const readFile = Promise.promisify(require('fs').readFile);

const config = require('config');
const knex = require('knex')({ client: 'postgres', connection: config.DATABASE_URL });
const bookshelf = require('bookshelf')(knex);

/**
 * Define DB Model for Quota records
 */
const Account = bookshelf.Model.extend({
  tableName: 'salesforce.account',
  idAttribute: 'id',

});

const Accounts = bookshelf.Collection.extend({
  model: Account,

});

exports.accountsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "accountnnumber" : 123,
    "name" : "aeiou",
    "id" : 123,
    "sfid" : "aeiou",
    "email" : "aeiou"
  } ]
};

new Accounts().fetch().then((eq) => {
  
    //console.log('\n\nAccount Stringified:\n');
    //console.log(JSON.stringify(eq, null, 4));

    var temp = '<html>';
    eq.forEach(function(value){
      //console.log(value);
      console.log('Account Stringified:'+value.get('name')+'\n');
      temp += 'Account:'+value.get('name')+'<br/>'
    });
    temp += '</html>';
    
    //res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(eq, null, 4));

    res.setHeader('Content-Type', 'text/html');
    res.end(temp, null, 4);
  
  }).catch(function(err) {
  
    console.error(err);
    res.end();
  }); 
/*
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
 */ 
}

