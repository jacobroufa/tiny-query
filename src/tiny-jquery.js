// Your implementation here.

var $$ = tQuery = function( prop, context ) {
  if ( !( this instanceof tQuery ) )
  {
    return new tQuery( prop, context );
  }

  var elements = ( context !== undefined ) ? context.querySelectorAll( prop ) : document.querySelectorAll( prop );

  for ( var i = 0; i < elements.length; i++ )
  {
    this[i] = elements[i];
  }

  this.length = elements.length;

  this.forEach = function( func ) {
    return Array.prototype.forEach.call( this, function( elem, index ) {
      return func.call( elem, elem, index );
    });
  };
};
