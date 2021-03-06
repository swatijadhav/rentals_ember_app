import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  name: DS.attr(),
  password: DS.attr(),

  rentals: DS.hasMany('rental'),
});
