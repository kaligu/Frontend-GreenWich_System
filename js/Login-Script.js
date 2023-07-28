//user login button
$('#user-login-btn').click(function () {
    const username = $('#txtfld-username').val();
    const password = $('#txtfld-password').val();

    const studentdata = {username, password};

    const studentdatajson = JSON.stringify(studentdata);

    console.log(studentdatajson);

    // Call the function to send the AJAX request
    createAjaxReq(studentdatajson)
        .then(function (result) {
            // Handle the AJAX request success or failure here
            if (result) {
                    //generate alert
                    $("#mismatch-error").css("display", "none");

                    console.log('AJAX request succeeded');

                    // Redirect to the dashboard page
                    window.location.href = 'user-dashboard.html';

            } else {

                $("#mismatch-error").css("display", "block");

                console.error('*AJAX request failed');
            }
        })
        .catch(function (error) {

            $("#mismatch-error").css("display", "block");

            console.error('AJAX request failed:', error);
        });


});

createAjaxReq = (studentdatajson) => {
    return new Promise((resolve, reject) => {
        // AJAX request
        const http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if (http.readyState === XMLHttpRequest.DONE) {
                console.log("before state")
                if (http.status === 200) {
                    console.log("after state")
                    const response = http.responseText;
                    console.log(response)
                    if (response.includes("valid login")) {
                        resolve(true); // AJAX request succeeded
                    }
                } else {
                    resolve(false); // AJAX request failed
                }
            }
        };

        http.open("POST", "http://localhost:8080/greenwich/User-Login", true);
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(studentdatajson);
    });
}

// //user login button
$('#btnLogout').click(function () {
    window.location.href = 'pages/user-dashboard.html';
});

