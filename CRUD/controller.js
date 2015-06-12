app.controller("crudController", function($scope, crudService){
	crudService.listEntries().then(function(data){
		$scope.response_data = data.records;
	});

	$scope.created_data = [];
	$scope.createEntryButton = function(){
		var pub_data = $scope.pub_data;
		crudService.createEntry(pub_data).then(function(data){
			$scope.created_data.push(data);
			console.log($scope.created_data);
		});
	}
});
