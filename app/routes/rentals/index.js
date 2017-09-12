import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let userId = this.get("session.currentUser.id");
    this.get('store').query('rental', { userId: userId });
  }
});

