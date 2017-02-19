module.exports = function(){
	
	function evolve(gridState){

		// Set start and end state to the initial grid - json stringfy/parse prevents sharing of data

		var newState = JSON.parse(JSON.stringify(gridState));
		var endState = JSON.parse(JSON.stringify(gridState));;

		var cellCount = 0;

		newState.forEach(function(row, rIndex){ // loop each grid row

			row.forEach(function(column, cIndex){ // loop each grid column
				cellCount = 0;

				// top left of cell
				
				if(newState[rIndex - 1] !== undefined){
					if(newState[cIndex - 1] !== undefined){
						cellCount = cellCount + newState[rIndex - 1][cIndex - 1];
					}
				}

				// top middle of cell
				
				if(newState[rIndex - 1] !== undefined){
					cellCount = cellCount + newState[rIndex - 1][cIndex];
				}

				// top right of cell

				if(newState[rIndex - 1] !== undefined){
					if(newState[cIndex + 1] !== undefined){
						cellCount = cellCount + newState[rIndex - 1][cIndex + 1];
					}
				}

				// center left of cell

				if(newState[cIndex - 1] !== undefined){
					cellCount = cellCount + newState[rIndex][cIndex - 1];
				}

				// center right of cell

				if(newState[cIndex + 1] !== undefined){
					cellCount = cellCount + newState[rIndex][cIndex + 1];
				}

				// bottom left of cell

				if(newState[rIndex + 1] !== undefined){
					if(newState[cIndex - 1] !== undefined){
						cellCount = cellCount + newState[rIndex + 1][cIndex - 1];
					}
				}				

				// bottom middle of cell

				if(newState[rIndex + 1] !== undefined){
					cellCount = cellCount + newState[rIndex + 1][cIndex];
				}

				// bottom right of cell

				if(newState[rIndex + 1] !== undefined){
					if(newState[cIndex + 1] !== undefined){
						cellCount = cellCount + newState[rIndex + 1][cIndex + 1];
					}
				}

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
