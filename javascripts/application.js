$(document).ready(function() {
  $('.navbar-collapse a').on('click', function() {
    $('.navbar-toggle').click();
  });

  $('#full-page').fullpage({
    navigation:         false,
    navigationPosition: 'right',

    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if ( index === 1 ) {
        $('header').addClass('simple');
      }
    },

    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if ( index === 1 ) {
        $('header').removeClass('simple');
      }
    },
  });
});
