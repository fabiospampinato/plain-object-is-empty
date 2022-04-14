
/* IMPORT */

import benchmark from 'benchloop';
import isEmpty from '../dist/index.js';

/* MAIN */

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
