      setInterval(function() {
        var doc = document.querySelector("iframe").contentDocument
        if (doc) {
          var title = doc.title
          document.title = title
        }
      }, 500)

      const ipcRenderer = require('electron').ipcRenderer;
      ipcRenderer.on('playback-control', function(event, arg) {
        var doc = document.querySelector("iframe").contentDocument

        switch (arg) {
          case "MediaPlayPause":
            var playBtn = doc.querySelector("button.js-play")
            var pauseBtn = doc.querySelector("button.js-pause")
            if (pauseBtn.style.display == "none") playBtn.click()
            else pauseBtn.click()
            break;

          case "MediaNextTrack":
            doc.querySelector("button.js-next").click();
            break;

          case "MediaPreviousTrack":
            doc.querySelector("button.js-previous").click();
            break;

          case "MediaStop":
            doc.querySelector("button.js-pause").click();
            break;
        }
      });
