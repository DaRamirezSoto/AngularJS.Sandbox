angular.module('filterFiddle',[]);

function listCtrl($scope,$http) {

    $http.get('../data/books.json')
            .then(function(response) {
                $scope.books = response.data;
                $scope.tags = (function () {
                    return _.chain($scope.books)
                            .pluck('Tags')
                            .flatten()
                            .unique()
                            .sort()
                            .value();
                })();

                $scope.properties = (function(){
                    return _.chain($scope.books[0])
                            .keys()
                            .value();
                }());

            });



}
