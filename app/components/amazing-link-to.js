import Ember from 'ember';

export default Ember.LinkComponent.extend({
  classNameBindings: ['isUrgent'],
  isUrgent: true

  // classNameBindings: ['priorityFromClass', 'priorityFromTemplateProperty', 'isUrgentFromClass', ':from-amazing-link-to'],
  // priorityFromClass: 'priority-class',
  // isUrgentFromClass: true,
  // isUrgentFromTemplate: true
});
