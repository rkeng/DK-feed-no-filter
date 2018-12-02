function Feed(label, text, location, owner, time) {
  this.label = label;
  this.text = text;
  this.location = location;
  this.owner = owner;
  this.time = time;
}

var i;
var feeds;
if (sessionStorage.getItem('posts')) {
  feeds = JSON.parse(sessionStorage.getItem('posts'));

  // var feed1 = new Feed("Work", "Super frustrated today...", "DistanceKiller co.", "Joy","10/03/2018 20:45pm");
  // var feed2 = new Feed("Food", "I don't think it is a good restaurant, not recommended", "Chipotle @ Genesee Ave.", "Joy","10/03/2018 22:45pm");
  // var feed3 = new Feed("Travel", "I want to visit here, mom and dad", "France", "Ying","11/03/2018 20:22pm");
  // var feed4 = new Feed("Fun", "Playing my favorite spiderman game!!", "Ryan's sweet home", "Ryan","11/07/2018 20:07pm");
  // feeds = [feed1,feed2,feed3,feed4];

  for (var i = 0; i < feeds.length; i++) {
    var newCard = document.createElement("div");
    newCard.className = "col-sm-6";
    var feedId = feeds[i].uniqueId;
    newCard.setAttribute("id", feedId);
    var newCardHTML = '<div class="bootstrap-overrides">'
      + '<div class="card">'
      + '<div class="card-header">';
    if (feeds[i].category == "food") {
      newCardHTML += '<div class="food" id="' + feedId + '">Food</div>';
    }
    else if (feeds[i].category == "travel") {
      newCardHTML += '<div class="travel" id="' + feedId + '">Travel</div>';
    }
    else if (feeds[i].category == "work") {
      newCardHTML += '<div class="work" id="' + feedId + '">Work</div>';
    }
    else {
      newCardHTML += '<div class="fun" id="' + feedId + '">Fun</div>';
    }

    newCardHTML += '<div class="feed-loc" id="feed' + feeds[i].location + '-loc">' + feeds[i].location + '</div>'
      + '</div>'
      + '<div class="card-body">'
      + '<h5 class="card-title" id="feed' + feedId + '-owner">' + feeds[i].name + '</h5>'
      + '<hr>'
      + '<p class="card-text" id="' + feedId + '-text">' + feeds[i].content + '</p>';

    if (!feeds[i].imgData.endsWith("post.html")) newCardHTML += '<img class="img-fluid" src="' + feeds[i].imgData + '" alt="Post Image">';

    newCardHTML += '<div class="text-right" style="padding-bottom:10px; padding-top:10px">'
      + '<div class="card-text" id="' + feedId + '-time">' + feeds[i].date + '</div>'
      + '</div>';
    // + '<button class="btn btn-outline-success" style="margin-right:3px" type= "button"' + feedId + " >Like feed</button >";

    console.log(sessionStorage.getItem('loginStatus'));
    if (feeds[i].owner == JSON.parse(sessionStorage.getItem('loginStatus')).user.email) {
      newCardHTML += '<button class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModalCenter">Delete Post</button>';
      // <!-- Modal -->
      newCardHTML += '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
        + '<div class="modal-dialog modal-dialog-centered" role="document">'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + '	<h5 class="modal-title" id="exampleModalCenterTitle">Are you sure to delete this post?</h5>'
        + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        + '<span aria-hidden="true">&times;</span>'
        + '</button>'
        + '</div>'
        + '	<div class="modal-body">'
        + '	Once you&lsquo;ve deleted the post, you can revert back.'
        + '</div>'
        + '<div class="modal-footer">'
        + '<button class="btn btn-success" data-dismiss="modal" onclick="deleteFeed(\'' + feedId + '\')">Yes, delete it.</a>'
        + '<button class="btn btn-secondary" data-dismiss="modal">No, please keep</button>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
    }



    newCard.innerHTML = newCardHTML;
    var parent = document.getElementById("feedSection");
    parent.appendChild(newCard);
  }

  function deleteFeed(id) {
    var child = document.getElementById(id);
    child.parentNode.removeChild(child);
    feeds = feeds.filter(function (el) { return el.uniqueId != id; });
    sessionStorage.setItem('posts', JSON.stringify(feeds));
  }
}

var btns = document.getElementsByClassName("btn-secondary");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}