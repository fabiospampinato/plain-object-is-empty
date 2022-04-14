
/* IMPORT */

import {describe} from 'fava';
import isEmpty from '../dist/index.js';

/* MAIN */

describe ( 'Plain Object Is Empty', it => {

  it ( 'works', t => {

    t.true ( isEmpty ({}) );
    t.false ( isEmpty ({ foo: true }) );

  });

});
