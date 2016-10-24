import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let date = new Date();
    return date.getFullYear()
  }

});
