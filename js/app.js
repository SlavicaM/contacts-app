var App = (function(){

  function App(data) {

    this.data = data;

    this.$sidebar = $(".sidebar");
    this.$main = $(".main");

    this.showGroups();
    this.showContacts("all");
    this.addListeners();
  }

  App.prototype = {

    getGroupNames: function() {
      return _.chain(this.data)
        .pluck("group")
        .uniq()
        .map(function(groupName){
          return {name: groupName}
        })
        .value();
    },

    showGroups: function() {
      var groupData = this.getGroupNames();
      var cgl = new ContactGroupList(groupData);
      this.$sidebar.html( cgl.render() );
    },

    getGroup: function(groupName) {
      if(groupName === "all") {
        return this.data;
      }
      return _.filter(this.data, function(contact){
        return contact.group === groupName;
      });
    },

    showContacts: function(groupName) {
      var contactData = this.getGroup(groupName);
      var cl = new ContactList(contactData);
      this.$main.html( cl.render() );
    },

    showFullContact: function(contactId) {
      var contactData = _.find(this.data, function(contact) {
        return contact.contact_id === contactId;
      });

      var contact = new ContactFull(contactData);

      this.$main.html( contact.render() );
    },

    addListeners: function() {
      var app = this;

      this.$sidebar.on("click", "li", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var groupName = $clicked.data("group-name");
        app.showContacts(groupName);
      });

      this.$main.on("click", "a", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var contactId = $clicked.data("contact-id");
        app.showFullContact(contactId);
      });
    }

  }

  return App;

})();
