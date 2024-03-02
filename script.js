// script.js file
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const scanButton = document.getElementById('scanButton');
    const qrReaderSection = document.querySelector('.scan-section');

    // Add click event listener to the scan button
    scanButton.addEventListener('click', function () {
        // Toggle the visibility of the qrReaderSection
        scanButton.style.display = 'none';
        // Center and display the qrReaderSection
        qrReaderSection.style.display = 'block';
        
        function domReady(fn) {
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                setTimeout(fn, 1000);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }
        
        domReady(function () {
            // If found you qr code
            function onScanSuccess(decodeText, decodeResult) {
                window.location.href = decodeText;
            }
        
            let htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
        
                { 
                  
                    fps: 10, qrbos: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-container2 form');

    /*
     // Fetch data from the server (replace this with your actual server endpoint)
                fetch('https://your-server-endpoint.com/login', {
                    method: 'POST', // or 'GET' depending on your server setup
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: document.getElementById('usernameInput').value,
                        password: document.getElementById('passwordInput2').value,
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    // Check the server response
                    if (data.success) {
                        // Redirect to the next page (replace '/nextPage' with your desired URL)
                        window.location.href = '/nextPage';
                    } else {
                        // Show error message (replace this with your actual error handling)
                        alert('Invalid username or password. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error (replace this with your actual error handling)
                    alert('An error occurred. Please try again later.');
                });
            */

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Hardcoded demo user credentials (replace this with your actual server validation)
        const demoUser = { username: 'demoUser', password: 'demoPassword' };

        // Check entered credentials against demo credentials
        const enteredUsername = document.getElementById('usernameInput').value;
        const enteredPassword = document.getElementById('passwordInput2').value;

        if (enteredUsername === demoUser.username && enteredPassword === demoUser.password) {
            // Redirect to the next page (replace '/nextPage' with your desired URL)
            window.location.href = 'scan.html';
        } else {
            customAlertMessage.innerText = 'User Name / Password Invalid! Please try again.';
            customAlert.style.display = 'block';
        }
    });
    customAlertCloseBtn.addEventListener('click', function () {
        // Close the custom alert
        customAlert.style.display = 'none';
    });
});

function showLoginPage() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('homePage').style.display = 'none';
}

function showHomePage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}


    