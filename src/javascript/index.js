import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "loaders.css/loaders.min.css";
import "popper.js/dist/popper.min.js";
import "../sass/style.scss";
import "./remove_inspect"

let nav_links = document.querySelectorAll(".navbar ul li a");
nav_links.forEach((link) => {
  link.onclick = function () {
    nav_links.forEach((link) => {
      link.classList.remove("active");
    }),
      this.classList.add("active");
  };
});

var lis = document.querySelectorAll(".front-back li");
lis.forEach(function (s) {
  s.onclick = function () {
    lis.forEach(function (s) {
      s.classList.remove("active");
    }),
      this.classList.add("active");
    let s = document.querySelector(".skills .container");
    "FRONT" === this.innerText
      ? (s.innerHTML = `
      <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>HTML</h4>
            <p>100%</p>
          </div>
          <div class="skill-bar">
            <span data-val="100%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>CSS & <span>S</span>CSS</h4>
            <p>94%</p>
          </div>
          <div class="skill-bar">
            <span data-val="94%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>JAVASCRIPT & <span>R</span>EACT</h4>
            <p>96%</p>
          </div>
          <div class="skill-bar">
            <span data-val="96%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>BOOTSTRAP</h4>
            <p>98%</p>
          </div>
          <div class="skill-bar">
            <span data-val="98%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>NPM & <span>Y</span>ARN</h4>
            <p>97%</p>
          </div>
          <div class="skill-bar">
            <span data-val="97%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>GIT & <span>G</span>ITHUB</h4>
            <p>94%</p>
          </div>
          <div class="skill-bar">
            <span data-val="94%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>WEBPACK</h4>
            <p>100%</p>
          </div>
          <div class="skill-bar">
            <span data-val="100%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>API</h4>
            <p>100%</p>
          </div>
          <div class="skill-bar">
            <span data-val="100%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>HOSTING</h4>
            <p>90%</p>
          </div>
          <div class="skill-bar">
            <span data-val="90%"></span>
          </div>
        </div>
      </div>
    </div>
      `)
      : "BACK" === this.innerText &&
        (s.innerHTML = `
      <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>NODE <span>J</span>S</h4>
            <p>95%</p>
          </div>
          <div class="skill-bar">
            <span data-val="95%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>EXPRESS & <span>J</span>WT</h4>
            <p>94%</p>
          </div>
          <div class="skill-bar">
            <span data-val="94%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>MONGODB</h4>
            <p>97%</p>
          </div>
          <div class="skill-bar">
            <span data-val="97%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>API</h4>
            <p>98%</p>
          </div>
          <div class="skill-bar">
            <span data-val="98%"></span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>NPM & <span>Y</span>ARN</h4>
            <p>98%</p>
          </div>
          <div class="skill-bar">
            <span data-val="98%"></span>
          </div>
        </div>
      </div>
    </div>
      `);
    let l = document.querySelectorAll(".skill-bar span");
    setTimeout(() => {
      l.forEach((s) => {
        s.style.width = s.dataset.val;
      });
    }, 100);
  };
});
let skillsSpans = document.querySelectorAll(".skill-bar span");
let skills_section_top = document.querySelector(".skills").offsetTop;

setInterval(() => {
  window.scrollY >= skills_section_top - 300 &&
    skillsSpans.forEach((s) => {
      s.style.width = s.dataset.val;
    });
}, 1);
let toggle_mode = document.querySelector(".toggle-mode");
var mode_status = !1;
toggle_mode.addEventListener("click", function (e) {
  mode_status
    ? mode_status &&
      (window.localStorage.setItem("mood_status", false),
      document.body.classList.add("light"),
      document.body.classList.remove("dark"),
      (toggle_mode.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'),
      (mode_status = !1))
    : (window.localStorage.setItem("mood_status", true),
      document.body.classList.add("dark"),
      document.body.classList.remove("light"),
      (toggle_mode.innerHTML = '<i class="fa-regular fa-moon"></i>'),
      (mode_status = !0));
});
let work_filtered_list_btns = document.querySelectorAll("#work-filter li");
let work_cards = document.querySelectorAll("#work .container .row .col-sm-12");

for (var i = 0; i < work_filtered_list_btns.length; i++) {
  work_filtered_list_btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    work_cards.forEach((work_card) => {
      if (filter == "all") {
        work_card.style.display = "block";
      } else {
        if (work_card.classList.contains(filter)) {
          work_card.style.display = "block";
        } else {
          work_card.style.display = "none";
        }
      }
    });
  });
}

