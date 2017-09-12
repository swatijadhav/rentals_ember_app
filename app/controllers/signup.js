import Ember from 'ember';

export default Ember.Controller.extend({
  name: "",
  email: "",
  password: "",

  actions: {
    authenticate() {
      let user = this.store.createRecord('user', {
        name: this.get("name"),
        email: this.get("email"),
        password: this.get("password"),
      });
      user.save().then(() =>{
        this.set("session.currentUser", user);
        this.transitionToRoute('rentals');
      });
    }
  }
});
