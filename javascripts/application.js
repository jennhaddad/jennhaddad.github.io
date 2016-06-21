$(document).ready(function() {
  $('#full-page').fullpage({
    navigation:         false,
    navigationPosition: 'right',

    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      // noop
    },

    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      // noop
    },
  });
});
