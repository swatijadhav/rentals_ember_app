import Ember from 'ember';

export default Ember.Controller.extend({
  email: "",
  password: "",

  actions: {
    authenticate() {
      let _this = this;
      let data = {
        email: _this.get("email"),
        password: _this.get("password")
      }

      this.get('store').queryRecord('user', data).then((user) => {
        if(user) {
          _this.set("session.currentUser", user)
          _this.transitionToRoute('rentals');
        }
      }, ()=> {
        alert("Invalid Username or Password. Please Try again!")
      });
    }
  }
});
