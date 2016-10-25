import Ember from 'ember';
import { timeout } from 'ember-concurrency';

export default Ember.Route.extend({
  beforeModel() {
    return timeout(2000);
  }
});
