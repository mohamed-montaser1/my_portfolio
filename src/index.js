import"./sass/style.scss";import"./validation";import"bootstrap/dist/css/bootstrap.min.css";import"bootstrap/dist/js/bootstrap.min";import"jquery/dist/jquery.min";import"popper.js/dist/popper.min";import"@fortawesome/fontawesome-free/css/all.min.css";import"@fortawesome/fontawesome-free/js/all.min";import s from"aos";import"aos/dist/aos.css";s.init({easing:"linear",delay:0,duration:500});let nav_links=document.querySelectorAll(".navbar ul li a");nav_links.forEach(s=>{s.onclick=function(){nav_links.forEach(s=>{s.classList.remove("active")}),this.classList.add("active")}});var lis=document.querySelectorAll(".front-back li");lis.forEach(function(s){s.onclick=function(){lis.forEach(function(s){s.classList.remove("active")}),this.classList.add("active");let s=document.querySelector(".skills .container");"FRONT"===this.innerText?s.innerHTML=`
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
            <p>90%</p>
          </div>
          <div class="skill-bar">
            <span data-val="90%"></span>
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
            <h4>NPM & <span>W</span>EBPACK</h4>
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
    </div>
      `:"BACK"===this.innerText&&(s.innerHTML=`
      <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="skill">
          <div class="skills-header">
            <h4>NODE <span>J</span>S</h4>
            <p>88%</p>
          </div>
          <div class="skill-bar">
            <span data-val="88%"></span>
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
            <p>90%</p>
          </div>
          <div class="skill-bar">
            <span data-val="90%"></span>
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
            <h4>NPM</h4>
            <p>98%</p>
          </div>
          <div class="skill-bar">
            <span data-val="98%"></span>
          </div>
        </div>
      </div>
    </div>
      `);let l=document.querySelectorAll(".skill-bar span");setTimeout(()=>{l.forEach(s=>{s.style.width=s.dataset.val})},100)}});let skillsSpans=document.querySelectorAll(".skill-bar span");setInterval(()=>{window.scrollY>=2700&&skillsSpans.forEach(s=>{s.style.width=s.dataset.val})},1);let toggle_mode=document.querySelector(".toggle-mode");var mode_status=!1;toggle_mode.addEventListener("click",function(s){mode_status?mode_status&&(document.body.classList.add("light"),document.body.classList.remove("dark"),toggle_mode.innerHTML='<i class="fa-regular fa-sun"></i>',mode_status=!1):(document.body.classList.add("dark"),document.body.classList.remove("light"),toggle_mode.innerHTML='<i class="fa-regular fa-moon"></i>',mode_status=!0)});let work_filtered_list=document.querySelectorAll("#work-filter li"),work_column=Array.from(document.querySelectorAll(".work .container .row .col-sm-12"));work_filtered_list.forEach(s=>{s.onclick=function(){work_filtered_list.forEach(s=>{s.classList.remove("active")}),this.classList.add("active"),"ALL"==this.innerText?work_column.forEach(s=>{s.style.opacity="1",s.style.position="relative",s.style.zIndex="11111",el.style.height="fit-content",console.log(s)}):"REACT"==this.innerText?(work_column.forEach(s=>{s.style.opacity="0",s.style.height="0"}),work_column.filter(s=>s.classList.contains("react")).map(s=>{s.style.position="relative",s.style.opacity="1",s.style.zIndex="11111",s.style.height="fit-content"})):"(HTML, CSS, JS)"==this.innerText?(work_column.forEach(s=>{s.style.opacity="0",s.style.height="0"}),work_column.filter(s=>s.classList.contains("html")).map(s=>{s.style.opacity="1",s.style.zIndex="11111",s.style.height="fit-content"})):"BOOTSTRAP"==this.innerText&&(work_column.forEach(s=>{s.style.opacity="0",s.style.height="0",s.style.position="absolute"}),work_column.filter(s=>s.classList.contains("bootstrap")).map(s=>{s.style.opacity="1",s.style.zIndex="11111",s.style.position="relative",s.style.height="fit-content"}))}});let ghButton=document.querySelector(".see-more");ghButton.onclick=function(){window.location.href="http://github.com/mohamed-montaser1/"};let year=document.querySelector("#year");year.innerHTML=` ${new Date().getFullYear()}`;let layer=document.querySelector(".overview-layer-navbarnav"),navbar_toggler=document.querySelector(".navbar .navbar-toggler");navbar_toggler.addEventListener("click",s=>{layer.style.display="block",setTimeout(()=>{layer.style.opacity="0.3"},10),document.querySelector(".navbar .navbar-nav").style.right="0",document.querySelector("html").style.overflowY="hidden"}),document.body.onclick=function(s){s.target.classList.contains("overview-layer-navbarnav")&&(document.querySelector(".navbar .navbar-nav").style.right="-13rem",layer.style.opacity="0",setTimeout(()=>{layer.style.display="none"},100),document.querySelector("html").style.overflowY="visible")};