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
    select: function(groupName) {
      this.$el.find("li").removeClass("active");
      this.$el
        .find("li[data-group-name='"+ groupName +"']")
        .addClass("active");
    },

    render: function() {
      var $el = this.$el;

      var group = new ContactGroup({name: "all"});
      $el.append( group.render() );

      _.each(this.data, function(groupData){

        var group = new ContactGroup(groupData);
        $el.append( group.render() );

      });

      return $el;
    }
  }

  return ContactGroupList;

})();



