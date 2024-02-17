
// document.getElementById("yesButton").addEventListener("click", showAlert);

//             function showAlert() {
//                 alert("I love you too<3");
//             }

document.getElementById("yesButton").addEventListener("click", showGif);

    function showGif(){
        valentineImage.src = "https://media.tenor.com/CnP64S7lszwAAAAi/meme-cat-cat-meme.gif";
        var h1Element = document.getElementById("title");
        h1Element.textContent = "Happie Happie Happie!!!"
        valentineImage.style.width = '300px'
        valentineImage.style.height = '300px';

        yesButton.style.display = 'none';
        no.style.display = 'none';
        neverbutton.style.display = 'none';
    }

document.getElementById("neverbttn").addEventListener("click",showVideo);

    function showVideo() {
        
        window.location.href = "video.html?video=7C46DC896A07EA51C1D1BC94D71B03A1_video_dashinit.mp4";
        const params = new URLSearchParams(window.location.search);
        const videoFile = params.get('video');

// Set the video source
        document.getElementById('video').setAttribute('src', videoFile);

// Load and play the video
        const video = document.getElementById('video');
        video.load();
        video.play();
    }
            var neverbutton = document.querySelector(".hidden");    
            var yesButton = document.getElementById("yesButton");
            var no = document.getElementById("no");
            var valentineImage = document.getElementById("img");

            var noTexts = ["Are you sure?", "Please give me a chance pookie", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry"];
            var imageSources = ["https://pbs.twimg.com/media/Fyk7XMnaEAI3PsB.jpg", "https://media.tenor.com/BP70qe8X0J8AAAAe/crycat-crying-cat.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9e71v7IfFLLS_1CfY2it3an-6XH1uROjTfU5c88AwRL8aRkqAYDmoFrm9gpbUqwNameo&usqp=CAU", "https://i.pinimg.com/736x/cb/d8/3b/cbd83b534a315e809a9da2b8cd3ac3bf.jpg"];
            var count = 0;
            no.addEventListener("click", change);

            function change() {
                var randomIndex = Math.floor(Math.random() * noTexts.length);
                var randomText = noTexts[randomIndex];
                no.innerText = randomText;

                count++;
                if(count>5){
                        neverbutton.classList.remove('hidden');
                 }

                var i = Math.floor(Math.random() * 1000) + 1;
                var j = Math.floor(Math.random() * 700) + 1;
                no.style.left = i + "px";
                no.style.top = j + "px";

                var currentWidth = yesButton.offsetWidth;
                var currentHeight = yesButton.offsetHeight
                yesButton.style.width = currentWidth + 30 + "px";
                yesButton.style.height = currentHeight + 10 + "px";

                var randomImageIndex = Math.floor(Math.random() * imageSources.length);
                valentineImage.src = imageSources[randomImageIndex];}



