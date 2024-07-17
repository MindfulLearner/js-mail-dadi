//per poter giocare prima bisogna inserire un email che nella white list dei CHAD SWAG
//
	//

	// interruttore = true perche cosi non parte la valutazione dell'email
let interrutore = true ;
// stiamo cercando di avere un listener su evento click del bottone
document.getElementById('bottone').addEventListener('click', function() {
	console.log("bottone cliccato!")
	//prendiamo il valore inserito da email
	let emailUtente = document.getElementById("email").value;
	console.log("ha preso email?" ,emailUtente);
	// COntrolliamo se email utente non e null e non ha 0 di lunghezza string
	if (typeof(emailUtente) != null && emailUtente.length !== 0) {
		console.log("guggi email piena");
		// dato che e' vera impostiamo interrutore false cosi da poter far passare i lprossimo processo
		interrutore = false;
	} else {
		console.log("not gucci email vuota");
	}
	// -----------------------------------------------------------------------------------------------------------
	// interruttore spento quindi partiamo con il control e inizio programma usiamo == per il controllo se usassimo = e solo per definire
	if (interrutore == false) {
		if (isNaN(emailUtente)){
			let whiteList = [
				"denzelCrocker@gmail.com",
				"michaelJordano@gmail.com",
				"giovaneRondo@gmai.com",
				"dimajosh1009@gmail.com"
			]
			for (let i = 0; i < whiteList.length; i++) {
				console.log(`email in buffer: ${whiteList}`);
				if (emailUtente == whiteList[i]) {
					console.log(`email ${emailUtente} accettata`);
					// js swagger
					// TRYHARD
					// allora come procede: si puo' usare un semplice n > n pero' volevo provare qualcosa di strano e creativo dato che oggi abbiamo fatto i gli array
					// questo secondo me e' il potere di C!!!!
						// Creo una funzione che mi permette attraverso d6Gen di generare un numero casuale da (0 a 5) + 1 perche cosi arriva a 6
					function d6Gen () {
						// metodo random per avere numeri rand 
						// RITORNIAMO MATH
						return Math.floor(Math.random() * 6);
					}
					// -----------------------------------------------------------------------------------------------------------
					// creo due variabile che conterranno i numeri random serviranno poi damettere in typedef per scegeliere l'array del numero
					// Generiamo numero casuale per josh "utente" li definisco in let potrebbe essere che in futuro dovessi mai cambiare il dado per josh o computer
					let joshD6Gen = d6Gen();
					console.log(`stampa debug player: ${joshD6Gen}`)
					// Generiamo numero casuale per computer "npc"
					let computerD6Gen = d6Gen();
					console.log(`stampa debug computer: ${computerD6Gen}`)
					// -----------------------------------------------------------------------------------------------------------
					// Creiamo un array per il dado, dato che usiamo un dado da 6 sappiamo che e' perforza 6 dati da 1 a 6
					const d6Dice = [1, 2, 3, 4, 5, 6] 
					// -----------------------------------------------------------------------------------------------------------
					//creo struct di josh 
					const player = {
						josh: null
					}
					//creo struct per computer
					const computer = {
						npc: null	
					}
					// -----------------------------------------------------------------------------------------------------------
					// associamo il numero random definendo nomi delle struct a josh e computer e mettendo come numero da scegliere nell'array il numero generato randomicamente

					player.josh = d6Dice[joshD6Gen];
					console.log(`struct josh random num: ${player.josh}`);
					computer.npc = d6Dice[computerD6Gen];
					console.log(`struct npc random num: ${computer.npc}`);
					// -----------------------------------------------------------------------------------------------------------
					// confrontiamo troviamo il numero piu alto e se pari
					if (player.josh === computer.npc){
						// swag
						console.log("i numeri sono uguali parita")
					} else if (player.josh > computer.npc){
						// swag
						console.log("josh e' maggiore piu alto di computer");
					} else {
						// pc vince siccome non e player maggior pc e nemmeno uguali trloro quindi
						console.log("compter e' maggiore di josh");
					}
					// -----------------------------------------------------------------------------------------------------------
				} else {
					console.log(`email ${emailUtente} rifiutata`);
				}
			}

		} else {
			console.log("Hai inserito un valore non valido");

		}

		// creiamo 2 quadrati per i nostri player e computer 
		function squareCreate() {
			//  definisco la creazione di square
			const square = document.createElement("div");
			// definisco lo stile
			square.style.width = "100px"
			square.style.height = "100px"
			square.style.display = "flex"
			square.style.justifyContent = "center"
			square.style.alignContent = "center"

		}

	}



});
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------


