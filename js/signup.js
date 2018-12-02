$(function () {
	let users;
	let families;

	if (sessionStorage.getItem('users')) {
		users = JSON.parse(sessionStorage.getItem('users'));
	} else {
		users = [
			{ email: "ryan@ucsd.edu", code: "UCSD19", cred: { name: "Ryan", pwd: "123", avtr: 9, dob: "1996-12-06" } },
			{ email: "joy@ucsd.edu", code: "UCSD19", cred: { name: "Joy", pwd: "123", avtr: 5 } },
			{ email: "ying@ucsd.edu", code: "UCSD19", cred: { name: "Ying", pwd: "123", avtr: 3 } }
		];
		sessionStorage.setItem('users', JSON.stringify(users));
	}
	if (sessionStorage.getItem('families')) {
		families = JSON.parse(sessionStorage.getItem('families'));
	} else {
		families = [
			{ code: "UCSD19", members: ["ryan@ucsd.edu", "joy@ucsd.edu", "ying@ucsd.edu"] }
		];
		sessionStorage.setItem('families', JSON.stringify(families));
	}

	$('#signupBtn').click(function () {
		event.preventDefault(); // prevent PageReLoad

		let invalidInput = false;

		// check if fields are all filled in
		let signupEmail = $('#signup-email').val();
		let signupName = $('#signup-fmlyr').val();
		let signupPwd = $('#signup-password').val();
		let signupConfirmPwd = $('#signup-confirm-password').val();
		let signupFamilyCode = $('#signup-fmlycode').val();

		if (!signupEmail || !signupName || !signupPwd || !signupConfirmPwd) {
			alert("Please fill in all required fields.");
			invalidInput = true;
		}
		if (invalidInput) return;

		// check if password and password confirmation are equal
		if (signupPwd !== signupConfirmPwd) {
			alert("Password and Password Confirmation do not match.");
			invalidInput = true;
		}
		if (invalidInput) return;

		// family code
		if (!signupFamilyCode) {
			// if no input for family code, generate a unique code
			signupFamilyCode = generateCode();

			let familyInstance = {
				code: signupFamilyCode,
				members: [signupEmail]
			}

			families.push(familyInstance);
			sessionStorage.setItem('families', JSON.stringify(families));

		} else {
			let codeFound = false;
			families.forEach(f => {
				if (f.code == signupFamilyCode) {
					// add user to family if code exists
					codeFound = true;
					f.members.push(signupEmail);
					sessionStorage.setItem('families', JSON.stringify(families));
				}
			});
			// return immediately if code does not exist
			if (!codeFound) {
				alert("Family code invalid.");
				return;
			}
		}

		// check if email is registered
		users.forEach(user => {
			if (user.email === signupEmail) {
				alert("This email has been taken. Please register with a different email.");
				invalidInput = true;
			}
		});
		if (invalidInput) return;

		let user = {
			email: signupEmail,
			code: signupFamilyCode,
			cred: {
				name: signupName,
				pwd: signupPwd,
				avtr: 1 // default avatar is img/profile1.png
			}
		}

		users.push(user);
		sessionStorage.setItem('users', JSON.stringify(users));

		window.location = "./login.html";
	});
});