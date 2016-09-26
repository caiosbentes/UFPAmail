var notifier = require('node-notifier');

notifier
  .notify({
    'title': 'UFPAmail',
    'subtitle': 'Você tem um novo e-mail',	
    'message': 'Você tem um novo e-mail'+ '\n de...',
    'sound': 'Funk', // case sensitive
    'appIcon': __dirname + '/icon2.png',
    'contentImage': __dirname + '/icon2.png',
   
    'open': 'file://' + __dirname + '/coulson.jpg'
  }, function (err, data) {
    // Will also wait until notification is closed.
    console.log('Waited');
    console.log(err, data);
  })
  .on('click', function () {
    console.log('ola');
  });