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

	this.createEntry = function(pub_data){
		var deferred = $q.defer();
		$http.post('http://jsonplaceholder.typicode.com/posts', pub_data).
		success(function(data){
			deferred.resolve(data);
		}).
		error(function(data){
			deferred.reject(data);
		});
		console.log(deferred.promise);
		return deferred.promise;
	};
});

app.service("fetchDataService", function($http, $q){
	this.fetchDataFunction = function(userId){
		var deferred = $q.defer();
		$http.get("http://jsonplaceholder.typicode.com/posts/" + userId).
		success(function(data){
			deferred.resolve(data);
		}).
		error(function(data){
			deferred.reject(data);
		});
		console.log(deferred.promise);
		return deferred.promise;
	}
})