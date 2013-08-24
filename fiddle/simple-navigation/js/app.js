angular.module('navigationFiddle', [], function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/page/1', { templateUrl: 'view/page1.html', controller: Page1Ctrl }).
      when('/page/2', { templateUrl: 'view/page2.html', controller: Page2Ctrl }).
      when('/page/3', { templateUrl: 'view/page3.html', controller: Page3Ctrl }).
      when('/page/4', { templateUrl: 'view/page4.html', controller: Page4Ctrl }).
      otherwise({redirectTo:'/page/1'});

    //$locationProvider.html5Mode(true);
    
  });

function Page1Ctrl($scope) {
  console.log("page-1");
}

function Page2Ctrl($scope) {
  console.log("page-2");
}

function Page3Ctrl($scope) {
  console.log("page-3");
}

function Page4Ctrl($scope) {
  console.log("page-4");
}
