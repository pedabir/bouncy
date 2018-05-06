var $gallery = $('.grid').isotope({
  // options
  itemSelector: '.element-item',
  layoutMode: 'masonry',
    masonry: {
        fitWidth:true
    }
});

$gallery.imagesLoaded().progress( function() {
    $gallery.isotope('layout');
})

$('.filters-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({ filter: filterValue});
});

