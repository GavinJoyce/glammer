import Ember from 'ember';
import A from './a';
console.log('GJ: A from B', A);

export default Ember.Object.extend({
  name: 'b'
});
