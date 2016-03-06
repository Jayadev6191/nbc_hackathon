angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TrailersListCtrl', function($scope, WireWaxAPI) {
  WireWaxAPI.getTrailers().then(function(data){
    console.log('data', data);
    $scope.trailers = data;
  });
  console.log('scope', $scope.trailers);
})


.controller('TrailerCtrl', function($scope, $stateParams) {

})

.controller ('WebcamCtrl', function($scope) {
  $scope.onError = function (err) {};
  $scope.onStream = function (stream) {
    videoParent = document.getElementById('video');
    video = videoParent.children[0];
    var width = 320;    // We will scale the photo width to this
    var height = width * (3/4);     // This will be computed based on the input stream
    canvas = document.getElementById('video-canvas');
    startbutton = document.getElementById('startbutton');

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = width;
      context.drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL();

      function download(name, type) {
        var a = document.createElement("a");
        a.href = data;
        a.download = name;
        a.click();
      }
      download('testImage.png', 'png')

    }
  }
  var started = false;
  var stop;
  startbutton.addEventListener('click', function(ev){
    var callTakePicture = function(){
      takepicture();
    }
    if (started === false) {
      stop = setInterval(callTakePicture, 1000)
      started = true;
    }
    else {
      clearInterval(stop);
    }
    ev.preventDefault();
  }, false);



   //   var video = document.querySelector('video');
   //   console.log(video);
   //   video.src = window.URL.createObjectURL(stream);
   //   video.onloadedmetadata = function(e) {
   // };
  };
  $scope.onSuccess = function (stream) {};
});
