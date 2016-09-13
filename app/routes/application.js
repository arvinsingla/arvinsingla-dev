import Ember from 'ember';
import Config from 'arvinsingla/config/environment';

export default Ember.Route.extend({

  model() {

    let date = new Date();
    let medium = $.getJSON(Config.medium).then((data) => {
      if (data.status === 'ok') {
        return data.items;
      }
      return []
    });

    return Ember.RSVP.hash({
      year: date.getFullYear(),
      medium
    });

  }

});
