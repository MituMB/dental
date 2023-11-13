
const activePg = window.location.pathname;
console.log(activePg);
  document.querySelectorAll(".menubar .link a").forEach(link => {
    if(link.href?.includes(`${activePg}`)) {
      link.classList.add('active');
    }
  })

//fix navbar
const fixNav = () => {
  const scroll = document.documentElement.scrollTop;
  // console.log(scroll);
  if (scroll > 200) {
    $('nav .menubar').addClass('fixed-header');
  } else{
    $('nav .menubar').removeClass('fixed-header');
  }

  }
  window.addEventListener("scroll", fixNav);

//mobile menu toggle
  $(document).ready(function(){
    $(".mobile_menu_bar").click(function(){
      $(".menubar").toggle();
    });
  });


  //visible scrollToTop
  const scrollVisible = () => {
    const scroll = document.documentElement.scrollTop;
    // console.log(scroll);
    if (scroll > 200) {
      $('.scrollToTop').addClass('visible');
    } else{
      $('.scrollToTop').removeClass('visible');
    }
  };
  window.addEventListener("scroll", scrollVisible);

  //click scrollToTop
  const scrollTop = document.querySelector('.scrollToTop');
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollTop.addEventListener('click', scrollToTop)


  //tab

  const tabs = document.querySelector(".tabs");
  const tabsBtns = tabs.querySelectorAll(".tab_btn");
  const tabsContents = tabs.querySelectorAll(".tab_content");
  function displayCurrentTab(current) {
    for (let i = 0; i < tabsContents.length; i++) {
      tabsContents[i].style.display = (current === i) ? "block" : "none";
    }
  }
  displayCurrentTab(0);
  tabs.addEventListener("click", event => {
    console.log('click');
    if (event.target.className === "tab_btn") {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (event.target === tabsBtns[i]) {
          displayCurrentTab(i);
          break;
        }
      }
    }
  });


  // $(".select_btn .btn2").click(function() {
  //   $(".select_btn .btn2").addClass('button-clicked');
  // });

  document.querySelectorAll(".select_btn .btn2").forEach(btn => {
btn.addEventListener("click",function() {
  console.log('click');
  btn.classList.add('active')
}

)
  })


$( document ).ready(function() {
  $('#wrapper .btn2').click(function(){
    $(this).toggleClass('active');
  });
});

// document.querySelector(".btn2").addEventListener("click", function() {
//   console.log('click');
//   if (this.classList.contains("active")) {
//     this.classList.remove("active");
//   } else this.classList.add("active");
// });
