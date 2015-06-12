app.service("crudService", function($http, $q){
	this.listEntries = function(){
		var deferred = $q.defer();
		$http.get('http://www.w3schools.com/angular/customers.php').
			success(function(data){
				deferred.resolve(data);
			}).
			error(function(data){
				deferred.reject(data);
			});
		return deferred.promise;
	};
});