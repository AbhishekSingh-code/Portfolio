function move() {
    var elem = document.getElementById("loading-bar");
    var width = 0;
    var id = setInterval(frame, 5); // Adjust the speed of the loading bar

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            var loadingBarContainer = document.getElementById('loading-bar-container');
            loadingBarContainer.style.transition = 'opacity 0.5s ease-out';
            loadingBarContainer.style.opacity = '0';
            setTimeout(function() {
                loadingBarContainer.style.display = 'none';
            }, 500);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

// Call the move function when the page loads
window.onload = move;
