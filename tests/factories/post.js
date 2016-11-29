import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('post', {
  default: {
    comments: FactoryGuy.hasMany('comments', 1)
  }
});
