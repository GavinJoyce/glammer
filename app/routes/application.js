import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sayHello(name) {
      alert(`Hi ${name}`);
    }
  }
});
