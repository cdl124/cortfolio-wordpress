jQuery( document ).ready(function () {
  jQuery( '.email-icon' ).addClass( 'animated' ).addClass( 'fadeInUp' );

  setTimeout(function () {
    jQuery( '.linkedin-icon' )
      .addClass( 'animated' )
      .addClass( 'fadeInUp' )
  }, 200);

  setTimeout(function () {
    jQuery( '.github-icon' )
      .addClass( 'animated' )
      .addClass( 'fadeInUp' )
  }, 400);

  setTimeout(function () {
    jQuery( '.pwcd-icon' )
      .addClass( 'animated' )
      .addClass( 'fadeInUp' )
  }, 600);

  /*jQuery( '.pwcd-icon img' ).hover(
    function () {
      jQuery( '.pwcd-icon img' ).css( 'opacity', '0.4' )
    }
  );*/
});
