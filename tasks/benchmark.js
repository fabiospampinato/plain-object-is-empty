
/* IMPORT */

import benchmark from 'benchloop';
import isEmpty from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: 'empty',
  fn: () => {
    isEmpty ({});
  }
});

benchmark ({
  name: 'full',
  fn: () => {
    isEmpty ({ foo: true });
  }
});

benchmark.summary ();
