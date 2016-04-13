Template.configureLoginServiceDialogForWechat.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForWechat.fields = function () {
  return [
    {property: 'appId', label: 'APP Id'},
    {property: 'secret', label: 'APP Secret'}
  ];
};
