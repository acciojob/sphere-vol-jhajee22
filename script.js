function volume_sphere() {
    //Write your code here
	// Get the radius value from the input field
  const radius = parseFloat(document.getElementById("radius").value);

  // Get the volume input field
  const volumeInput = document.getElementById("volume");

  // Check if the input is a valid number and greater than or equal to 0
  if (!isNaN(radius) && radius >= 0) {
    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the "Volume" input field with the calculated volume
    volumeInput.value = volume.toFixed(2); // Displaying up to 2 decimal places
  } else {
    // Handle invalid input
    alert("Please enter a valid positive number for the radius.");
    document.getElementById("radius").value = ""; // Clear the input field
    volumeInput.value = ""; // Clear the volume field
  }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
