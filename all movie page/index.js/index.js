onload();

function onload() {
    navbarcontainer();
    bannerpagecontainer();

}






function bannerpagecontainer() {
    let homepagecontainer = document.querySelector('.ddddddddddddd');

   
    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `
        <div class="image-content">
            <div class="img">
                <a href="${item.pagename}"><img src="${item.banner}" alt=""></a>
            </div>
            <div class="content-p">
                <a href="${item.pagename}"><p>${item.tittle}</p></a> 
            </div>
         </div>
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

        
        <button type="submit"><img class="search-icon" src="./all movie page/icon/search icon.png" alt=""></button>
    </form>`;

    
    homepagecontai.innerHTML = innerHtml;

}

