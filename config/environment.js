/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'arvinsingla',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // Google fonts
    googleFonts: [
      'Caveat:700:latin'
    ],

    // Medium blog feed.
    medium: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Farvin-singla%3Ftruncated%3Dtrue&api_key=0tjef0mdha7ryfkqk9hoovmgwz7oweknjaoksobz',

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com",
      'script-src': "'self' 'unsafe-eval' https://www.google-analytics.com",
      'img-src': "'self' *",
      'connect-src': "'self https://api.rss2json.com"
    },
    contentSecurityPolicyHeader: 'Content-Security-Policy'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV.googleAnalytics = {
      webPropertyId: 'UA-4360044-3'
    };

  }

  return ENV;
};
