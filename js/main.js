$(function(){

  $.ajax("contacts.json",{

    success: function(data) {
      window.app = new App(data);
    },

    error: function() {
      console.log("failed to load contacts.json");
    }

  });

});
