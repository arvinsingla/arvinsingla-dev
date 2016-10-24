import Ember from 'ember';

export default Ember.Component.extend({

  medium: Ember.inject.service(),

  articles: Ember.computed('medium.articles.[]', function() {
    return this.get('medium.articles');
  })
});
