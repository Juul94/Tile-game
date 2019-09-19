let canvas = document.querySelector('#canvas'); // VARIABEL MED VORES CANVAS FRA HTML'EN
let context = canvas.getContext('2d'); // VI SÆTTER VORES CANVAS TIL ID VIA 'getContext'

// VORES ARRAY (MAZE)
// -1 = SPILLER
//  0 = GROUND (DET SPILLEREN SKAL BEVÆGE SIG PÅ)
//  2 = WALLS (DET SPILLEREN IKKE SKAL RAMME IND I)
//  3 = MÅLSTREGEN

let maze = [
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2],
	[2,0,2,2,0,2,0,0,0,2,0,0,0,2,2,2,2,0,0,2],
	[2,0,0,0,0,2,0,2,2,2,2,2,2,2,2,0,2,0,0,2],
	[2,2,0,2,0,2,2,2,0,0,0,0,0,0,0,0,2,2,0,2],
	[2,0,0,2,0,0,0,2,2,0,2,2,2,0,2,0,0,2,0,2],
	[2,2,2,2,2,2,0,2,0,0,2,0,0,0,2,2,2,2,0,2],
	[2,0,0,0,0,2,0,2,0,2,2,2,2,0,2,0,0,0,0,2],
	[2,0,0,2,0,2,0,2,0,0,0,2,0,0,2,0,0,2,0,2],
	[2,0,0,2,0,0,0,2,2,2,0,2,0,2,2,2,2,2,0,2],
	[2,2,0,2,2,2,2,2,0,0,0,2,0,0,0,2,0,0,0,2],
	[2,0,0,2,0,0,0,2,0,2,2,2,2,2,0,2,2,0,2,2],
	[2,0,2,2,0,2,0,2,0,2,0,0,0,2,0,2,0,0,3,2],
	[2,0,0,0,0,2,0,0,0,2,0,2,0,2,0,2,2,2,2,2],
	[2,0,2,2,2,2,0,2,0,0,0,2,0,2,0,0,0,0,0,2],
	[2,2,2,0,0,0,0,2,2,2,2,2,0,0,0,2,2,2,0,2],
	[2,0,0,0,2,2,2,2,0,0,0,2,2,2,0,2,0,0,0,2],
	[2,0,2,2,2,0,0,0,0,2,0,0,0,2,0,2,0,2,2,2],
	[2,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,-1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

// VI LAVER OG GEMMER ALLE VORES VARIABLER DA DE SKAL BRUGES MANGE GANGE
var x = 0;
var y = 0;
var tileSize = 25;
var tilePosition = 25;
var player = -1;
var playerStartPos = {y:9,x:9};

function grid() {
	
	// HVIS VORES MAZE (LÆNGDE) ER STØRRE END Y, UDFØRES DETTE
	for(y = 0; y < maze.length; y++) {

		// HVIS VORES MAZE (LÆNGDE) ER STØRRE END X, INKLUDERET Y, UDFØRES DETTE
		for(x = 0; x < maze[y].length; x++) {

			// HVIS VORES MAZE INDEHOLDER ET TAL SOM ER '-1' UDFØRES DETTE - I VORES TILFÆLDE ER -1 SPILLEREN
			if(maze[y][x] === -1) {
				
				player = {y,x}; // KOORDINATOR FOR PLAYER
				// console.log(player.y + " " + player.x); // UDSKRIVER SPILLERENS KOORDINATOR FOR HVER GANG DER FLYTTES
				
				/**
					NEDENFOR ER ET FORSØG PÅ AT SKIFTE FARVEN UD MED ET BILLEDE. MEN DET VAR DESVÆRRE IKKE LIGE TIL..
				
				// CODE BELOW SHOULD SHOW MARIA AT POS: 9,9 (BOTTOM RIGHT CORVER)
				// BUT IN MY RECT I CANT ONLY HARDCORE VALUES AND NOT USE MY Y AND X AS IN MY BLOCK HAVE. EXAMPLE: (y * tilePosition, x * tilePosition, tileSize, tileSize)
				var background = new Image();
				background.src = "mario.png";
				
				background.onload = function () {
					context.fillStyle = background;
					context.fillRect(y * tilePosition, x * tilePosition);
					
					//context.drawImage(background, 450, 450);
					
				};
				
				**/
				
				// VI LAVER EN BLOCK DER ER GRØN, DER ER SPILLEREN OG SÆTTER DENS POSITION ALT EFTER HVAD VI HAR I VORES ARRAY (MAZE)
				context.fillStyle = "#004be8";
				context.fillRect(y * tilePosition, x * tilePosition, tileSize, tileSize);

				
			}
			
			// HVIS VORES MAZE INDEHOLDER ET TAL SOM ER '0' UDFØRES DETTE - I VORES TILFÆLDE ER 0 = GRUNDEN MAN KAN GÅ PÅ
			else if(maze[y][x] === 0) {
				context.fillStyle = "white";
				context.fillRect(y * tilePosition, x * tilePosition, tileSize, tileSize);
			}

			// HVIS VORES MAZE INDEHOLDER ET TAL SOM ER '2' UDFØRES DETTE - I VORES TILFÆLDE ER 2 = WALLS, SOM MAN IKKE MÅ RAMME
			else if(maze[y][x] === 2) {
				
				/**
				
					SOM NÆVNT TIDLIGERE PRØVEDE JEG AT ÆNDRE BLOCKENE TIL BILLEDER. LYKKEDES DESVÆRRE IKKE. FIK KUN 1 BILLEDE UD.
					DER SKAL VIDST MEGET MERE TIL. MEN PRØVEDE DA.. :|
				
				var wall = new Image();
				wall.src = "wall.png";

				wall.onload = function () {
					
					context.drawImage(wall, y * tilePosition , x * tilePosition);
					
				};
				**/
				
				context.fillStyle = "#aa471f";
				context.fillRect(y * tilePosition, x * tilePosition, tileSize, tileSize);
				
			}

			// HVIS VORES MAZE INDEHOLDER ET TAL SOM ER '3' UDFØRES DETTE - I VORES TILFÆLDE ER 3 = MÅLSTREGEN
			else if(maze[y][x] == 3) {
				context.fillStyle = "black";
				context.fillRect(y * tilePosition, x * tilePosition, tileSize, tileSize);
			}
		}
	}
}

															// VORES EVEN/SWITCH DER UDFØRES NÅR MAN BENYTTER PIL-TASTERNE
window.addEventListener('keydown', function (event) {
	
	switch(event.keyCode) {
			
															// PILTAST: VENSTRE
		case 37:
			
															// HVIS: FELTET ER LEDIGT UDFØRES DETTE
			if(maze[player.y - 1][player.x] === 0) {
                maze[player.y - 1][player.x] = -1; 			// PLAYERS NYE POSITION
                maze[player.y][player.x] = 0; 				// PLAYERS GAMLE POSITION
				
				var audio_move = new Audio('move.mp3'); 	//EN VARIABEL HVOR VI GEMMER VORES LYD (NÅR SPILLEREN BEVÆGER SIG)
				audio_move.volume = 0.2; 					// VI SÆTTER VORES VOLUME NED PÅ FILEN SÅ DEN ER HALVERET (GRUNDET DEN VAR MEGET HØJ)
				audio_move.play(); 							// HER STARTER VI VORES LYDFIL VED AT BENYTTE ".play"
				
				grid(); 									// HER SIGER VI AT VORES 'grid' FUNCTION SKAL EKSEKVERES IGEN
		   	}
			
															// HVIS: FELTET IKKE ER LEDIGT = RESET PLAYERS POSITION 
			else if(maze[player.y - 1][player.x] === 2) {
				location.reload(); 							// VI RESETTER SPILLER VED AT LAVE EN PAGE REFRESH
		   	}
			
		break;
		
															// PILTAST: OP
		case 38:
			
															// HVIS: FELTET ER LEDIGT UDFØRES DETTE
			if(maze[player.y][player.x - 1] === 0) {
                maze[player.y][player.x - 1] = -1; 			// PLAYERS NYE POSITION
                maze[player.y][player.x] = 0; 				// PLAYERS GAMLE POSITION

				var audio_move2 = new Audio('move.mp3');	//EN VARIABEL HVOR VI GEMMER VORES LYD (NÅR SPILLEREN BEVÆGER SIG)
				audio_move2.volume = 0.2; 					// VI SÆTTER VORES VOLUME NED PÅ FILEN SÅ DEN ER HALVERET (GRUNDET DEN VAR MEGET HØJ)
				audio_move2.play(); 						// HER STARTER VI VORES LYDFIL VED AT BENYTTE ".play"
				
				grid(); 									// HER SIGER VI AT VORES 'grid' FUNCTION SKAL EKSEKVERES IGEN
		   	}
			
															// HVIS: FELTET IKKE ER LEDIGT = RESET PLAYERS POSITION 
			else if(maze[player.y ][player.x - 1] === 2) {
				location.reload(); 							// VI RESETTER SPILLER VED AT LAVE EN PAGE REFRESH
		   	}
			
		break;

															// PILTAST: HØJRE
		case 39:
			
															// HVIS: FELTET ER LEDIGT UDFØRES DETTE
			if(maze[player.y + 1][player.x] === 0) {
                maze[player.y + 1][player.x] = -1; 			// PLAYERS NYE POSITION
                maze[player.y][player.x] = 0; 				// PLAYERS GAMLE POSITION

				var audio_move3 = new Audio('move.mp3'); 	//EN VARIABEL HVOR VI GEMMER VORES LYD (NÅR SPILLEREN BEVÆGER SIG)
				audio_move3.volume = 0.2; 					// VI SÆTTER VORES VOLUME NED PÅ FILEN SÅ DEN ER HALVERET (GRUNDET DEN VAR MEGET HØJ)
				audio_move3.play(); 						// HER STARTER VI VORES LYDFIL VED AT BENYTTE ".play"
				
				grid(); 									// HER SIGER VI AT VORES 'grid' FUNCTION SKAL EKSEKVERES IGEN
		   	}
			
															// HVIS: FELTET IKKE ER LEDIGT = RESET PLAYERS POSITION 
			else if(maze[player.y + 1][player.x] === 2) {
				location.reload(); 							// VI RESETTER SPILLER VED AT LAVE EN PAGE REFRESH
		   	}

		break;
		
															// PILTAST: NED
		case 40:
			
															// HVIS: FELTET ER LEDIGT UDFØRES DETTE
			if(maze[player.y][player.x + 1] === 0) {
                maze[player.y][player.x + 1] = -1; 			// PLAYERS NYE POSITION
                maze[player.y][player.x] = 0; 				// PLAYERS GAMLE POSITION

				var audio_move4 = new Audio('move.mp3'); 	//EN VARIABEL HVOR VI GEMMER VORES LYD (NÅR SPILLEREN BEVÆGER SIG)
				audio_move4.volume = 0.2; 					// VI SÆTTER VORES VOLUME NED PÅ FILEN SÅ DEN ER HALVERET (GRUNDET DEN VAR MEGET HØJ)
				audio_move4.play(); 						// HER STARTER VI VORES LYDFIL VED AT BENYTTE ".play"
				
				grid(); 									// HER SIGER VI AT VORES 'grid' FUNCTION SKAL EKSEKVERES IGEN
		   	}
			
															// HVIS: FELTET IKKE ER LEDIGT = RESET PLAYERS POSITION 
			else if(maze[player.y ][player.x + 1] === 2) {
				location.reload(); 							// VI RESETTER SPILLER VED AT LAVE EN PAGE REFRESH
		   	}
						
															// HVIS MAN RAMMER DEN SORET BLOCK - VINDER MAN SPILLET, EN LYDFIL AFSPILLES OG MODAL POPPER OP
			else if(maze[player.y][player.x + 1] === 3) {
				
				var audio_win = new Audio('win.mp3');		//EN VARIABEL HVOR VI GEMMER VORES LYD (NÅR SPILLEREN BEVÆGER SIG)
				audio_win.play(); 							// HER STARTER VI VORES LYDFIL VED AT BENYTTE ".play"
				
				$('#exampleModal').modal('show'); 			// HER GØR VI VORES MODAL SYNLIG NÅR SPILLEREN RAMMER DEN SORTE BLOCK (MÅLSTREGEN)
			}
			
		break;
		
		default:
		break;
	}
		
 });

// HER SIGER VI AT VORES 'grid' FUNCTION SKAL EKSEKVERES
grid();

// VARIABEL TIL KNAPPEN TIL RESTART GAME
var btnRestart = document.querySelector("#restart_game");

// ET EVENT (CLICK) TIL KNAPPEN, DER RESTARTER GAMET
btnRestart.addEventListener("click", restartGame);

// FUNCTION TIL NÅR DER KLIKKES PÅ RESTART KNAPPEN
function restartGame() {
	location.reload(); // VI RESETTER SPILLET VED AT LAVE EN PAGE REFRESH
}

// FUNCTION DER SKJULER VORE MODAL HELE TIDEN (INDTIL SPILLEREN VINDER)
function gameCompleted() {
	$('#exampleModal').modal('hide');
}

// FUNCTION TIL AT SPILLE GAMETS BAGGRUNDSMUSIK
function bgMusic() {
	var audio_bgMusic = new Audio('bgmusic.mp3');
	audio_bgMusic.play();
}

// EKSEKVERING AF MUSIK FUNCTION
bgMusic();

// EKSEKVERING AF MODAL (SKJUL) FUNCTION
gameCompleted();

