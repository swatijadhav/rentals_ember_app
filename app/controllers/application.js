import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout() {
      this.set("session.currentUser", null);
      this.transitionToRoute('index');
    }
  }
});
