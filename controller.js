weatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',  function($scope, $resource, $routeParams, cityService){
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    
    $scope.weatherResult = $scope.weatherApi.get({
        q: $scope.city,
        cnt: $scope.days,
        appid:'7195fc69e3799974d0fd0c3779210ce9'
    });
    
    $scope.convertToCelcius = function(degK){
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        // dt contains value in ms, so to convert it multipy by 1000
        return new Date(dt * 1000);
    };
    
}]);
