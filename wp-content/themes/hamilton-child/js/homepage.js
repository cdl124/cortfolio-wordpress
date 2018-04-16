jQuery( document ).ready(function () {
  jQuery( '.web-wga' ).addClass( 'animated' ).addClass( 'fadeInUp' );

  setTimeout(function () {
    jQuery( '.graphic-wga' )
      .addClass( 'animated' )
      .addClass( 'fadeInUp' )
  }, 200);

  setTimeout(function () {
    jQuery( '.apparel-wga' )
      .addClass( 'animated' )
      .addClass( 'fadeInUp' )
  }, 400);
});
