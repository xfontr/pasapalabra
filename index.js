const createDom = (i, abc) => {

    const mainCircle = "mainCircle"
    const circleSize = "325px";
    let letterDiv;
    let degrees = 0;

    letterDiv = document.createElement("div");
    degrees = (360 / abc.length) * i;

    letterDiv.className = "innerCircle";
    letterDiv.id = `letter${abc[i]}`;
    letterDiv.style = `transform:rotate(${degrees}deg) translate(${circleSize}) rotate(-${degrees}deg);`
    letterDiv.innerHTML = `<p>${abc[i]}</p>`;

    document.getElementById(mainCircle).appendChild(letterDiv);
}

const modifyDom = () => {

    const abc = "ghijklmnñopqrstuvwxyzabcdef".toUpperCase()

    for (let i = 0; i < abc.length; i++) {
        createDom(i, abc);
    };

};

const addKeypresses = () => {
    document.addEventListener("keypress", function (event) {
        event.key === "Enter" && enterPress();
    });
};

const enterPress = () => {

    let sendAnswer = document.getElementById("sendAnswer")
    let sendPasapalabra = document.getElementById("sendPasapalabra")

    if (!sendAnswer.disabled) {
        document.getElementById("sendAnswer").click()
    } else if (sendPasapalabra.innerText === "Siguiente") {
        document.getElementById("sendPasapalabra").click()
    }
}

