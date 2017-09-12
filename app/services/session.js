import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  init() {

  },

  currentUser: Ember.computed({
    get: function() {
      return null;
    },
    set: function(key, value) {
      return value;
    }
  }),

});
