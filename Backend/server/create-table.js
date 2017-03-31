/**
 * Created by Sri Prasad on 3/30/2017.
 */
var app = require('./server');
var loopback = require('loopback');

var db = app.dataSources.db;
var models = [ 'AccessToken','ACL', 'RoleMapping', 'Role', 'Contacts'];

db.autoupdate(models, function(err) {
  if(err) {
    console.error(err);
  } else {
    console.log('Tables are created for ', models);
  }
});