Array.from(work_filtered_list_btns).forEach((btn) => {
  btn.onclick = function () {
    Array.from(work_filtered_list_btns).forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
  };
});

let year = document.querySelector("footer p");
year.innerHTML = `COPYRIGHT&copy; MOHAMED MONTASER ${new Date().getFullYear()}. All rights
reserved`;

let layer = document.querySelector(".overview-layer-navbarnav"),
  navbar_toggler = document.querySelector(".navbar .navbar-toggler");
navbar_toggler.addEventListener("click", (s) => {
  (layer.style.display = "block"),
    setTimeout(() => {
      layer.style.opacity = "0.3";
    }, 10),
    (document.querySelector(".navbar .navbar-nav").style.right = "0"),
    (document.querySelector("html").style.overflowY = "hidden");
}),
  (document.body.onclick = function (s) {
    s.target.classList.contains("overview-layer-navbarnav") &&
      ((document.querySelector(".navbar .navbar-nav").style.right = "-13rem"),
      (layer.style.opacity = "0"),
      setTimeout(() => {
        layer.style.display = "none";
      }, 100),
      (document.querySelector("html").style.overflowY = "visible"));
  });

let navbar_links = Array.from(document.querySelectorAll(".navbar-nav li a"));

navbar_links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 991) {
      let layer = document.querySelector(".overview-layer-navbarnav");
      layer.click();
    }
  });
});

let to_top_button = document.querySelector(".arrow-top");

to_top_button.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

window.onscroll = function () {
  if (window.scrollY >= 1100) {
    to_top_button.style.right = "10px";
  } else {
    to_top_button.style.right = "-77px";
  }
};

let work_card = document.querySelectorAll(".work .card");

setInterval(() => {
  if (window.innerWidth <= 991) {
    for (let i = 0; i < work_card.length; i++) {
      work_card[i].addEventListener("mouseover", (e) => {
        let lord_icon = document.querySelectorAll(
          `.work .card .overlay a lord-icon`
        );
        lord_icon.forEach((icon) => {
          icon.setAttribute("trigger", "loop");
        });
      });
    }
  } else {
    let lord_icon = document.querySelectorAll(
      `.work .card .overlay a lord-icon`
    );
    lord_icon.forEach((icon) => {
      icon.setAttribute("trigger", "loop-on-hover");
    });
  }
}, 1);

// dark mode on press 'd' letter

document.body.addEventListener("keyup", (e) => {
  const elem = document.activeElement;
  if (!elem.dataset.custom) {
    if (e.key == "d") {
      document.querySelector(".toggle-mode").click();
    }
  }
});

let local_status = false;

document.querySelector(".toggle-mode").onclick = function () {
  if (window.innerWidth > 991) {
    if (!local_status) {
      document.querySelector(".hint").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".hint").style.opacity = "1";
      }, 100);

      setTimeout(() => {
        document.querySelector(".hint").style.opacity = "0";
      }, 800);

      setTimeout(() => {
        document.querySelector(".hint").style.display = "none";
      }, 1000);
    }
    local_status = true;
  }
};

let phoneNumber = document.querySelector(".phoneNumber");

phoneNumber.addEventListener("click", () => {
  window.navigator.clipboard.writeText("+20 1009641196").then(() => {
    alert("copied!");
  });
});

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("intersection");
      }
    });
  },
  {
    /* options */
    threshold: 0.2,
  }
);

let hidden = document.querySelectorAll(".hidden");

hidden.forEach((elem) => {
  observer.observe(elem);
});
