'use strict';

(function (window) {
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }

  this.serverURL = url;
  }
  
  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
