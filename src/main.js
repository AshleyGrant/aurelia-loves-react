import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .globalResources(['./resources/value-converters/date']);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
