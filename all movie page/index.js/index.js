onload();

function onload() {
    navbarcontainer();

}






function bannerpagecontainer() {
    let homepagecontainer = document.querySelector('.ddddddddddddd');

   
    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `
        `
    })
    homepagecontainer.innerHTML = innerHtml;

}


function navbarcontainer() {
    let homepagecontai = document.querySelector('.navigation');

   
    let innerHtml = `
    
   
    <input type="checkbox" class="menu-btn" id="menu-btn">
    <label for="menu-btn" class="menu-icon">
        <span class="nav-icon"></span>

    </label>

    
    <a href="index.html" class="logo">Mymovie
        <span>.hd</span>
    </a>

    
    <ul class="menu">
        <br><br><br><br><br><br><br><br><br>
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Adult</a></li>
        <li><a href="index.html">viralvideo</a></li>
        <li><a href="index.html">NewMovies</a></li>
        <li><a href="index.html">Contact</a></li>
    </ul>
    



    
    <form action="" class="search-box">
        
        <input type="text"name="Search" placeholder="Search Movie" class="search-input" required/>

        
        <button type="submit"><img class="search-icon" src="icon/search icon.png" alt=""></button>
    </form>`;

    
    homepagecontai.innerHTML = innerHtml;

}

