document.getElementById('yesBtn').addEventListener('click', function() {
    var gifContainer = document.getElementById('gifContainer');
    gifContainer.classList.remove('hidden');

    var image = document.getElementById("center-gif-cat");
    image.style.display = "none";
  });

  document.getElementById('noBtn').addEventListener('mouseover', function() {
    var button = this;
    // var maxX = window.innerWidth - button.offsetWidth;
    // var maxY = window.innerHeight - button.offsetHeight;
    // var newX = Math.floor(Math.random() * maxX);
    // var newY = Math.floor(Math.random() * maxY);
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  });