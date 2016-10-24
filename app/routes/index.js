import Ember from 'ember';

export default Ember.Route.extend({

  medium: Ember.inject.service(),

  model() {
    let date = new Date(),
        currentYear = date.getFullYear(),
        drupalYear = currentYear - 2006,
        javascriptYear = currentYear - 2013;

    return {
      drupalYear,
      javascriptYear
    };
  }
});
