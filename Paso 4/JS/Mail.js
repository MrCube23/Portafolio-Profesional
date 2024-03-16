async function sendEmail() {

    const textArray = sweetAlertText;

    console.log(sweetAlertText);

    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputMail").value;
    var subject = document.getElementById("inputSubject").value;
    var message = document.getElementById("inputMessage").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: sweetAlertText[0],
            confirmButtonText: 'Ok'
        });
        return;
    }

    if (name.trim() === '' || subject.trim() === '' || message.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: sweetAlertText[1],
            confirmButtonText: 'Ok'
        });
        return;
    }

    emailjs.init("qL1lmAahxdo_6hjVS");

    emailjs.send("service_d6exjn8", "template_gjxcu6i", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        Swal.fire({
            icon: 'success',
            title: sweetAlertText[2],
            showConfirmButton: false,
            timer: 2000
        });
        document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: sweetAlertText[3],
            confirmButtonText: 'Ok'
        });
    });
}
