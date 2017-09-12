import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      let userId = this.get("session.currentUser.id");
      if (param !== '') {
        return this.get('store').query('rental', { userId: userId, city: param });
      } else {
        return this.get('store').query('rental', { userId: userId });
      }
    }
  }
});
