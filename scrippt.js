$(document).ready(function () {
    try {
        // Remove the view count from Local Storage if you want to reset it
        localStorage.removeItem("viewCount");

        // Optionally, you can hide the view count element on the page (if it exists)
        $("#viewCount").hide();

        // Debugging log
        console.log("View count removed successfully.");
    } catch (error) {
        console.error("Error removing view count:", error);
    }
});
