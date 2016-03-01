import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    var date = new Date();

    return {
      year: date.getFullYear()
    };

  }

});
