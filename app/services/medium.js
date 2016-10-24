import Ember from 'ember';
import Config from 'arvinsingla/config/environment';

export default Ember.Service.extend({

  articles: null,

  init() {
    this._super(...arguments);
    this.set('articles', []);
    Ember.$.getJSON(Config.medium).then((data) => {
      if (data.status === 'ok') {
        debugger;
        this.set('articles', data.items);
      }
    });
  }
});
