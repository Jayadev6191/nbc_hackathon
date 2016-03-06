angular.module('starter.services', [])

.factory('WireWaxAPI', ['$http', '$q', function ($http, $q) {
  var deferred = $q.defer(); 
  var trailersArray = [];

  var headers= {
         "access_token": "b8f17605f5ae93ff2a54d5a5f748729c88fef8e9",
         "Authorization":"Bearer b8f17605f5ae93ff2a54d5a5f748729c88fef8e9"
  };

    var wirewaxService={};

 wirewaxService.getTrailers = function(){

   $http.get('http://hobnob.wirewax.com/public/video/', {headers: headers}).then(function(response){
       if (response.data) {
         response.data.map(function(responseId){
         trailersArray.push(getSingleTrailer(responseId));
       });
       // console.log(response);
       deferred.resolve(trailersArray);
       }
       
     },function(response){
       deferred.reject(response.status);
     });

   return deferred.promise;
 };

    var getSingleTrailer = function(videoId){

   $http.get('http://hobnob.wirewax.com/video/'+videoId, {headers: headers} ).then(function(response){
             deferred.resolve(response);
        },function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return wirewaxService;
        
}])

.factory('TwitterAPI', ['$http', '$q', function ($http, $q) {
  

  return {

  };
}])