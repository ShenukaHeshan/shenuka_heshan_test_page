let apiURL = 'https://dog.ceo/api/breeds/image/random';

function fetchDogImage() {
  // Show the spinner and hide the image
  document.getElementById('loadingSpinner').style.display = 'block';
  document.getElementById('dogImage').style.display = 'none';

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        document.getElementById('dogImage').src = data.message;
        document.getElementById('dogImage').style.display = 'block';
      } else {
        alert('Failed to load image.');
      }
    })
    .catch(error => console.error('Error fetching data:', error))
    .finally(() => {
      // Hide the spinner after the fetch completes
      document.getElementById('loadingSpinner').style.display = 'none';
    });
}

// Load a random dog image on initial load
$(document).ready(function () {
  fetchDogImage();
});
