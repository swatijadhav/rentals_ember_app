import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

let StubSessionService = Ember.Service.extend({
  currentUser() {
    return {id: 1, name: "example", email: "test@example.com", password: "password"};
  }
});

moduleForAcceptance('Acceptance | user rentals list', {
  beforeEach() {
    this.application.register('service:stubMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:stubMaps');

    this.application.register('service:stubSession', StubSessionService);
    this.application.inject('route', 'session', 'service:stubSession');
    this.application.inject('controller', 'session', 'service:stubSession');
  }
});

test('should show usrs rentals as the home page', function (assert) {
  visit('/rentals');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should not redirect to rentals page automatically');
  });
});

test('should link to information about the company', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
