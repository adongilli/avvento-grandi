document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById('card-template');
    const container = document.getElementById('container');
    function getYouTubeId(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
        console.log(match[1])
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
        download: "02-TEST-stile ballerina.pdf", // mancava 02- nel nome del file
        audio: ""
    },
    {
        day: 3,
        type: "coloring",
        image: "03-colora.png",
        text: "Ecco il nostro amico Schiaccianoci. Coloralo per decorare, da regalare o farne un segnalibro che ti accompagni nella lettura!",
        link: "",
        download: "03-colora.pdf", // Ti ho raddrizzato il file, cosi compare diritto
        audio: ""
    },
    {
        day: 4,
        type: "curiosity",
        image: "04-curiosita.png", 
        text: "…momento…CURIOSITA'! Conosciamo meglio la danza classica e la danza moderna",
        link: "",
        download: "04-curiosita CLASSICA.pdf", // anche qui mancava il numero 04- all'inizio dei files
        download2: "04-curiosita MODERNA.pdf", // due PDF: serve un campo in più
        audio: ""
    },
    {
        day: 5,
        type: "story",
        image: "05-bussel.png", 
        text: "E oggi scopriamo una ballerina, che in un certo senso, è vicina a noi.",
        link: "",
        download: "05-Storia BUSSEL.pdf", // anche qui mancava il numero 05- all'inizio del file
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
        download: "08-TEST-ballerinese.pdf", // mancava 08-
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
        image: "10-hiphop.png", // manca il file  
        text: "…CURIOSITA'! Sei pronto a scoprire dove nasce il mondo dell'HIP HOP?",
        link: "",
        download: "10-curiosita HIPHOP.pdf", // mancava 10-
        audio: ""
    },
    {
        day: 11,
        type: "video",
        image: "",
        text: "…mettetevi comodi, ascoltate questo brano …vi ricorda una storia di balletto? Quale?",
        link: "https://youtu.be/nAI_xI9wQnE?si=jFmjpJ9uwctn1Skp", 
        download: "", // avevi tralasciato il download, se non lo metti sotto tu testi se != '' ma essendo undefined ti metteva il pulsante per il download
        audio: ""
    },
    {
        day: 12,
        type: "test",
        image: "12-eroina.png", 
        text: "Ecco un altro test per scoprire quale personaggio ti rappresenta di più!",
        link: "",
        download: "12-TEST-ballerina sei.pdf", // mancava 12-
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
        download: "14-Checklist Borsone Perfetto.pdf", // mancava 14-
        audio: ""
    },
    {
        day: 15,
        type: "test",
        image: "15-cuore.png",
        text: "Cosa provi, e cosa ti fa battere il cuore quando balli?",
        link: "",
        download: "15-Scheda Cosa Mi Fa Battere il Cuore.pdf", // mancava 15-
        audio: ""
    },
    {
        day: 16,
        type: "curiosity",
        image: "", 
        text: "…e con CURIOSITA' scopriamo il Tip Tap!",
        link: "https://www.youtube.com/watch?v=pyMU8O2B2Vs",
        download: "16-curiosita TIPTAP.pdf", // mancava 16-
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
        //audio: "18-mashup.mp3" // ? metti il nome vero della traccia
        audio: "18-The Nutcracker REMIX.mp3"
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
        download: "20-curiosita JAZZ.pdf", // mancava 20-
        audio: ""
    },
    {
        day: 21,
        type: "test",
        image: "21-sala.png", 
        text: "Oggi tocca alla ballerina in sala!", // ? nel foglio non c'è testo
        link: "",
        download: "21-TEST-ballerina in sala.pdf", // c'era uno spazio di troppo nel nome
        audio: ""
    },
    {
        day: 22,
        type: "curiosity",
        image: "22-vestiti.png", // cera questo file ma non esiste ti ho messo il 22 che c'e' nei file "22-contemporanea.png", 
        text: "…e infine è il momento della danza CONTEMPORANEA….CURIOSITAAAAAA'!",
        link: "",
        download: "22-curiosita CONTEMPORANEA.pdf",
        audio: ""
    },
    {
        day: 23,
        type: "test",
        image: "23-palco.png", 
        text: "Oggi la ballerina va sul palco!", // ? nel foglio non c'è testo
        link: "",
        download: "23-TEST-ballerina sul palco.pdf", // c'era un spazio di troppo nel nome del file
        audio: ""
    },
    {
        day: 24,
        type: "theatre",
        image: "24-teatro.png",
        text: "Ultimo giorno di attesa…scegli tu una musica, segui le indicazioni e inventa tu un balletto da far vedere a tutti durante le feste",
        link: "",
        download: "24-SCHEDA FINALE.pdf",
        audio: ""
    },
    {
        day: 25,
        type: "video",
        image: "",
        text: "BUON NATALE! e buona visione del balletto con tutta la famiglia",
        link: "https://www.youtube.com/watch?v=ya4DasxL47g", // "https://www.youtube.com/watch?v=ya4DasxL47g&list=RDya4DasxL47g&start_radio=1",
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
    
    // Ti manca di salvare lo stato dei giorni aperti, non avendo il backend, puoi usare localStorage per salvare i giorni aperti. Ecco un esempio di come potresti fare:
    // Salva i giorni aperti in localStorage (il localStorage è un oggetto che permette di salvare dati nel browser dell'utente)
    // nel localStorage puoi salvare un array di numeri che rappresentano i giorni aperti, ad esempio: [1, 2, 3] significa che i giorni 1, 2 e 3 sono stati aperti.
    // usiamo JSON.parse perche nel localStorage i dati vengono salvati come stringhe, quindi dobbiamo convertirli in array.
    // la parte finale || [] serve a dire che se non ci sono giorni aperti salvati, allora l'array sarà vuoto.
    const openDays = JSON.parse(localStorage.getItem('openDays')) || [];


    for(let i = 1; i <= 25; i++){
        const d = days[i - 1];
        const clone = template.content.cloneNode(true);
        const dayBox = clone.querySelector('.day-box');
        const numberSpan = clone.querySelector('.card-number');
        const back = clone.querySelector('.card-back');
        dayBox.setAttribute('data-day', i);
        numberSpan.textContent = i;

        // Aggiungi la classe 'is-flipped' se il giorno è già aperto
        if (openDays.includes(i)) {
            dayBox.classList.add('is-flipped');
        } 
        // Aggiungi un event listener per aprire il giorno
        dayBox.addEventListener('click', () => {
            dayBox.classList.toggle('is-flipped');
            // Aggiorna la lista dei giorni aperti in localStorage
            if (dayBox.classList.contains('is-flipped')) {
                // aggiorno l'array openDays solo se il giorno non è già presente
                if (!openDays.includes(i))
                    openDays.push(i);
            } else {
                // rimuovo il giorno dall'array openDays
                // uso indexOf per trovare l'indice dell'elemento da rimuovere
                const index = openDays.indexOf(i);
                if (index > -1) {
                    // uso splice per rimuovere l'elemento dall'array tramite l'indice trovato
                    openDays.splice(index, 1);
                }
            }
            // Salvo l'array aggiornato in localStorage
            localStorage.setItem('openDays', JSON.stringify(openDays));
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
            // d.pdf non esiste si chiama d.download
            // a.href = d.pdf;
            a.href = d.download;
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
            btn.innerHTML = '<img src="play.svg" alt="audio">'; // ti ho cambiato la immagine con il play  

            btn.addEventListener("click", (evt) => {
                evt.stopPropagation() // ti ho aggiunto cosi non si chiude se fai click sull'icona, ti ho cancellato sotto perche lo avevi messo sbagliato
                if (player.paused) {
                    player.play();
                    btn.innerHTML = '<img src="stop.svg" alt="audio">';
                } else {
                    btn.innerHTML = '<img src="play.svg" alt="audio">';
                    player.pause();
                }
                // btn.addEventListener('click', (e) => e.stopPropagation()); // questo non va bene, ogni volta che premi aggiungi un listener click che poi si sofrappongono e non partono.
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
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
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


