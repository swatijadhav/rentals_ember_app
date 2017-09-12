import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (!this.session.get('currentUser')) {
      transition.abort();
      this.transitionTo('login');
    }
  }
});
