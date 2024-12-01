let apiURL = 'https://dog.ceo/api/breeds/image/random';

function fetchDogImage() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        document.getElementById('dogImage').src = data.message;
      } else {
        alert('Failed to load image.');
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Load a random dog image on initial load
fetchDogImage();
