define('family-photo/tests/helpers/resolver', ['exports', 'ember/resolver', 'family-photo/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});