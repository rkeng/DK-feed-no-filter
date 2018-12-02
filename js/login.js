$(function() {
   // get registered users
   let users;
   let families;
   if (sessionStorage.getItem('users')) {
      users = JSON.parse(sessionStorage.getItem('users'));
   } else {
		users = [
         {email: "ryan@ucsd.edu", code: "UCSD19", cred: {name: "Ryan", pwd: "123", avtr: 9, dob: "1996-12-06"}},
         {email: "joy@ucsd.edu", code: "UCSD19", cred: {name: "Joy", pwd: "123", avtr: 5}},
         {email: "ying@ucsd.edu", code: "UCSD19", cred: {name: "Ying", pwd: "123", avtr: 3}}
		];
		sessionStorage.setItem('users', JSON.stringify(users));
   }
   if (sessionStorage.getItem('families')) {
      families = JSON.parse(sessionStorage.getItem('families'));
   } else {
      families = [
         {code: "UCSD19", members:["ryan@ucsd.edu", "joy@ucsd.edu", "ying@ucsd.edu"]}
      ];
      sessionStorage.setItem('families', JSON.stringify(families));
   }
   if (!sessionStorage.getItem('posts')) {
      let posts = [
         {
            category:"work",
            content:"Working hard or hardly working?",
            imgData:"http://localhost:5500/post.html",
            date:"11/25/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":37.7749295,"lng":-122.41941550000001},
            location:"San Francisco",
            uniqueId:"1543202264478ryan@ucsd.eduSanFrancisco"
         },
         {
            category:"travel",
            content:"I want to visit this place someday!",
            imgData:"http://localhost:5500/post.html",
            date:"11/25/2018",
            owner:"ying@ucsd.edu",
            name:"Ying",
            position:{"lat":-33.8688197,"lng":151.20929550000005},
            location:"Sydney",
            uniqueId:"1543207290276ying@ucsd.eduSydney"
         },
         {
            category:"travel",
            content:"Good place to visit!",
            imgData:"http://localhost:5500/post.html",
            date:"11/25/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":41.878113,"lng":-87.629799},
            location:"Chicago",
            uniqueId:"1543202264478ryan@ucsd.eduChicago"
         },
         {
            category:"food",
            content:"Great food here!",
            imgData:"http://localhost:5500/post.html",
            date:"11/25/2018",
            owner:"ying@ucsd.edu",
            name:"Ying",
            position:{"lat":46.227638,"lng":2.213749},
            location:"France",
            uniqueId:"1543207290276ying@ucsd.eduFrance"
         },  
         {
            category:"fun",
            content:"Wow everything is so cheap",
            imgData:"http://localhost:5500/post.html",
            date:"11/25/2018",
            owner:"joy@ucsd.edu",
            name:"Joy",
            position:{"lat":25.0329636,"lng":121.56542680000007},
            location:"Taipei",
            uniqueId:"1543207512556joy@ucsd.eduTaipei"
         },
         {
            category:"travel",
            content:"I heard this is the largest city in the world!",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":22.572646,"lng":88.36389499999996},
            location:"Kolkata",
            uniqueId:"1543692190590ryan@ucsd.eduKolkata"
         },
         {
            category:"work",
            content:"On a business trip.",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":35.6894875,"lng":139.69170639999993},
            location:"Tokyo",
            uniqueId:"1543692247140ryan@ucsd.eduTokyo"
         },
         {
            category:"food",content:"trying some Indonesian food",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":-6.180495,"lng":106.82834149999996},
            location:"Jakarta",
            uniqueId:"1543692288456ryan@ucsd.eduJakarta"
         },
         {
            category:"fun",
            content:"Visiting a friend here!",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ying@ucsd.edu",
            name:"Ying",
            position:{"lat":24.8607343,"lng":67.00113639999995},
            location:"Karachi",
            uniqueId:"1543692332576ying@ucsd.eduKarachi"
         },
         {
            category:"travel",
            content:"I'm here for the pyramids",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ying@ucsd.edu",
            name:"Ying",
            position:{"lat":30.0444196,"lng":31.23571160000006},
            location:"Cairo",
            uniqueId:"1543692392888ying@ucsd.eduCairo"
         },
         {
            category:"fun",
            content:"Ah so crowded",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ying@ucsd.edu",
            name:"Ying",
            position:{"lat":23.810332,"lng":90.41251809999994},
            location:"Dhaka",
            uniqueId:"1543692468807ying@ucsd.eduDhaka"
         },
         {
            category:"work",
            content:"serious meeting",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"joy@ucsd.edu",
            name:"Joy",
            position:{"lat":55.755826,"lng":37.617299900000035},
            location:"Moscow",
            uniqueId:"1543692499824joy@ucsd.eduMoscow"
         },
         {
            category:"travel",
            content:"My Brazilian homies wya",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"joy@ucsd.edu",
            name:"Joy",
            position:{"lat":-23.5505199,"lng":-46.63330940000003},
            location:"Sao Paulo",
            uniqueId:"1543692560226joy@ucsd.eduSaoPaulo"
         },
         {
            category:"food",
            content:"best churros I've had in my life",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"joy@ucsd.edu",
            name:"Joy",
            position:{"lat":19.4326077,"lng":-99.13320799999997},
            location:"Mexico City",
            uniqueId:"1543692630345joy@ucsd.eduMexicoCity"
         },
         {
            category:"food",
            content:"YAY",
            imgData:"http://localhost:5500/post.html",
            date:"12/1/2018",
            owner:"ryan@ucsd.edu",
            name:"Ryan",
            position:{"lat":-26.2041028,"lng":28.047305100000017},
            location:"Johannesburg",
            uniqueId:"1543692662364ryan@ucsd.eduJohannesburg"
         }
      ];
      sessionStorage.setItem('posts', JSON.stringify(posts));
   }


   // get loginStatus
   let loginStatus;
   if (sessionStorage.getItem('loginStatus')) {
      loginStatus = JSON.parse(sessionStorage.getItem('loginStatus'));
   } else {
      loginStatus = {
         user: null
      }
   }

   $('#loginBtn').click(function () {

      event.preventDefault(); // prevent PageReLoad

      let ValidEmail = false;
      let ValidPassword = false;

      // check if email is registered
      users.forEach(user => {
         if (user.email === $('#emailInput').val()) {
            ValidEmail = true;
            if (user.cred.pwd === $('#passwordInput').val()) {
               ValidPassword = true;
               loginStatus.user = user;
            }
         }
      });

      if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
         sessionStorage.setItem('loginStatus', JSON.stringify(loginStatus));
         window.location = "./";
      }
      else {
         $('#loginError').removeClass('invisible').addClass('visible'); // show error msg
      }
   });
});