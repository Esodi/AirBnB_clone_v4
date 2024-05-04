$(document).ready(function() {
    let checkedAmenities = [];

    function updateCheckedAmenities() {
      $('div.amenities h4').text(checkedAmenities.join(', '));
    }

    $('div.amenities input[type="checkbox"]').change(function() {

      let amenityName = $(this).data('name');

      if ($(this).is(':checked')) {
        checkedAmenities.push(amenityName);
      } else {
        let index = checkedAmenities.indexOf(amenityName);
        if (index !== -1) {
          checkedAmenities.splice(index, 1);
        }
      }

      updateCheckedAmenities();
    });
  });
  