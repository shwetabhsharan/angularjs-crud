app.controller("crudController", function($scope, crudService){
	crudService.listEntries().then(function(data){
		$scope.response_data = data.records;
	});
});