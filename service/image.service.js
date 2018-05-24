angular.module('app').factory('imageService', ['$rootScope', function ($rootScope) {

    var service = {


        SaveImages: function (images) {
            sessionStorage.images = angular.toJson(images);
        },

        GetRelevantImages: function (index) {


            var images = angular.fromJson(sessionStorage.images);
            var res = [];
            if (images[index - 1]) {
                res[0] = images[index - 1];

            }
            if (images[index]) {
                res[1] = images[index];

            }
            if (images[index + 1]) {
                res[2] = images[index + 1];

            }
            return res;
        }
    }

    // $rootScope.$on("savestate", service.SaveState);
    // $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);