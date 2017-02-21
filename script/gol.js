module.exports = function(){

	function evolve(gridState){

		// Set old and new state to the initial grid - json stringify/parse prevents sharing of data

		var oldState = JSON.parse(JSON.stringify(gridState));
		var newState = JSON.parse(JSON.stringify(gridState));

		var cellCount = 0;
		var invalidInput = false;

		oldState.forEach(function(row, rIndex){ // loop each grid row

			row.forEach(function(column, cIndex){ // loop each grid column
				cellCount = 0;

				if(column !== 1 && column !== '1' && column !== 0 && column !== '0' ){
					invalidInput = true;
					return false;
				}
				
				// top left of cell
				if(rIndex != 0 && cIndex != 0 && oldState[rIndex - 1] != undefined){
					cellCount += parseInt(oldState[rIndex - 1][cIndex - 1] == undefined ? 0 : oldState[rIndex - 1][cIndex - 1]);
				}

				// top middle of cell
				if(rIndex != 0 && oldState[rIndex - 1] != undefined){
					cellCount += parseInt(oldState[rIndex - 1][cIndex] == undefined ? 0 : oldState[rIndex - 1][cIndex]);
				}
				// top right of cell
				if(rIndex != 0 && oldState[rIndex - 1] != undefined){
					cellCount += parseInt(oldState[rIndex - 1][cIndex + 1] == undefined ? 0 : oldState[rIndex - 1][cIndex + 1]);
				}

				// center left of cell
				if(cIndex != 0){
					cellCount += parseInt(oldState[rIndex][cIndex - 1] == undefined ? 0 : oldState[rIndex][cIndex - 1]);
				}

				// center right of cell

				cellCount += parseInt(oldState[rIndex][cIndex + 1] == undefined ? 0 : oldState[rIndex][cIndex + 1]);

				// bottom left of cell
				if(cIndex != 0 && oldState[rIndex + 1] != undefined){
					cellCount += parseInt(oldState[rIndex + 1][cIndex - 1] == undefined ? 0 : oldState[rIndex + 1][cIndex - 1]);
				}

				// bottom middle of cell

				if(oldState[rIndex + 1] != undefined){
					cellCount += parseInt(oldState[rIndex + 1][cIndex] == undefined ? 0 : oldState[rIndex + 1][cIndex]);
				}

				// bottom right of cell

				if(oldState[rIndex + 1] != undefined){
					cellCount += parseInt(oldState[rIndex + 1][cIndex + 1] == undefined ? 0 : parseInt(oldState[rIndex + 1][cIndex + 1]));
				}

				// new cell state calculation

				if(cellCount < 2){
					newState[rIndex][cIndex] = 0;
				}
				else if(cellCount > 3){
					newState[rIndex][cIndex] = 0;
				}
				else if(cellCount == 3){
					newState[rIndex][cIndex] = 1;
				}
				else if(oldState[rIndex][cIndex] == 1){
					newState[rIndex][cIndex] = 1;
				}
				else {
					newState[rIndex][cIndex] = 0;
				}

			});
		});

		if(invalidInput){
		    return 'Invalid Cell Value(s)';
		}
		else {
			return newState
		}

	}

	return {
		evolve: evolve
	};
};
