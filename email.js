function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("from").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("messagetosend").value,
        usermail: document.getElementById("usermail").value
    };
    emailjs.send('service_mfa330s', 'template_zvz1v8k', tempParams)
        .then(function(res) {
            console.log('successful', res.status);

        })
}