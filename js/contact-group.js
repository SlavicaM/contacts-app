var ContactGroup = (function(){

  var template = JST["contact-group"];

  function ContactGroup(data) {
    this.data = data;
  }

  ContactGroup.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return ContactGroup;

})();

var ContactGroupList = (function(){

  function ContactGroupList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  ContactGroupList.prototype = {
    render: function() {
      var $el = this.$el;

      _.each(this.data, function(groupData){

        var group = new ContactGroup(groupData);
        $el.append( group.render() );

      });

      return $el;
    }
  }

  return ContactGroupList;

})();



