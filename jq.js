$(function(){

    let LinksInterface = `
    <div id="overlay2" class="crt"></div>  
    <script type="text/javascript">
        document.write(getImageTag());
    </script>
    <img id="Buttons" alt="links for listening" src="images/Buttons.svg">
    <img id="Cover" alt="the cover for our new single" src="images/sewn.webp">
    <div id="Listen">
        <a href="https://open.spotify.com/track/79FCD5DM93Zt3JdUrwbvKc?si=7e41ebbc485a41be">
            <button class="Transparent" id="Spotify" type="button">Click Me</button>
        </a>
        <a href="https://music.apple.com/us/album/sewn-single/1691009243">
            <button class="Transparent" id="Apple" type="button">Click Me</button>
        </a>
        <a href="https://www.youtube.com/watch?v=D7ePWQc7sY8&ab_channel=SweetFighter-Topic">
            <button class="Transparent" id="Youtube" type="button">Click Me</button>
        </a>
        <a href="https://tidal.com/browse/track/298329530">
            <button class="Transparent" id="Tidal" type="button">Click Me</button>
        </a>
        <a href="https://sweetfighter.bandcamp.com/releases">
            <button class="Transparent" id="Bandcamp" type="button">Click Me</button>
        </a>
    </div>
    <div id="Socials">
        <a id="sociallink" href="https://www.instagram.com/sweetfightertx/">Instagram</a><br>
        <a id="sociallink" href="https://tinyurl.com/2qnx4oba">Bopdrop</a><br>
        <a id="sociallink" href="https://discord.gg/wHJC9N3">Discord</a><br>
        <a id="sociallink" href="https://twitter.com/sweetfightertx">Twitter</a><br>
        <a id="sociallink" href="https://www.twitch.tv/sweetfightertx">Twitch</a><br>
    </div>
    `

    let ThreeDInterface = `
    <div id="overlay3"></div>
    <canvas class="webgl"></canvas>
    <script type="module" src="/main.js"></script>
    `

    $("#LinksInterface").on("click", function() {
        $('#Interface').empty();
        $('#Interface').html(LinksInterface);
    });

    $("#3dInterface").on("click", function() {
        $('#Interface').prepend($('<img>',{id:'Loading',class:'ComputerLoading',src:'images/ComputerLoading.webp'}))
        $("#Interface *:not('.ComputerLoading'):not('#overlay2')").remove();
        $('#Interface').prepend($('<img>',{class:'ComputerLoading',src:'images/ComputerFrame.webp'}))
        $('#Interface').append(ThreeDInterface);
        $('#Loading').remove()
        
    });
  
  });