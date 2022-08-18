// HTML buttons maken
// Om gegevens op te roepen gebruik ik getElement
// gebruik de .map om er door movies te gaan
// Knoppen moeten iets doen als je er op klikt
//      addEventListener
// links toevoegen aan posters
// Grid maken

// Zoekbalk
//  Roep de zoekbalk op door getElement
// 
// let 
//
//
//
//
//







// Functie maken die de films toevoegt aan de HTML
let toegevoegdAanHTML = (movies) => {

    const verwijderdeMovies = document.querySelectorAll('li')

    verwijderdeMovies.forEach((verwijderMovie) => {
        verwijderMovie.remove()
    })

    // In deze functie, loop door alle films heen
    movies.forEach((movie) => {
        console.log("Dit wordt herhaalt:", movie)
        // Maak een nieuwe HTML element aan en voeg de film toe
        // Roep de addMoviesToDom op door getElement
        var ul = document.getElementById("addMoviesToDom");
        // Maak een nieuwe li aan
        var li = document.createElement("li");
        // Hang de li aan de ul
        ul.appendChild(li);



        ///////// Link gedeelte begin ////
        // Maak een nieuw a link element aan en noem het linkPoster
        var linkPoster = document.createElement("a") // Output: <a></a>


        // Zet er href achter en roep de movie.poster op
        linkPoster.href = movie.poster // href wordt toegevoegd aan de a, waardoor je erop kan klikken, waar het naartoe gaat
        //output: <a href="linknaam"></a>


        // Plak/hang hem aan de li die we eerder gemaakt hebben
        li.appendChild(linkPoster)






        ///////// Image gedeelte begin ////
        // Maak een nieuw img element aan
        var img = document.createElement("img")

        // Zet de src van dit element op movie.poster
        img.src = movie.poster;

        // Plak/hang de linkPoster aan de li die we eerder gemaakt hebben
        linkPoster.appendChild(img)

    });
};


// Functie die uitgevoerd moet worden bij het klikken op een knop
const functieOmTeVeranderen = (event) => {

    // Laat de waarde zien in de console:
    console.log("Je hebt geklikt op", event.target.value)
    let gefilterdeFilms;

    // Maak de logica voor de sortering
    if (event.target.value === 'nieuwe-films') {

        // Als de waarde van de indrukte knop x-men is, voer dan de volgende code uit:
        console.log("Laat nieuwe movies zien")
        // Voert een filter uit van voor movies.year biven dan 2018, en de waarde
        // wordt opgeslagen in de gefilterdeFilms
        let gefilterdeFilms = movies.filter((movies) => movies.year >= 2014);

        console.log(gefilterdeFilms)

        toegevoegdAanHTML(gefilterdeFilms);

        // controleert of dit de waarde princess heeft 
    } else if (event.target.value === 'princess') {

        // Als de waarde van de indrukte knop princess is, voer dan de volgende code uit:
        console.log("Laat princess movies zien")
        let princess = movies.filter((movies) => movies.title.includes("Princess"));

        console.log(princess)
        toegevoegdAanHTML(princess);


    } else if (event.target.value === 'avenger') {

        // Als de waarde van de indrukte knop princess is, voer dan de volgende code uit:
        console.log("Laat avenger movies zien")
        let avenger = movies.filter((movies) => movies.title.includes("Avenger"));

        console.log(avenger)
        toegevoegdAanHTML(avenger);

    } else if (event.target.value === 'x-men') {

        // Als de waarde van de indrukte knop princess is, voer dan de volgende code uit:
        console.log("Laat x-men movies zien")
        let xmen = movies.filter((movies) => movies.title.includes("X-Men"));

        console.log(xmen)
        toegevoegdAanHTML(xmen);

    } else if (event.target.value === 'batman') {

        // Als de waarde van de indrukte knop princess is, voer dan de volgende code uit:
        console.log("Laat Batman movies zien")
        let batman = movies.filter((movies) => movies.title.includes("Batman"));

        console.log(batman)
        toegevoegdAanHTML(batman);


        // doe dit ook voor alle andere radiobuttons
    }
};


// Pak de waarde van de knop en sla deze op in een waarde
const radiobuttons = document.querySelectorAll('[name = "films"]');

// Loop door elke radiobutton heen en voeg de addEventListener er aan toe
radiobuttons.forEach((radiobutton) => {
    console.log(radiobutton);
    radiobutton.addEventListener("click", functieOmTeVeranderen);
})