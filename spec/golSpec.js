describe('Game', function (){
	var evolve = require('../script/gol')().evolve;

// ============================ empty tests ============================

	it('Empty 1 - can evolve an inital empty grid', function(){
		var initialState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

// ============================ underpopulation tests ============================

	it('Underpopulation 1 - A single cell dies', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 2 - Two cells die (top left/center)', function(){
		var initialState = [
			[1,0,0],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 3 - Two cells die (top mid/center)', function(){
		var initialState = [
			[0,1,0],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 4 - Two cells die (top right/center)', function(){
		var initialState = [
			[0,0,1],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 5 - Two cells die (right/center)', function(){
		var initialState = [
			[0,0,0],
			[0,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 6 - Two cells die (bottom right/center)', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[0,0,1]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 7 - Two cells die (bottom mid/center)', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[0,1,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 8 - Two cells die (bottom left/center)', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[1,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Underpopulation 2 - Two cells die (left/center)', function(){
		var initialState = [
			[0,0,0],
			[1,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

// ============================ overcrowding tests ============================

	it('Overcrowding 1 - Center overcrowded 1', function(){
		var initialState = [
			[1,1,0],
			[0,1,0],
			[0,1,1]
		];

		var resultState = [
			[1,1,0],
			[0,0,0],
			[0,1,1]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Overcrowding 2 - Center overcrowded 2', function(){
		var initialState = [
			[0,1,1],
			[0,1,0],
			[1,1,0]
		];

		var resultState = [
			[0,1,1],
			[0,0,0],
			[1,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});
// ============================ survival tests ============================

	it('Survival 1 - Center survives', function(){
		var initialState = [
			[0,1,1],
			[0,1,0],
			[0,0,1]
		];

		var resultState = [
			[0,1,1],
			[0,1,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	it('Survival 2 - Center survives (diagonal line)', function(){
		var initialState = [
			[1,0,0],
			[0,1,0],
			[0,0,1]
		];

		var resultState = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

// ============================ creation tests ============================

	it('Creation 1 - Center created', function(){
		var initialState = [
			[1,1,0],
			[1,0,0],
			[0,0,0]
		];

		var resultState = [
			[1,1,0],
			[1,1,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Creation 2 - Center created 2', function(){
		var initialState = [
			[1,0,1],
			[0,0,0],
			[1,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Creation 3 - Horizontal to vertical line', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('Creation 4 - Horizontal to vertical, then back to horizontal', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
		expect(evolve(resultState)).toEqual(initialState);
	});

// ============================ different grid size tests ============================

	it('Smaller grid 1 - 2 x 2 grid (creation)', function(){
		var initialState = [
			[1,1],
			[1,0]
		];

		var resultState = [
			[1,1],
			[1,1]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	it('Smaller grid 2 - 1 x 1 lines (creation)', function(){
		var initialState = [
			[1]
		];

		var resultState = [
			[0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	it('Larger grid 1 - 4 x 4 grid', function(){
		var initialState = [
			[0,0,0,0],
			[1,1,1,1],
			[1,1,1,1],
			[0,0,0,0]
		];

		var resultState = [
			[0,1,1,0],
			[1,0,0,1],
			[1,0,0,1],
			[0,1,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	
	
	it('Larger grid 2 - 5 x 5 grid', function(){
		var initialState = [
			[0,0,0,0,0],
			[1,1,1,1,1],
			[0,0,0,0,0],
			[1,1,1,1,1],
			[0,0,0,0,0]
		];

		var resultState = [
			[0,1,1,1,0],
			[0,1,1,1,0],
			[0,0,0,0,0],
			[0,1,1,1,0],
			[0,1,1,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});


	it('Larger grid 3 - Different grid lengths 5 x 3', function(){
		var initialState = [
			[0,0,0,0,0],
			[1,1,1,1,1],
			[0,0,0,0,0]
		];

		var resultState = [
			[0,1,1,1,0],
			[0,1,1,1,0],
			[0,1,1,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	it('Larger grid 4 - Different grid lengths 3 x 5', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,0,0],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	// ============================ resilience tests ============================

	it('Resilience 1 - Strings input instead of ints', function(){
		var initialState = [
			['0','0','0'],
			['1','1','1'],
			['0','0','0']
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	

	it('Resilience 2 - Missing cell (bottom row)', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	
		
	it('Resilience 3 - Missing cell (top row)', function(){
		var initialState = [
			[0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,1],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	
			
	it('Resilience 3 - Empty array (row)', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0],
			[]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1,0],
			[]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});	


});
