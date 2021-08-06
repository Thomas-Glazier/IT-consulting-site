//opens mail app on PC//
      function sendMail() {
        var link = "mailto:tglazier1999@gmail.com"

                 + "?subject=" + encodeURIComponent("Inquiry")
                 + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ;

        window.location.href = link;
    }
// checks for text in box//
    function validate() {
      var val = document.getElementById('myText').value;

      if (/^\s*$/g.test(val) || val.indexOf('\n') != -1) {
          alert('You seem to have forgotten something!');
        }
      else {sendMail()}
    }
