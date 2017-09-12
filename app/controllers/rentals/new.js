import RentalsController from '../rentals';

export default RentalsController.extend({

  title: "",
  description: "",
  city: "India",
  propertyType: "",
  bedrooms: "",
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',

  actions: {
    create() {
      let rental = this.store.createRecord('rental', {
        title: this.get("title"),
        description: this.get("description"),
        city: this.get("city"),
        propertyType: this.get("propertyType"),
        bedrooms: this.get("bedrooms"),
        image: this.get("image"),
        user: this.get("session.currentUser")
      });

      rental.save().then(() =>{
        rental.set('user', this.get("session.currentUser"));
        this.transitionToRoute('rentals');
      });
    }
  }
});
