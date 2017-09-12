export default function() {
  this.namespace = '/api';

  this.get('/rentals', function(db, request) {
    let myrentals = db.rentals.all().filter(function(i) {
      return i.attrs.data.relationships.user.data.id == request.queryParams.userId;
    });

    if (request.queryParams.city !== undefined) {
      let filteredRentals = myrentals.filter(function(i) {
        let query = request.queryParams.city.toLowerCase();
        return i.attrs.data.attributes.city.toLowerCase().indexOf(query) !== -1;
      });
      return filteredRentals;
    } else {
      return myrentals;
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function(db, request) {
    return { data: db.rentals.all().find((rental) => request.params.id === rental.id) };
  });

  // Add New Rental
  this.post('/rentals', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.rentals.create(attrs);
  });

  // Register New User
  this.post('/users', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.users.create(attrs);
  });

  this.get('/users', function(db, request) {
    let users = db.users.all()

    if (request.queryParams.email !== undefined && request.queryParams.password !== undefined) {
      let filteredUsers = users.filter(function(i) {
        let email = request.queryParams.email;
        let password = request.queryParams.password;
        return i.attrs.data.attributes.email == email && i.attrs.data.attributes.password == password;
      });
      return  filteredUsers.models[0];
    } else {
      return null;
    }
  });

}
