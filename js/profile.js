$(function () {
   // log off
   $('#logoffBtn').click(function () {
      sessionStorage.removeItem('loginStatus');
      location.href = "./login.html";
   })

   let users = JSON.parse(sessionStorage.getItem('users'));
   let families = JSON.parse(sessionStorage.getItem('families'));
   let loginStatus = JSON.parse(sessionStorage.getItem('loginStatus'));
   let curUser = Object.assign({}, loginStatus.user);;

   // populate profile input fields
   $('#email').val(curUser.email);
   $('#name').val(curUser.cred.name);
   $('#birthDate').val(curUser.cred.dob);

   // confirm profile update
   $('#confirmUpdate').click(function(){
      event.preventDefault(); // prevent PageReLoad

      let invalidInput = false;

      let avatarURL = $('#hide-image').attr('src');
      let profileName = $('#name').val();
      let profileDOB = $('#birthDate').val();
      let profilePwd = $('#newpass').val();
      let profileConfirmPwd = $('#confirmnewpass').val();
      let profileFamilyCode = $('#famCode').val();

      if (!profileName) {
         alert("You cannot leave your name blank.");
         invalidInput = true;
      }
      if (invalidInput) return;

      // update avatar
      if (avatarURL) {
         if (avatarURL == "./img/profile1.png") loginStatus.user.cred.avtr = 1;
         if (avatarURL == "./img/profile2.png") loginStatus.user.cred.avtr = 2;
         if (avatarURL == "./img/profile3.png") loginStatus.user.cred.avtr = 3;
         if (avatarURL == "./img/profile4.png") loginStatus.user.cred.avtr = 4;
         if (avatarURL == "./img/profile5.png") loginStatus.user.cred.avtr = 5;
         if (avatarURL == "./img/profile6.png") loginStatus.user.cred.avtr = 6;
         if (avatarURL == "./img/profile7.png") loginStatus.user.cred.avtr = 7;
         if (avatarURL == "./img/profile8.png") loginStatus.user.cred.avtr = 8;
         if (avatarURL == "./img/profile9.png") loginStatus.user.cred.avtr = 9;
      }

      // update name
      if (profileName != curUser.cred.name) {
         loginStatus.user.cred.name = profileName;
      }
      // update DOB
      if (profileDOB != curUser.cred.dob) {
         loginStatus.user.cred.dob = profileDOB;
      }
      // if user provided family code
      if (profileFamilyCode && profileFamilyCode != curUser.code) {
         // check if family code exists
         let codeExist = false;
         families.forEach(f => {
            if (f.code == profileFamilyCode) {
               codeExist = true;
            }
         })
         if (!codeExist) {
            alert("The family code you inserted does not exist.");
            return;
         }

         // update loginStatus
         loginStatus.user.code = profileFamilyCode;
         // update families: remove user from current family, and add to new family
         families.forEach(f => {
            if (f.code == curUser.code) {
               let index = f.members.indexOf(curUser.email);
				   if (index !== -1) f.members.splice(index, 1);
            }
            if (f.code == profileFamilyCode) {
               f.members.push(curUser.email);
            }
         });
      }

      // if user provided new password
      if (profilePwd) {
         if (profilePwd != profileConfirmPwd) {
            alert("Password and Password Confirmation do not match.");
            return;
         }
         // update loginStatus
         loginStatus.user.cred.pwd = profilePwd;
      }

      // update users
      for (var i in users) {
         if (users[i].email == curUser.email) {
            users[i] = loginStatus.user;
            break; //Stop this loop, we found it!
         }
      }

      sessionStorage.setItem('users', JSON.stringify(users));
      sessionStorage.setItem('families', JSON.stringify(families));
      sessionStorage.setItem('loginStatus', JSON.stringify(loginStatus));

      window.location = "./";
   })
});

$('.img-click').click(function () {
   $('#hide-image').attr('src', $(this).attr('src'));
   $('#hide-image').attr('style', "display:true");
});