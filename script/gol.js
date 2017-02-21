module.exports = function(){
	
	// Grid input of any uniform sized grid EG 3x3, 4x4, 5x4, etc. 

	function evolve(gridState){

		// Set start and end state to the initial grid - json stringify/parse prevents sharing of data

		var newState = JSON.parse(JSON.stringify(gridState));
		var endState = JSON.parse(JSON.stringify(gridState));;

		var cellCount = 0;

		newState.forEach(function(row, rIndex){ // loop each grid row

			row.forEach(function(column, cIndex){ // loop each grid column
				cellCount = 0;


				// top left of cell
					if(rIndex != 0 && cIndex != 0 && newState[rIndex - 1] != undefined){
						cellCount += parseInt(newState[rIndex - 1][cIndex - 1] == undefined ? 0 : newState[rIndex - 1][cIndex - 1]);
						// console.log('top left', cellCount);
					}

				// top middle of cell
				if(rIndex != 0 && newState[rIndex - 1] != undefined){
					cellCount += parseInt(newState[rIndex - 1][cIndex] == undefined ? 0 : newState[rIndex - 1][cIndex]);
						// console.log('top mid', cellCount);
				}
				// top right of cell
				if(rIndex != 0 && newState[rIndex - 1] != undefined){
						cellCount += parseInt(newState[rIndex - 1][cIndex + 1] == undefined ? 0 : newState[rIndex - 1][cIndex + 1]);
						// console.log('top right', cellCount);
				}

				// center left of cell
				if(cIndex != 0){
					cellCount += parseInt(newState[rIndex][cIndex - 1] == undefined ? 0 : newState[rIndex][cIndex - 1]);
						// console.log('left', cellCount);
				}

				// center right of cell

					cellCount += parseInt(newState[rIndex][cIndex + 1] == undefined ? 0 : newState[rIndex][cIndex + 1]);
						// console.log('right', cellCount);

				// bottom left of cell
				if(cIndex != 0 && newState[rIndex + 1] != undefined){
						cellCount += parseInt(newState[rIndex + 1][cIndex - 1] == undefined ? 0 : newState[rIndex + 1][cIndex - 1]);
						// console.log('bottom left', cellCount);
				}

				// bottom middle of cell

				if(newState[rIndex + 1] != undefined){
					cellCount += parseInt(newState[rIndex + 1][cIndex] == undefined ? 0 : newState[rIndex + 1][cIndex]);
						// console.log('bottom mid', cellCount);
				}

				// bottom right of cell

				if(newState[rIndex + 1] != undefined){
						cellCount += parseInt(newState[rIndex + 1][cIndex + 1] == undefined ? 0 : parseInt(newState[rIndex + 1][cIndex + 1]));
						// console.log('bottom right', cellCount);
				}

				// // top left of cell
				
				// if( (rIndex - 1) >= 0 ){
				// 	if( (cIndex - 1) >= 0 ){
				// 		cellCount += parseInt(newState[rIndex - 1][cIndex - 1] == undefined ? 0 : newState[rIndex - 1][cIndex - 1]);
				// 		console.log('top left', cellCount);
				// 	}
				// }

				// // top middle of cell
				
				// if( (rIndex - 1) >= 0 ){
				// 	cellCount += parseInt(newState[rIndex - 1][cIndex] == undefined ? 0 : newState[rIndex - 1][cIndex]);
				// 		console.log('top mid', cellCount);
				// }

				// // top right of cell

				// if( (rIndex - 1) >= 0 ){
				// 	if( (cIndex + 1) <= (row.length - 1) ){
				// 		cellCount += parseInt(newState[rIndex - 1][cIndex + 1] == undefined ? 0 : newState[rIndex - 1][cIndex + 1]);
				// 		console.log('top right', cellCount);
				// 	}
				// }

				// // center left of cell

				// if( (cIndex - 1) >= 0 ){
				// 	cellCount += parseInt(newState[rIndex][cIndex - 1] == undefined ? 0 : newState[rIndex][cIndex - 1]);
				// 		console.log('left', cellCount);
				// }

				// // center right of cell

				// if( (cIndex + 1) <= (row.length - 1) ){
				// 	cellCount += parseInt(newState[rIndex][cIndex + 1] == undefined ? 0 : newState[rIndex][cIndex + 1]);
				// 		console.log('right', cellCount);
				// }

				// // bottom left of cell

				// if( (rIndex + 1) <= (newState.length - 1) ){
				// 	if( (cIndex - 1) >= 0 ){
				// 		cellCount += parseInt(newState[rIndex + 1][cIndex - 1] == undefined ? 0 : newState[rIndex + 1][cIndex - 1]);
				// 		console.log('bottom left', cellCount);
				// 	}
				// }				

				// // bottom middle of cell

				// if( (rIndex + 1) <= (newState.length - 1) ){
				// 	cellCount += parseInt(newState[rIndex + 1][cIndex] == undefined ? 0 : newState[rIndex + 1][cIndex]);
				// 		console.log('bottom mid', cellCount);
				// }

				// // bottom right of cell

				// if( (rIndex + 1) <= (newState.length - 1) ){
				// 	if( (cIndex + 1) <= (row.length - 1) ){
				// 		// console.log(newState[rIndex + 1][cIndex + 1] == undefined ? 0 : parseInt(newState[rIndex + 1][cIndex + 1]))
				// 		cellCount += parseInt(newState[rIndex + 1][cIndex + 1] == undefined ? 0 : parseInt(newState[rIndex + 1][cIndex + 1]));
				// 		console.log('bottom right', cellCount);
				// 	}
				// }

				// new cell state calculation

				if(cellCount < 2){
					endState[rIndex][cIndex] = 0;
				}
				else if(cellCount > 3){
					endState[rIndex][cIndex] = 0;
				}
				else if(cellCount == 3){
					endState[rIndex][cIndex] = 1;
				}
				else if(newState[rIndex][cIndex] == 1){
					endState[rIndex][cIndex] = 1;
				}
				else {
					endState[rIndex][cIndex] = 0;
				}

			});
		});

		return endState;
	}

	return {
		evolve: evolve
	};
};
