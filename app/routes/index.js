import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let date = new Date(),
        currentYear = date.getFullYear(),
        drupalYear = currentYear - 2006,
        javascriptYear = currentYear - 2013,
        applicationModel = this.modelFor('application');

    return {
      drupalYear,
      javascriptYear,
      medium: applicationModel.medium[0] || []
    };
  }
});
