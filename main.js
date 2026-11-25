document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById('card-template');
    const container = document.getElementById('container');
    function getYouTubeId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    return match ? match[1] : null;
}
    const days = [
    {
        day: 1,
        type: "story",
        image: "01-storia.png",
        text: "Il nostro viaggio di attesa del Natale inizia con...la storia di un Balletto Magico",
        link: "",
        download: "01-storia.pdf",
        audio: ""
    },
    {
        day: 2,
        type: "test",
        image: "", 
        text: "Completa il test per scoprire che stile hai!",
        link: "",
        download: "TEST-stile ballerina.pdf",
        audio: ""
    },
    {
        day: 3,
        type: "coloring",
        image: "03-colora.png",
        text: "Ecco il nostro amico Schiaccianoci. Coloralo per decorare, da regalare o farne un segnalibro che ti accompagni nella lettura!",
        link: "",
        download: "03-colora.pdf",
        audio: ""
    },
    {
        day: 4,
        type: "curiosity",
        image: "04-curiosita.png", 
        text: "…momento…CURIOSITA'! Conosciamo meglio la danza classica e la danza moderna",
        link: "",
        download: "curiosita CLASSICA.pdf",
        download2: "curiosita MODERNA.pdf", // due PDF: serve un campo in più
        audio: ""
    },
    {
        day: 5,
        type: "story",
        image: "05-bussel.png", 
        text: "E oggi scopriamo una ballerina, che in un certo senso, è vicina a noi.",
        link: "",
        download: "Storia BUSSEL.pdf",
        audio: ""
    },
    {
        day: 6,
        type: "recipe",
        image: "06-ricetta.png",
        text: "Per una dolce attesa…ci vuole una dolce ricetta!",
        link: "",
        download: "06-ricetta-stampini.pdf",
        audio: ""
    },
    {
        day: 7,
        type: "craft",
        image: "",
        text: "Crea l'origami della ballerina",
        link: "https://www.youtube.com/watch?v=BmVtxeNJLhA",
        download: "",
        audio: ""
    },
    {
        day: 8,
        type: "test",
        image: "08-ballerinese.png",
        text: "Oggi…tutti a scuola a imparare il \"BALLERINESE\"",
        link: "",
        download: "Test BALLERINESE.pdf",
        audio: ""
    },
    {
        day: 9,
        type: "video",
        image: "",
        text: "Mettetevi comodi…arriva la neve!",
        link: "https://www.youtube.com/watch?v=fLKhWl3tEkk&list=RDfLKhWl3tEkk&start_radio=1",
        download: "",
        audio: ""
    },
    {
        day: 10,
        type: "curiosity",
        image: "10-hiphop.png", 
        text: "…CURIOSITA'! Sei pronto a scoprire dove nasce il mondo dell'HIP HOP?",
        link: "",
        download: "curiosita HIPHOP.pdf",
        audio: ""
    },
    {
        day: 11,
        type: "video",
        image: "",
        text: "…mettetevi comodi, ascoltate questo brano …vi ricorda una storia di balletto? Quale?",
        link: "https://youtu.be/nAI_xI9wQnE?si=jFmjpJ9uwctn1Skp", 
        audio: ""
    },
    {
        day: 12,
        type: "test",
        image: "12-eroina.png", 
        text: "Ecco un altro test per scoprire quale personaggio ti rappresenta di più!",
        link: "",
        download: "TEST-ballerina sei.pdf",
        audio: ""
    },
    {
        day: 13,
        type: "recipe",
        image: "13-ricetta.png",
        text: "Ecco una dolce ricetta che arriva direttamente dal Paese dei Dolci",
        link: "",
        download: "13-ricetta2.pdf",
        audio: ""
    },
    {
        day: 14,
        type: "checklist",
        image: "14-borsone.png", 
        text: "Oggi… CHECK BORSONE: TUTTO PRONTO!?",
        link: "",
        download: "checklist borsone.pdf",
        audio: ""
    },
    {
        day: 15,
        type: "test",
        image: "15-cuore.png",
        text: "Cosa provi, e cosa ti fa battere il cuore quando balli?",
        link: "",
        download: "Scheda Cosa Mi Fa Battere il Cuore.pdf",
        audio: ""
    },
    {
        day: 16,
        type: "curiosity",
        image: "", 
        text: "…e con CURIOSITA' scopriamo il Tip Tap!",
        link: "https://www.youtube.com/watch?v=pyMU8O2B2Vs",
        download: "curiosita TIPTAP.pdf",
        audio: ""
    },
    {
        day: 17,
        type: "video",
        image: "",
        text: "Ecco la variazione della FATA CONFETTO tutta da guardare e imparare. Provaci anche tu!",
        link: "https://www.youtube.com/watch?v=zV1qLYukTH8&list=RDzV1qLYukTH8&start_radio=1",
        download: "",
        audio: ""
    },
    {
        day: 18,
        type: "music",
        image: "",
        text: "…cosa succederebbe se la FATA CONFETTO cambiasse stile? Ascolta e scatenati in questo MASHUP",
        link: "",
        download: "",
        audio: "18-mashup.mp3" // ? metti il nome vero della traccia
    },
    {
        day: 19,
        type: "craft",
        image: "19-biglietto.png",
        text: "Un piccolo pensiero da dare a chi vuoi bene",
        link: "",
        download: "19-biglietto.pdf",
        audio: ""
    },
    {
        day: 20,
        type: "curiosity",
        image: "20-curiosita.png", 
        text: "…momento…CURIOSITA'! Conosciamo e impariamo a fare JAZZ!",
        link: "https://www.youtube.com/watch?v=K_7oxKShjLY",
        download: "curiosita JAZZ.pdf",
        audio: ""
    },
    {
        day: 21,
        type: "test",
        image: "21-sala.png", 
        text: "Oggi tocca alla ballerina in sala!", // ? nel foglio non c'è testo
        link: "",
        download: "TEST- ballerina in sala.pdf",
        audio: ""
    },
    {
        day: 22,
        type: "curiosity",
        image: "22-contemporanea.png", 
        text: "…e infine è il momento della danza CONTEMPORANEA….CURIOSITAAAAAA'!",
        link: "",
        download: "curiosita CONTEMPORANEA.pdf",
        audio: ""
    },
    {
        day: 23,
        type: "test",
        image: "23-palco.png", 
        text: "Oggi la ballerina va sul palco!", // ? nel foglio non c'è testo
        link: "",
        download: "TEST- ballerina sul palco.pdf",
        audio: ""
    },
    {
        day: 24,
        type: "theatre",
        image: "24-teatro.png",
        text: "Ultimo giorno di attesa…scegli tu una musica, segui le indicazioni e inventa tu un balletto da far vedere a tutti durante le feste",
        link: "",
        download: "SCHEDA FINALE.pdf",
        audio: ""
    },
    {
        day: 25,
        type: "video",
        image: "",
        text: "BUON NATALE! e buona visione del balletto con tutta la famiglia",
        link: "https://www.youtube.com/watch?v=ya4DasxL47g&list=RDya4DasxL47g&start_radio=1",
        download: "",
        audio: ""
    }
]
    
    const quiz = {
        title: "Che ballerina sei a Natale?",
        questions: [
            {
                q: "",
                ans: [
                    {text: ""},
                    {text: ""},
                    {text: ""}
                ]
            }
        ],
        results: {
            a: {text: ""},
            b: {text: ""},
            c: {text: ""}
        }
    };
    
    for(let i = 1; i <= 25; i++){
         const d = days[i - 1];
        const clone = template.content.cloneNode(true);
        const dayBox = clone.querySelector('.day-box');
        const numberSpan = clone.querySelector('.card-number');
        const back = clone.querySelector('.card-back');
        dayBox.setAttribute('data-day', i);
        numberSpan.textContent = i;
        dayBox.addEventListener('click', () => {
            dayBox.classList.toggle('is-flipped');
        });
        container.appendChild(clone);
        const content = document.createElement("div");
        content.className = "cont";
        content.innerHTML=`<h2 class="text">${d.text}</h2>`;
        back.appendChild(content);
        if(d.image!=""){
            const img = document.createElement("img");
            img.src = d.image;
            img.className = "image"
            content.appendChild(img);
        }
        if(d.download!=""){
            const icon = document.createElement("img");
            icon.src = "icon-download.png";
            icon.className = "logo-download";
            const a = document.createElement("a");
            a.href = d.pdf;
            a.download = d.text + ".pdf";  
            a.addEventListener('click', (e) => e.stopPropagation());
            back.appendChild(a);
            a.appendChild(icon);
        };
        if (d.audio != "") {
            const player = new Audio(d.audio);
            player.preload = "none";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "audio-btn";
            btn.innerHTML = '<img src="icona-audio.png" alt="audio">';  

            btn.addEventListener("click", () => {
                if (player.paused) {
                    player.play();
                } else {
                    player.pause();
                }
                btn.addEventListener('click', (e) => e.stopPropagation());
            });
            back.appendChild(btn);
        }
        if (d.link != "") {
            const videoId = getYouTubeId(d.link);

            if (videoId) {
                const wrapper = document.createElement("div");
                wrapper.className = "video-wrapper";

                const iframe = document.createElement("iframe");
                iframe.src = "https://www.youtube.com/embed/" + videoId;
                iframe.title = "Video del giorno";
                iframe.loading = "lazy";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                wrapper.appendChild(iframe);
                content.appendChild(wrapper);
            }
        }
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    //const openedDaysFromBackend = [?];
    const dayBoxes = document.querySelectorAll('.day-box');

    dayBoxes.forEach(box =>{ 

        const dayNum = parseInt(box.getAttribute('data-day'));

        const boxDate = new Date(today.getFullYear(), 10, dayNum);
        boxDate.setHours(0, 0, 0, 0);

        if(boxDate.getTime() === today.getTime()){
            box.classList.add('today');
            box.classList.add('selected')
        }
        else if(boxDate > today){
            box.classList.add('locked')
        }
        else{
            /*if(openedDaysFromBackend.includes(dayNum)){
                box.classList.add('open');
            }
            else{
                box.classList.add('closed');
            }*/
           box.classList.add('closed');
        }
    });
});


