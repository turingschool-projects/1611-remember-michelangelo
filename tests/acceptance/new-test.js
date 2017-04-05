/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';


import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('a new reminder can be added', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function(){
    assert.equal(Ember.$('.reminder-item').length, 5);
  })

  click('.create-btn');

  fillIn('.date-input', '7/13/17');
  fillIn('.title-input', 'new reminder');
  fillIn('.body-input', 'remind me of stuff');


  click('.submit-btn');

  andThen(function() {
    assert.equal(find('.reminder-item').length, 6);
  });
});
