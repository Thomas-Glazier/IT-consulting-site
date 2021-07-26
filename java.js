      function sendMail() {
        var link = "mailto:tglazier1999@gmail.com"
                 + "?cc=tglazier1999@gmail.com"
                 + "&subject=" + encodeURIComponent("Inquiry")
                 + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ;
        
        window.location.href = link;
    }
