
/* IMPORT */

import {describe} from 'ava-spec';
import {default as isEmpty} from '../dist';

/* PLAIN OBJECT IS EMPTY */

describe ( 'Plain Object Is Empty', it => {

  it ( 'works', t => {

    t.true ( isEmpty ({}) );
    t.false ( isEmpty ({ foo: true }) );

  });

});
