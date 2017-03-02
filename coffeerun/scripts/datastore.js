// global declaration of 'use strict' (ES6) to avoid declaring
// it at the start of every function
'use strict';

(function (window) {
  var App = window.App || {};
  function DataStore() {
    this.data = {};
  }
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function () {
    return this.data;
  };
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  window.App = App;
}) (window);

