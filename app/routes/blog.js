import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    let applicationModel = this.modelFor('application');

    return {
      medium: applicationModel.medium || []
    };

  }

});
