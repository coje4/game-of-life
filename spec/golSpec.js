describe('Game', function (){
	var evolve = require('../script/gol')().evolve;

	it('can evolve an inital empty grid', function(){
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

	it('one cells - underpopulation 1', function(){
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

	it('two cells horizontal - underpopulation 2', function(){
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

	it('two cells vertical - underpopulation 3', function(){
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

	it('two cells diaganal - underpopulation 4', function(){
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

// ============================ overcrowding tests ============================

	it('T Shape - overcrowding 1', function(){
		var initialState = [
			[1,1,1],
			[0,1,0],
			[0,1,0]
		];

		var resultState = [
			[1,1,1],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

// ============================ survival tests ============================

	it('Center cell survive - survival 1', function(){
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

// ============================ creation tests ============================

	it('Corner cells - creation 1', function(){
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

	it('horizontal to vertical line - creation 2', function(){
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

	it('horizontal to vertical to horizontal line - creation 3', function(){
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

// ============================ larger grid tests ============================

	it('4 x 4 - larger grid', function(){
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
	
	it('5 x 5 - larger grid', function(){
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

});
