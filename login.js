document.addEventListener("DOMContentLoaded", function() {
    // Function to check the user on the login page
    function checkUser() {
        let nik = document.getElementById("nikname").value;
        let arry = ["Amr", "Abdullah", "Bader", "Hammad", "Muhibullah", "Maaz", "Asif", "Sumera", "TEST"];
        
        // Check if the entered name is in the array
        let index = arry.indexOf(nik);

        if (index !== -1) {
            // Store the message in localStorage
            localStorage.setItem('inviteMessage', "Looking forward to seeing you MR. " + arry[index]);
            window.location.href = "Invite.html";
        } else {
            alert("ACCESS DENIED");
        }
    }

    // Attach the checkUser function to the form's submit event
    if (document.getElementById('create_user')) {
        document.getElementById('button').addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default form submission
            checkUser();
        });
    }

    // Function to load the invite message on the invite page
    if (document.getElementById('invite')) {
        let message = localStorage.getItem('inviteMessage');
        if (message) {
            document.getElementById("invite").innerHTML = message;
        }
    }
});
