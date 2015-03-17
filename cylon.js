
var Cylon = require('cylon');
var controller = require('./controller.js');

Cylon.api({
  host: '192.168.0.102',
  port: '8080',
  ssl: false
});

Cylon.robot({
  name: 'pebble',

  connections: {
    pebble: { adaptor: 'pebble' }
  },

  devices: {
    pebble: { driver: 'pebble' }
  },

  work: function(my) {
    my.pebble.send_notification("Hello NAP!");

    my.pebble.on('button', function(data) {
      console.log("Button pushed: " + data);
    });

    my.pebble.on('tap', function() {
      controller.nap();
      console.log("Tap event detected");
    });
  }
}).start();
