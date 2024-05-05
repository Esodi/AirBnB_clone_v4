document.addEventListener('DOMContentLoaded', function () {
    // Existing code

    // Send request to API
    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            // Check if status is OK
            if (data.status === 'OK') {
                document.getElementById('api_status').classList.add('available');
            } else {
                document.getElementById('api_status').classList.remove('available');
            }
        })
        .catch(error => console.error('Error:', error));
});

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
  