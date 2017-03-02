// global declaration of 'use strict' (ES6) to avoid declaring
// it at the start of every function
'use strict';

(function (window) {
  var App = window.App || {};
  function Truck(truckID, db) {
    this.truckID = truckID;
    this.db = db;
  }
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };
  App.Truck = Truck;
  window.App = App;
}) (window);

