Number.isInteger = Number.isInteger || function( value ) {
  return typeof value === 'number' && Number.isFinite( value ) && !( value % 1 );
};

Number.isFinite = Number.isFinite || function(value) {
  return typeof value === 'number' && isFinite(value);
}

const isInteger = ( value ) => Number.isInteger( value );

export default isInteger;