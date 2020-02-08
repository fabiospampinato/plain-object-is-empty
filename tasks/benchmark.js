
/* IMPORT */

const {default: isEmpty} = require ( '../dist' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000000,
  log: 'compact'
});

benchmark ({
  name: 'plain-object-is-empty',
  fn: () => {
    isEmpty ({});
    isEmpty ({ foo: true });
  }
});

benchmark.summary ();
