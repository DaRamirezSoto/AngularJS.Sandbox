angular.module('filterFiddle',[]);

function listCtrl($scope,$http) {
    $http.get('../data/books.json')
            .then(function(response){
                $scope.books = response.data;
            });

}
