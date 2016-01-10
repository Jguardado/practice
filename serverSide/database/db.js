var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectID = Schema.ObjectId;

//specifies which db(mongo) to connect to and where it is located
mongoose.connect('mongodb://localhost/myapp');

var db = mongoose.connection;
var User;
var exports = module.exports;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
  console.log('connected');

  //children need to be created first.
  var MessageSchema = new Schema({
    user: String,
    text: String

  });
  //parent doc
  var UserSchema = new Schema({
    username: String,
    roomname: String,
    //messages: String
    messages: [MessageSchema]

  });



  User = mongoose.model('User', UserSchema);
  //var Message = mongoose.model('Message', MessageSchema);
  //[{user: 'Daniel'}]
  var user = new User({username: 'Daniel', messages: [{user: 'Daniel'}]});
  //var message = new Message({text: 'this is my message'});

// Message.pre('save', function(next){
//   console.log('pushing message');
//   //somethhing here
//   next();
// });

  user.save(function(err, user){
    if (err) return console.error(err);
    console.log(user);
  });

  exports.users = User;
  //user.message.push(message);

});
