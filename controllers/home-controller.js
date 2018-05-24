angular.module('app').controller('HomeCtrl', function ($scope, $http, imageService) {
    var currentIndex = 0;
    var totalImages = 0;


    function getRelevantImages(currentIndex) {
        $scope.images = imageService.GetRelevantImages(currentIndex);
    }

    function getCurrentImages() {
        $scope.currentImage = $scope.images.length > 2 ? $scope.images[1] : $scope.images[0];
    }

    function setButtonState() {
        $scope.nextEnable = currentIndex < totalImages;
        $scope.prevEnable = currentIndex > 0;
    }

    $scope.init = function () {

        $http.get('https://www.json-generator.com/api/json/get/cfmxDdlNqq?indent=2').then(function (res) {
            totalImages = res.data.length;
            imageService.SaveImages(res.data);
            getRelevantImages(currentIndex);
            getCurrentImages();
            $scope.prevEnable = false;
            $scope.nextEnable = true;
        });
    };

    $scope.direction = function (type) {
        if (type == 'prev' && currentIndex > 0) {
            currentIndex--;

        } else if (type == 'next' && currentIndex < totalImages) {
            currentIndex++;
        }
        getRelevantImages(currentIndex);
        getCurrentImages();
        setButtonState();
    }
});