Number.isInteger = Number.isInteger || function( value ) {
  return typeof value === 'number' && Number.isFinite( value ) && !( value % 1 );
};

const isInteger = ( value ) => Number.isInteger( value );

export default isInteger;