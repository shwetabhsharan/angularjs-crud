app.controller("crudController", function($scope, crudService){

	// controller for showing list of entries
	crudService.listEntries().then(function(data){
		$scope.response_data = data.records;
	});

	// controller for creating entries
	$scope.created_data = [];
	$scope.createEntryButton = function(){
		var pub_data = $scope.pub_data;
		crudService.createEntry(pub_data).then(function(data){
			$scope.created_data.push(data);
			console.log($scope.created_data);
		});
	}
});

app.controller("fetchDataController", function($scope, fetchDataService){
	
	$scope.fetchData = function(userId){
		var userId = $scope.userId
		console.log(userId);
		fetchDataService.fetchDataFunction(userId).then(function(data){
			$scope.selected_data = data;
		})
	}
	
});