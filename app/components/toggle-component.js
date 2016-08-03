import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  count: 0,
  expanded: false,

  style: Em.computed('expanded', function() {
    this.incrementProperty('count');
    if(this.get('expanded')) {
      return `background-color: red`.htmlSafe();
    } else {
      return `background-color: yellow`.htmlSafe();
    }
  }),

  actions: {
    toggle() {
      this.toggleProperty('expanded');
    }
  }
});
