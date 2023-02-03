const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchbtn = body.querySelector(".search-box"),
      modeswitch = body.querySelector(".toggle-switch"),
      modetext = body.querySelector(".mode-text");
     
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close")
      });
      searchbtn.addEventListener("click", () =>{
        sidebar.classList.remove("close")
      });


      modeswitch.addEventListener("click", () =>{
        body.classList.toggle("dark")
 
        if(body.classList.contains("dark")){
            modetext.innertext = "Light Mode"
        }else{
            modetext.innertext = "Dark Mode"
        }
       });