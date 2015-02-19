$(function(){

  $.ajax("contacts.json",{

    success: function(data) {
      console.log(data);
    },

    error: function() {
      console.log("failed to load contacts.json");
    }

  });

});