const questions = {

    firstList: [ //0 -> Waiting // 1 -> Right // 2 -> Wrong // 3 -> Pasapalabra

        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

        { letter: "f", answer: "f\xE1cil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

        { letter: "j", answer: "jabal\xED", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },

        { letter: "l", answer: "lic\xE1ntropo", status: 0, question: "CON LA L. Hombre lobo" },

        { letter: "m", answer: "mis\xE1ntropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

        { letter: "r", answer: "rat\xF3n", status: 0, question: "CON LA R. Roedor" },

        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }],

    secondList: [

        { letter: "a", answer: "abaco", status: 0, question: "CONTIENE LA A. Instrumento utilizado en el siglo XIII para contar y realizar operaciones aritméticas" },

        { letter: "b", answer: "bañarse", status: 0, question: "CONTIENE LA B. Entrar en el agua para lavarse, para nadar o jugar" },

        { letter: "c", answer: "cazadora", status: 0, question: "CONTIENE LA C. Ropa de abrigo que cubre desde los hombros a la cintura" },

        { letter: "d", answer: "d\xE9bil", status: 0, question: "CONTIENE LA D. Que tiene poca fuerza, poco vigor o poca resistencia" },

        { letter: "e", answer: "edificio", status: 0, question: "CONTIENE LA E. Lugar que se usa para viviendas, oficinas, colegios, etc." },

        { letter: "f", answer: "futuro", status: 0, question: "CONTIENE LA F. Tiempo que viene después" },

        { letter: "g", answer: "gr\xFAa", status: 0, question: "CONTIENE LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro" },

        { letter: "h", answer: "hundir", status: 0, question: "CONTIENE LA H. Ir abajo dentro del agua" },

        { letter: "i", answer: "isla", status: 0, question: "CONTIENE LA I. Territorio que está rodeado de agua por todas partes" },

        { letter: "j", answer: "jugador", status: 0, question: "CONTIENE LA J. Persona que juega" },

        { letter: "k", answer: "kilo", status: 0, question: "CONTIENE LA K. Medida para pesar (equivale a mil gramos)" },

        { letter: "l", answer: "lata", status: 0, question: "CONTIENE LA L. Envase de metal" },

        { letter: "m", answer: "manzana", status: 0, question: "CONTIENE LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura" },

        { letter: "n", answer: "nunca", status: 0, question: "CONTIENE LA N. Ningún día o en ningún tiempo" },

        { letter: "ñ", answer: "año", status: 0, question: "CONTIENE LA Ñ. Tiempo que tarda la Tierra en dar una vuelta completa alrededor del Sol" },

        { letter: "o", answer: "oveja", status: 0, question: "CONTIENE LA O. Animal doméstico que tiene el cuerpo cubierto de lana" },

        { letter: "p", answer: "pasear", status: 0, question: "CONTIENE LA P. Andar por placer o para hacer ejercicio" },

        { letter: "q", answer: "queso", status: 0, question: "CONTIENE LA Q. Alimento sólido preparado con leche" },

        { letter: "r", answer: "resumen", status: 0, question: "CONTIENE LA R. Pocas palabras que  cuentan una historia más larga" },

        { letter: "s", answer: "sandalia", status: 0, question: "CONTIENE LA S. Calzado que no tapa todo el pie" },

        { letter: "t", answer: "techo", status: 0, question: "CONTIENE LA T. Parte de una habitación que está arriba" },

        { letter: "u", answer: "urgente", status: 0, question: "CONTIENE LA U. Que no puede esperar" },

        { letter: "v", answer: "veloz", status: 0, question: "CONTIENE LA V. Que es muy rápido" },

        { letter: "w", answer: "wallaby", status: 0, question: "CONTIENE LA W. Animal marsupial que habita en Australia. Se parece al canguro pero es de menor tamaño." },

        { letter: "x", answer: "xl", status: 0, question: "CONTIENE LA X. Cuarenta en números romanos" },

        { letter: "y", answer: "yegua", status: 0, question: "CONTIENE LA Y. Hembra del caballo" },

        { letter: "z", answer: "zarpar", status: 0, question: "CONTIENE LA Z. Empezar a navegar" }

    ],

    thirdList: [

        { letter: "a", answer: "alcachofa", status: 0, question: "CONTIENE LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha" },

        { letter: "b", answer: "botiqu\xEDn", status: 0, question: "CONTIENE LA B. Caja en la que se guardan medicinas" },

        { letter: "c", answer: "camilla", status: 0, question: "CONTIENE LA  C. Cama en la que se llevan de un lado a otro heridos o enfermos" },

        { letter: "d", answer: "dedicatoria", status: 0, question: "CONTIENE LA D. Palabras que se escriben y se dicen como regalo a alguien" },

        { letter: "e", answer: "empañar", status: 0, question: "CONTIENE LA E. Mancharse un cristal con el vapor de agua" },

        { letter: "f", answer: "f\xE1bula", status: 0, question: "CONTIENE LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja" },

        { letter: "g", answer: "guisar", status: 0, question: "CONTIENE LA G. Preparar alimentos cocinándolos con calor" },

        { letter: "h", answer: "hamaca", status: 0, question: "CONTIENE LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama" },

        { letter: "i", answer: "imperdible", status: 0, question: "CONTIENE LA I. Alfiler que se abrocha quedando su punta dentro de un gancho" },

        { letter: "j", answer: "jinete", status: 0, question: "CONTIENE LA J. Persona que monta a caballo" },

        { letter: "k", answer: "karaoke", status: 0, question: "CONTIENE LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla" },

        { letter: "l", answer: "litera", status: 0, question: "CONTIENE LA L. Mueble formado por dos camas puestas una encima de la otra" },

        { letter: "m", answer: "mayonesa", status: 0, question: "CONTIENE LA M. Salsa que se hace batiendo huevo y aceite" },

        { letter: "n", answer: "nuca", status: 0, question: "CONTIENE LA N. Parte posterior de la cabeza situada encima del cuello" },

        { letter: "ñ", answer: "teñir", status: 0, question: "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavadoS" },

        { letter: "o", answer: "orilla", status: 0, question: "CONTIENE LA O. Borde del mar, de un lago o de un río" },

        { letter: "p", answer: "planchar", status: 0, question: "CONTIENE LA P. Quitar las arrugar a una prenda" },

        { letter: "q", answer: "quitamanchas", status: 0, question: "CONTIENE LA Q. Producto natural o preparado que sirve para quitar manchas" },

        { letter: "r", answer: "racimo", status: 0, question: "CONTIENE LA R. Conjunto de uvas sostenidas en un mismo tallo" },

        { letter: "s", answer: "sembrar", status: 0, question: "CONTIENE LA S. Enterrar semillas en la tierra para que crezcan" },

        { letter: "t", answer: "taburete", status: 0, question: "CONTIENE LA T. Asiento sin respaldo" },

        { letter: "u", answer: "untar", status: 0, question: "CONTIENE LA U. Extender mantequilla sobre una rebanada de pan" },

        { letter: "v", answer: "vecino", status: 0, question: "CONTIENE LA V. Persona que vive en el mismo barrio o edificio que otra" },

        { letter: "w", answer: "wifi", status: 0, question: "CONTIENE LA W. Sistema de conexión inalámbrica para conectarse a internet" },

        { letter: "x", answer: "f\xE9nix", status: 0, question: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas" },

        { letter: "y", answer: "yunque", status: 0, question: "CONTIENE LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo" },

        { letter: "z", answer: "zumbido", status: 0, question: "CONTIENE LA Z. Sonido que producen algunos insectos como la abeja o el mosquito" }

    ],

    register: [],

};

const createList = () => {

    let chosenList;

    for (let i = 0; i < questions.firstList.length; i++) {
        chosenList = Math.floor(Math.random() * (4 - 1) + 1);
        if (chosenList === 1) {

            questions.register.push(questions.firstList[i]);

        } else if (chosenList === 2) {

            questions.register.push(questions.secondList[i]);

        } else if (chosenList === 3) {
            questions.register.push(questions.thirdList[i]);
        };
    };
};

/**/

const defaultSetup = () => {
    modifyDom()
    addKeypresses()
    document.getElementById("userInput").focus()
    createList();
}

defaultSetup()

/* TIMER */

const time = {
    seconds: 1000,
    maxTime: 120,
    currentTime: 0,
    pause: false,
    stop: false
};

const startTimer = () => {
    if (!time.stop && !time.pause) {
        setInterval(timeIncrease, time.seconds);
    };
};

const timeIncrease = () => {

    if (time.pause) return;

    time.currentTime += 1;
    logSeconds();
    styleTimer();
    if (time.currentTime === time.maxTime || time.stop === true) stopTimer(true);
};

const logSeconds = () => document.getElementById("timeLog").innerText = time.currentTime;

const styleTimer = () => {
    let circle = document.querySelector('circle');
    let timeDecrease = 472 / 120;
    circle.style = `stroke-dashoffset: ${time.currentTime * timeDecrease}`;
}

const stopTimer = (callTerminate) => {
    time.currentTime = 0;
    time.stop = true;
    if (callTerminate) terminateGame()
}

const timePause = (option) => time.pause = option;

/* FNC TO RETRIEVE OR CHANGE DATA */

const styleRightAnswer = (letter) => document.getElementById(`letter${letter}`).className = "innerCircle right";

const styleWrongAnswer = (letter) => document.getElementById(`letter${letter}`).className = "innerCircle wrong";

const setMainText = (text) => document.getElementById("currentQuestion").innerHTML = text;

const setCurrentLetter = (letter) => document.getElementById("currentLetter").innerText = letter;

const showCurrentScore = (score) => document.getElementById("scoreLog").innerText = `${score}`;

const showCorrectAnswer = (fail, correctAnswer) => {

    fail ? document.getElementById("currentQuestion").innerText = `¡Mal! La respuesta correcta era ${correctAnswer}`
        :
        document.getElementById("currentQuestion").innerText = `¡Muy bien! La respuesta correcta es ${correctAnswer}`;

}

const getInput = () => document.getElementById("userInput").value;

const sadDog = (result) => {
    if (result) {
        document.getElementById("outcomeImg").style = "display: block;"
    } else {
        document.getElementById("outcomeImg").style = "display: none;"
    }
}

/* GAME */

let gameData = {

    gameStarted: false,
    endGame: false,
    fullGame: false,

    currentLetter: -1,

    userName: "",

    currentQuestion: "",
    currentAnswer: "",
    currentAbcLetter: "",

    score: {
        wins: 0,
        fails: 0,
        total: 0,
    }

};

const setGame = () => {

    gameData.gameStarted = true;

    document.getElementById("sendPasapalabra").style = "display: flex;"
    document.getElementById("sendAnswer").innerHTML = `Responder <span style="margin-left: 2px;" class="material-symbols-outlined">subdirectory_arrow_right</span>`

}

const getUserName = () => {

    let name = getInput();

    if (!name || !isNaN(name) || name.length <= 2) {
        alert("Por favor, introduce un nombre válido.");
    } else {
        gameData.userName = name;
        return startOrSendAnswer();
    };
};

const changeUI = (option) => {

    document.getElementById("userInput").disabled = option;
    document.getElementById("sendAnswer").disabled = option;
    timePause(option)
    document.getElementById("sendPasapalabra").innerText = "Siguiente";

    if (!option) {
        sadDog(option)
        document.getElementById("sendPasapalabra").innerText = "Pasapalabra";
        document.getElementById("userInput").value = "";
        document.getElementById("userInput").focus();
    }

}

const startOrSendAnswer = () => { //onClick Empezar

    if (gameData.userName === "") {
        return getUserName();
    } else if (!gameData.gameStarted) {
        document.getElementById("userInput").value = ""; 
        setGame();
        setQuestion(0);
        return startTimer();
    } else {

        if (getInput().toLowerCase() === "pasapalabra") {
            document.getElementById("userInput").value = "";
            return pasapalabra()
        } else if (getInput() !== "") chkAnswer() ? correctAnswer() : wrongAnswer();

    }

    if (getInput() !== "") changeUI(true);

};

const chkAnswer = () => {

    if (getInput().toLowerCase() === gameData.answer) {
        return true;
    } else {
        return false;
    };
};

const setQuestion = (letter) => {

    chkStatus();

    if (gameData.fullGame === true || gameData.endGame === true) { return terminateGame() };

    const abc = "ghijklmnñopqrstuvwxyzabcdef";

    if (letter <= abc.length - 1) {
        displayQuestion(letter);
    } else {
        letter = 0;
        gameData.currentLetter = 0;
        displayQuestion(letter)
    };
};

const displayQuestion = (letter) => {

    const abc = "ghijklmnñopqrstuvwxyzabcdef";

    do {

        if (questions.register[letter].status === 3 || questions.register[letter].status === 0) {

            gameData.currentLetter = letter;
            gameData.answer = questions.register[letter].answer;
            setCurrentLetter(questions.register[letter].letter);
            setMainText(questions.register[letter].question);
            return
        }

        if (letter <= abc.length - 2) {
            letter++
        } else {
            letter = 0;
            gameData.currentLetter = 0;
        };

    } while (questions.register[letter].status !== 3 || questions.register[letter].status !== 0);
};

const chkStatus = () => {

    gameData.fullGame = true;

    for (let word in questions.register) {

        if (questions.register[word].status === 3 || questions.register[word].status === 0) {
            gameData.fullGame = false;
        };
    };

};

const correctAnswer = () => {

    let newStatus = 1;

    styleRightAnswer(questions.register[gameData.currentLetter].letter.toUpperCase());
    questions.register[gameData.currentLetter].status = newStatus;
    gameData.score.wins++;
    gameData.score.total++;
    showCurrentScore(gameData.score.total)

    showResults(true)

}

const wrongAnswer = () => {

    let newStatus = 2;

    styleWrongAnswer(questions.register[gameData.currentLetter].letter.toUpperCase());
    questions.register[gameData.currentLetter].status = newStatus;
    gameData.score.fails--;
    gameData.score.total--;
    showCurrentScore(gameData.score.total)

    showResults(false);

}

const showResults = (result) => {

    if (result) {
        setMainText(`<span style="color: rgb(27, 100, 27)"><strong>¡Muy bien!</strong></span> La respuesta correcta era ${gameData.answer}. Presiona Siguiente para seguir jugando.`)

    } else {
        setMainText(`<span style="color: rgb(142, 20, 20)"><strong>¡Mal!</strong></span> La respuesta correcta era ${gameData.answer}. Presiona Siguiente para seguir jugando.`)
        sadDog(true)
    }
};

const terminateGame = (callTimer) => {
    stopTimer(callTimer)
    hideElements()
    changeUI(true)
    showRanking()
};

const hideElements = () => {
    document.getElementById("userInput").style = "display: none;";
    document.getElementById("sendAnswer").style = "display: none;";
    document.getElementById("currentLetter").style = "display: none;";
    document.getElementById("sendPasapalabra").style = "display: none;";
    setMainText("<b>El juego ha finalizado.</b><br>Este es el ranking de los mejores jugadores:<br><br>");

}

const pasapalabra = () => {

    let buttonText = document.getElementById("sendPasapalabra").innerText;

    if (buttonText === "Siguiente") {
        changeUI(false);
        setQuestion(gameData.currentLetter + 1);
    } else {
        let newStatus = 3;
        setQuestion(gameData.currentLetter + 1);
        questions.register[gameData.currentLetter].status = newStatus;
    };

};

const rankingData = {
    randomUserNames: ["Aspect", "Kraken", "Bender", "Lynch", "BigPapa", "MadDog", "Bowser", "Bruise", "Psycho", "Cannon", "Ranger", "Clink", "Ratchet", "Cobra", "Reaper", "Colt", "Rigs", "Crank", "Ripley", "Creep", "Roadkill", "Daemon", "Ronin", "Diablo", "Doom", "Skinner"],
    userList: [],
    isUserRanked: false,
    randomRank() { return Math.floor(Math.random() * (20 - 13) + 13) }
}

const randomName = () => { return rankingData.randomUserNames[Math.floor(Math.random() * 25)] };

const randomScore = () => {
    randomWins = Math.floor(Math.random() * (23 - 10) + 10);
    randomFails = Math.floor(Math.random() * ((27 - randomWins) - 0) + 0);
    return [randomWins, randomFails];
}

const createRandomList = () => {

    let list = [];

    for (let i = 0; i < 10; i++) {
        let winsAndFails = randomScore();
        let wins = winsAndFails[0];
        let fails = winsAndFails[1];
        let totalScore = parseInt(wins - fails);
        list.push({ nombre: randomName(), correctas: wins, incorrectas: fails, puntos: totalScore });
    };

    list.sort((a, b) => b.puntos - a.puntos);

    return includeUser(list);
}

const includeUser = (list) => {

    let myTotalScore = gameData.score.total;
    let myWins = gameData.score.wins;
    let myFails = -gameData.score.fails;

    if (myTotalScore >= list[9].puntos) {
        rankingData.isUserRanked = true;
        list.pop();
    } else {
        rankingData.isUserRanked = false;
    };

    list.push({ nombre: gameData.userName, correctas: myWins, incorrectas: myFails, puntos: myTotalScore });
    list.sort((a, b) => b.puntos - a.puntos);
    rankingData.userList = list;
}

const rankingTable = () => {

    const table = document.getElementById("historial");

    let row, cell1, cell2, cell3, cell4, cell5 = ""

    for (let i = 9; i > -1; i--) {
        row = table.insertRow(1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);

        cell1.innerHTML = i + 1
        cell2.innerHTML = rankingData.userList[i].nombre;
        cell3.innerHTML = rankingData.userList[i].correctas;
        cell4.innerHTML = rankingData.userList[i].incorrectas;
        cell5.innerHTML = rankingData.userList[i].puntos;
    }

    if (rankingData.isUserRanked === false) addUserRank()
}

const addUserRank = () => {

    const table = document.getElementById("historial");

    let row, cell1, cell2, cell3, cell4, cell5 = ""

    row = table.insertRow(11);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);

    cell1.innerHTML = rankingData.randomRank();
    cell2.innerHTML = rankingData.userList[10].nombre;
    cell3.innerHTML = rankingData.userList[10].correctas;
    cell4.innerHTML = rankingData.userList[10].incorrectas;
    cell5.innerHTML = rankingData.userList[10].puntos;

}

const showRanking = () => {
    createRandomList();
    rankingTable();
    document.getElementById("historial").style = "display: block;";
};