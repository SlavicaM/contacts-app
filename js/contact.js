var ContactPreview = (function(){

  var template = JST["contact-preview"];

  function ContactPreview(data) {
    this.data = data;
  }

  ContactPreview.prototype = {

    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/user-default.jpg";
      var data = _.clone(this.data);
      if (!data.photo) {
        data.photo = defaultPhoto;
      }
      return data;
    }

  }

  return ContactPreview;

})();

var ContactList = (function() {

  function ContactList(data) {
    this.data = data;
  }

  ContactList.prototype = {

    render: function() {
      var $el = $("<div />");
      _.each(this.data, function(contact) {
        var preview = new ContactPreview(contact);
        $el.append( preview.render() );
      });
      return $el;
    }

  }

  return ContactList;

})();

var ContactFull = (function(){

  var template = JST["contact-full"];

  function ContactFull(data) {
    this.data = data;
  }

  ContactFull.prototype = {
    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/user-default.jpg";
      var data = _.clone(this.data);
      if (!data.photo) {
        data.photo = defaultPhoto;
      }
      return data;
    }
  }

  return ContactFull;

})();
