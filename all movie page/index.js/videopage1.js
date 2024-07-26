onload();


function onload() {
    bannerpage();

}




function bannerpage() {
    let homepagecontainer = document.querySelector('.video-container-full-screen');

   
    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `   
    <div class="video-titel-vv">
        <p>${item.tittle}!</p>
    </div> 
    <hr class="ssssss">
    <div class="video-titel-download">
        <div class="title"><p>Download ${item.smalltittle}!</p>
        </div>
        <div class="titel-2"><p>Whatch ${item.smalltittle}  <a href="#">MYMOVIE.hd</a> !</p>
        </div>
       
    </div>
    <div class="video-img-container"><img src="${item.banner}" class="video-main-img"></div>
    <div class="download-icon-container">
        <a href="${item.howtodownload}"><pre>{HOW TO DOWNLOAD MOVIE         }</pre><img class="download-icon" src="icon/DOWNLOAD.png" alt=""></a>

    </div>
    <hr class="hrtagbold">
    <div class="daitel-report">
        <h3>Movie Titele Tamabal</h3>
        <div class="detel-mavie">
            <p>iMDB Rating: <span class="blud"> 9.6/10 </span></p>
            <p>Genre: Comedy | Drama | History</p>
            <p>Stars: Song Kang-ho, Lim Soo-jung, Oh Jung-se</p>
            <p>Director: Kim Jee-woon</p>
            <p>Language: <span>Dual Audio [Hindi (ORG 5.1) + Korean]</span>/ ESubs</p>
            <p>Quality: <span>BluRay</span>1080p | 720p | 480p</p>
        </div>
    </div>

    <hr class="hrtagbold">

    <div class="screenshot-tag">
        
        <h3>: Screen-Shots :</h3>
    </div>
    <div class="screeshort">
        <img class="Screen-Shots-main" src="${item.screeshort1}" alt="">
        <img class="Screen-Shots-main" src="${item.screeshort2}" alt="">
        <img class="Screen-Shots-main" src="${item.screeshort3}" alt="">
        <img class="Screen-Shots-main" src="${item.screeshort4}" alt="">
        <img class="Screen-Shots-main" src="${item.screeshort5}" alt="">
        <img class="Screen-Shots-main" src="${item.screeshort6}" alt="">

        
    </div>


    <div class="download-and-watch-container">
            <h2>Download ${item.smalltittle} Movies HD !</h2>
    <h3>: DOWNLOAD LINKS :</h3>
 
    </div>
    <hr class="hrtagbold">
    <div class="download-and-watch-container">
        <a href="${item.videodownloadlink}"><h4>480p⚡ link</h4></a>
        

    </div>
    <hr class="hrtagbold">
    <div class="download-and-watch-container">
        <a href="${item.videodownloadlink}"><h4>720p Links </h4></a>
        

    </div>
    <hr class="hrtagbold">
    <div class="download-and-watch-container">
        <a href="${item.videodownloadlink}"><h4>1080p Links </h4></a>
        

    </div>
    <hr class="hrtagbold">

    <div class="download-and-watch-container">
        <a href="${item.watchonlinelink}"><h4>WATCH ONLiNE</h4></a>
        

    </div>
    <hr class="hrtagbold">


    <div class="movie-watch-trailor">
        <div class="download-and-watch-container">
            <h2> WATCH MOVIE TRAILOR HD !</h2>
            <h3>: WATCH TRAILOR HD :</h3>
        </div>
    </div>
    <div class="movie-watch-trailo">
    ${item.watchtrailor}

    </div>
    <div class="download-and-watch">
       
    </div>
   
    




        `
    })
    homepagecontainer.innerHTML = innerHtml;

}