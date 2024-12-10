$(document).ready(function () {
    try {
        // Get the current count from Local Storage or initialize it to 0
        let viewCount = parseInt(localStorage.getItem("viewCount")) || 0;

        // Increment the count
        viewCount++;

        // Save the updated count back to Local Storage
        localStorage.setItem("viewCount", viewCount);

        // Display the count on the webpage
        $("#viewCount").text(`View Count: ${viewCount}`);

        // Debugging log
        console.log(`View count updated successfully: ${viewCount}`);
    } catch (error) {
        console.error("Error updating view count:", error);
    }
});