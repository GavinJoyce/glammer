import Em from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('simple-component', 'Components | SimpleComponent', {
  unit: true
});

test('it renders the name', function(assert) {
  assert.expect(2);

  var component = this.subject();

  assert.equal(this.$().text().trim(), "Hi Ben, I am a simple component");

  Em.run(() => {
    component.set('name', 'Alex');
  });

  assert.equal(this.$().text().trim(), "Hi Alex, I am a simple component");
});
