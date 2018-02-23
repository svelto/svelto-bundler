
/* REQUIRE */

const components = require ( './components' ),
      environments = require ( './environments' ),
      targets = require ( './targets' ),
      paths = require ( './paths' ),
      plugins = require ( './plugins' );

/* DEFAULTS */

const defaults = {

  /* GENERAL */

  components,
  paths,
  plugins,

  /* TARGET */

  targets,
  target: 'web',

  /* ENVIRONMENT */

  environments,
  environment: 'default' // Supports 'env', `[env1[, env2]]` and `env1[,env2[,..]]`

};

/* EXPORT */

module.exports = defaults;
