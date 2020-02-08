
/* PLAIN OBJECT IS EMPTY */

function isEmpty ( x: any ): boolean {

  for ( const key in x ) return false;

  return true;

}

/* EXPORT */

export default isEmpty;
