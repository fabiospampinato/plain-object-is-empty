
/* MAIN */

const isEmpty = ( object: Record<string | number | symbol, unknown> ): boolean => {

  for ( const key in object ) {

    if ( !object.hasOwnProperty ( key ) ) continue;

    return false;

  }

  return true;

};

/* EXPORT */

export default isEmpty;
