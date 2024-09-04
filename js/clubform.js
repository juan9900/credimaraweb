
const form = document.getElementById('clubForm');
const result = document.getElementById('result');
const spinner = $('#spinner');
const mensajeExito = $('#mensaje-exito');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    $(spinner).removeClass('d-none')
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    // result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json

    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                $(mensajeExito).removeClass('d-none')
                $(spinner).addClass('d-none')
                // result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                // result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            // result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                $(mensajeExito).addClass('d-none')
                // result.style.display = "none";
            }, 3000);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    new Splide("#card-slider", {
        perPage: 3,
        loop: false,
        breakpoints: {
            600: {
                perPage: 1,
            },
            850: {
                perPage: 2,
            },
            1280: {
                perPage: 3,
            },
        },
        arrowPath:
            "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
        // type: 'loop',
    }).mount();
});