import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('issue1');
  this.route('issue2');
  this.route('issue3');
  this.route('issue4');
});

export default Router;
