angular.module('starter.services', [])

.factory('WireWaxAPI', ['$http', '$q', function ($http, $q) {
  var deferred = $q.defer(); 

  var headers= {
         "access_token": "b8f17605f5ae93ff2a54d5a5f748729c88fef8e9",
         "Authorization":"Bearer b8f17605f5ae93ff2a54d5a5f748729c88fef8e9"
  };


   var getTrailers = function(){
	   $http.get('http://hobnob.wirewax.com/public/video/', {headers: headers}).then(function(response){
		       deferred.resolve(response);
	     },function(response){
	       	   deferred.reject(response.status);
	     });

	   		return deferred.promise;
	 	};

    var getSingleTrailer = function(videoId, callback){
	   $http.get('http://hobnob.wirewax.com/video/'+videoId, {headers: headers} ).then(function(response){
	             callback(response);
	        },function(error){
	            deferred.reject(error);
	        });

	        return deferred.promise;
	};



    return {
    	list: getTrailers,
    	single : getSingleTrailer
    };
        
}])

.factory('TwitterAPI', ['$http', '$q', function ($http, $q) {
  

  return {

  };
}])