document.querySelectorAll('.fullscreen-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const iframeId = button.getAttribute('data-iframe-id');
      const iframe = document.getElementById(iframeId);
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) { 
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { 
        iframe.msRequestFullscreen();
      }
    });
  });
  

