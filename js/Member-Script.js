//search member
$('#txtfld-member-search').on( "keypress", function() {

} );

//add member
$('#addMemberSaveBtn').click(function() {
    const membernic = $('#memberAddNIC').val();
    const membername = $('#memberAddName').val();
    const membertell = $('#memberAddTell').val();
    const memberaddress = $('#memberAddAddress').val();

    const newMember = {membernic, membername, membertell, memberaddress};

    const newMemberJson = JSON.stringify(newMember);

    console.log(newMemberJson);

// Call the function to send the AJAX request
    createAjaxReqMember(newMemberJson, "POST")
        .then(function (result) {
            // Handle the AJAX request success or failure here
            if (result.includes("new member added")) {
                $('#memberAddNIC').val('');
                $('#memberAddName').val('');
                $('#memberAddTell').val('');
                $('#memberAddAddress').val('');

                alert("New Member Added Successfully!");

                console.log('AJAX request succeeded');
            } else {

                alert("Try Again!");

                console.error('*AJAX request failed');
            }
        })
        .catch(function (error) {
            alert("Try Again!");

            console.error('AJAX request failed:', error);
        });

});

//update member
$('#updateMemberUpdateBtn').click(function() {
    const membernic = $('#memberUpdateNIC').val();
    const membername = $('#memberUpdateName').val();
    const membertell = $('#memberUpdateTell').val();
    const memberaddress = $('#memberUpdateAddress').val();

    const updateMember = {membernic, membername, membertell, memberaddress};

    const updateMemberJson = JSON.stringify(updateMember);

    console.log(updateMemberJson);

// Call the function to send the AJAX request
    createAjaxReqMember(updateMemberJson, "PUT")
        .then(function (result) {
            // Handle the AJAX request success or failure here
            if (result.includes("member updated")) {
                $('#memberUpdateNIC').val('');
                $('#memberUpdateName').val('');
                $('#memberUpdateTell').val('');
                $('#memberUpdateAddress').val('');

                alert("Member Updated Successfully!");

                console.log('AJAX request succeeded');
            } else {

                alert("Try Again!");

                console.error('*AJAX request failed');
            }
        })
        .catch(function (error) {
            alert("Try Again!");

            console.error('AJAX request failed:', error);
        });

});

//remove member
$('#removeMemberRemoveBtn').click(function() {
    const membernic = $('#memberRemoveNIC').val();
    const membername = $('#memberRemoveName').val();
    const membertell = $('#memberRemoveTell').val();
    const memberaddress = $('#memberRemoveAddress').val();

    const newMember = {membernic, membername, membertell, memberaddress};

    const newMemberJson = JSON.stringify(newMember);

    console.log(newMemberJson);

// Call the function to send the AJAX request
    createAjaxReqMember(newMemberJson, "DELETE")
        .then(function (result) {
            // Handle the AJAX request success or failure here
            if (result.includes("member removed")) {
                $('#memberRemoveNIC').val('');
                $('#memberRemoveName').val('');
                $('#memberRemoveTell').val('');
                $('#memberRemoveAddress').val('');

                alert("Member Removed Successfully!");

                console.log('AJAX request succeeded');
            } else {

                alert("Try Again!");

                console.error('*AJAX request failed');
            }
        })
        .catch(function (error) {
            alert("Try Again!");

            console.error('AJAX request failed:', error);
        });

});

createAjaxReqMember = (MemberJson, method) => {
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
                    resolve(response); // AJAX response return
                } else {
                    resolve(false); // AJAX request failed
                }
            }
        };

        http.open(method, "http://localhost:8080/greenwich/Member-Manage", true);
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(MemberJson);
    });
}