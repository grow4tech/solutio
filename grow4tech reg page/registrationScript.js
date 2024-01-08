document.addEventListener('DOMContentLoaded', function () {
    const regTypeSelect = document.getElementById('regType');
    const individualFields = document.getElementById('individualFields');
    const teamFields = document.getElementById('teamFields');
    const numMembersInput = document.getElementById('numMembers');
    const teamMembersContainer = document.getElementById('teamMembersContainer');
    const paymentInput = document.getElementById('payment');

    function createMemberFields(memberNumber) {
        return `
            <fieldset>
                <legend>Member ${memberNumber}</legend>
                <div><label for="name${memberNumber}">Name:</label><input type="text" id="name${memberNumber}" name="name${memberNumber}" required></div>
                <div><label for="college${memberNumber}">College/University:</label><input type="text" id="college${memberNumber}" name="college${memberNumber}" required></div>
                <div><label for="usn${memberNumber}">USN:</label><input type="text" id="usn${memberNumber}" name="usn${memberNumber}" required></div>
                <div><label for="semester${memberNumber}">Semester:</label><input type="number" id="semester${memberNumber}" name="semester${memberNumber}" required></div>
                <div><label for="branch${memberNumber}">Branch:</label><input type="text" id="branch${memberNumber}" name="branch${memberNumber}" required></div>
                <div><label for="dob${memberNumber}">Date of Birth:</label><input type="date" id="dob${memberNumber}" name="dob${memberNumber}" required></div>
                <div><label for="phone${memberNumber}">Phone Number:</label><input type="tel" id="phone${memberNumber}" name="phone${memberNumber}" required></div>
                <div><label for="email${memberNumber}">Email Address:</label><input type="email" id="email${memberNumber}" name="email${memberNumber}" required></div>
            </fieldset>`;
    }

    function updateTeamMembers(numMembers) {
        teamMembersContainer.innerHTML = '';
        for (let i = 1; i <= numMembers; i++) {
            teamMembersContainer.innerHTML += createMemberFields(i);
        }
    }

    function updatePayment() {
        const feePerParticipant = 500;
        const numParticipants = regTypeSelect.value === 'team' ? parseInt(numMembersInput.value, 10) : 1;
        paymentInput.value = `Rs. ${feePerParticipant * numParticipants}`;
    }

    regTypeSelect.addEventListener('change', function () {
        if (this.value === 'team') {
            individualFields.style.display = 'none';
            teamFields.style.display = 'block';
            updateTeamMembers(numMembersInput.value);
        } else {
            individualFields.style.display = 'block';
            teamFields.style.display = 'none';
        }
        updatePayment();
    });

    numMembersInput.addEventListener('change', function () {
        updateTeamMembers(this.value);
        updatePayment();
    });

    // Initialize with individual registration as default
    updatePayment();
});
