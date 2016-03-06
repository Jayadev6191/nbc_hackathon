angular.module('starter.services', [])

.factory('WireWaxAPI', ['$http', '$q', function ($http, $q) {
   var deferred = $q.defer(); 

   var headers= {
          "access_token": "b8f17605f5ae93ff2a54d5a5f748729c88fef8e9",
          "Authorization":"Bearer b8f17605f5ae93ff2a54d5a5f748729c88fef8e9"
   };

	var wirewaxService={};

    wirewaxService.getTrailers = function(){
 
        $http.get('http://hobnob.wirewax.com/public/video/', {headers: headers} ).success(function(data){
		 	deferred.resolve(data);
		},function(error){
			
		});

		return deferred.promise;
	};

	wirewaxService.getSingleTrailer = function(videoId){
 
        $http.get('http://hobnob.wirewax.com/video/'+videoId, {headers: headers} ).success(function(data){
		 	deferred.resolve(data);
		},function(error){
			
		});

		return deferred.promise;
	};

	return wirewaxService;
		
}])

.factory('TwitterAPI', ['$http', '$q', function ($http, $q) {
  

  return {

  };
}])