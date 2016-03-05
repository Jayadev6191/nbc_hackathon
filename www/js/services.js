angular.module('starter.services', [])

.factory('WireWaxAPI', ['$http', '$q', function ($http, $q) {
   var headers= {
          "token_type": "bearer",
          "access_token": "b8f17605f5ae93ff2a54d5a5f748729c88fef8e9",
          "expires_in": 3600,
          "refresh_token": "23d3a750d80b9dbf9eb730b4009dcafeacb227f3"
   };

	var wirewaxService={};
 
    wirewaxService.getVideos = function(){
        var deferred = $q.defer(); 
 
 
        $http.get('http://hobnob.wirewax.com/public/video/', {headers: headers} ).success(function(data){
		 	console.log(data);
		});
	};

	return {

    };
		
}])

.factory('TwitterAPI', ['$http', '$q', function ($http, $q) {
  

  return {

  };
}])