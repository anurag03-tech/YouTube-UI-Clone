
// side bar menu hide
var menuIcon = document.querySelector("#side_bar_main_icon");
var sideBar = document.querySelector(".side_bar");
var contentBox = document.querySelectorAll(".side_bar_content_box");
var content = document.querySelectorAll(".side_bar_content");
var smallSize = document.querySelectorAll(".side_bar_icon_head");
var hidebox = document.querySelectorAll(".side_bar_content_box");
var hidecontent = document.querySelectorAll(".side_bar_content");
var expBody = document.querySelector(".body_box");

menuIcon.addEventListener("click", function () {
    expBody.classList.toggle("body_box_exp");
    sideBar.classList.toggle("side_bar_wp");
  for (var i = 0; i <= 5; i++) {
    content[i].classList.toggle("side_bar_content_wp");
    smallSize[i].classList.toggle("side_bar_icon_head_wp");
    if(i==5){
        hidecontent[i].classList.toggle("side_bar_content_box_wp_hide");
    }
  }
  for (var i = 0; i < 2; i++) {
    contentBox[i].classList.toggle("side_bar_content_box_wp");
  }
  for (var i = 2; i < 6; i++) {
    hidebox[i].classList.toggle("side_bar_content_box_wp_hide");
    
  }

});

/*


        var video = document.getElementById("myVideo");

        function playVideo() {
            video.play();
        }

        function pauseVideo() {
            video.pause();
        }*/

function playVideo(container) {
    const video = container.querySelector('#myVideo');
    const thumbnail = container.querySelector('#thumbnail');

    video.style.display = 'block';
    thumbnail.style.display = 'none';
    video.play();
}

function pauseVideo(container) {
    const video = container.querySelector('#myVideo');
    const thumbnail = container.querySelector('#thumbnail');

    video.style.display = 'none';
    thumbnail.style.display = 'block';
    video.pause();
}



// shuffle home page video

function shuffleElements(container) {
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[(Math.random() * i) | 0]);
    }
  }

  // Get the container element
  const container = document.getElementById('body_main_content');

  // Shuffle the .card elements
  shuffleElements(container);






  //search 



  document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const cards = document.querySelectorAll(".card");

        function filterCards(searchQuery) {
            searchQuery = searchQuery.toLowerCase();
            cards.forEach((card) => {
                const headingContent = card.querySelector(".video_heading_content").textContent.toLowerCase();

                if (headingContent.includes(searchQuery)) {
                    card.style.display = "block"; // Show matching cards
                } else {
                    card.style.display = "none"; // Hide non-matching cards
                }
            });
        }

        const searchForm = document.getElementById("searchForm");

        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const searchQuery = searchInput.value;
            filterCards(searchQuery);
        });

        searchInput.addEventListener("input", function () {
            const searchQuery = searchInput.value;
            filterCards(searchQuery);
        });
    });



    //card filter 

