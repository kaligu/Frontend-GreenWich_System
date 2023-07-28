document.querySelector(".user-login").style.display="block";
document.querySelector(".user-dashboard").style.display="none";
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
                document.querySelector(".user-login").style.display="none";
                document.querySelector(".user-dashboard").style.display="block";

                    //generate alert
                    $("#mismatch-error").css("display", "none");

                    console.log('AJAX request succeeded');

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
    document.querySelector(".user-login").style.display="block";
    document.querySelector(".user-dashboard").style.display="none";
});

$('#btnMemberForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#MemberForm").style.display="block";
    document.querySelector("#itemForm").style.display="none";
});

$('#btnItemForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="block";
    document.querySelector("#MemberForm").style.display="none";
});

$('#btnPlaceorderForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="block";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#MemberForm").style.display="none";
});

$('#btnOrderDetailsForm').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="none";
    document.querySelector("#OrderDetailsForm").style.display="block";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#MemberForm").style.display="none";
});

$('#logoName').click(function() {
    // Load the card.html file into the #card-container div
    document.querySelector("#DasboardForm").style.display="block";
    document.querySelector("#OrderDetailsForm").style.display="none";
    document.querySelector("#placeOrderForm").style.display="none";
    document.querySelector("#itemForm").style.display="none";
    document.querySelector("#MemberForm").style.display="none";
});

