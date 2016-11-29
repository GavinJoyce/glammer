import Ember from 'ember';

let MyMixin = Ember.Mixin.create({
  talk() {
    console.log('GJ: MyMixin talking');
    this._super(...arguments);
  }
});

let MyObject = Ember.Object.extend(MyMixin, {
  talk() {
    console.log('GJ: MyObject talking');
    this._super(...arguments);
  }
});

let myInstance = MyObject.create();

export default Ember.Route.extend(MyMixin, {
  actions: {
    sayHello() {
      myInstance.talk(); //this works
      myInstance['talk'](); //this works

      let fn = myInstance['talk'];
       //this fails with `Uncaught TypeError: Cannot read property '_super' of undefined`
       //in Ember 2.10.0. It works in Ember 2.9.0
      fn();
    }
  }
});
