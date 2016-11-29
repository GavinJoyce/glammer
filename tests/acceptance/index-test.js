import { test } from 'qunit';
import moduleForAcceptance from 'glammer/tests/helpers/module-for-acceptance';
import { mockSetup, mockTeardown, build } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | index', {
  beforeEach() {
    mockSetup();
  },
  afterEach() {
    mockTeardown();
  }
});

test('visiting /index', function(assert) {
  let post = build('post', {
    comments: []
  });

  console.log('GJ: ', post);
  visit('/issue1');

  andThen(function() {
    assert.equal(currentURL(), '/issue1');
  });
});
