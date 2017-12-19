var myApp = angular.module('myapp',[])

myApp.controller("mycrtl",function(){
  //alert("Its Late" )
});

myApp.directive("displayName",function(){
  return {
    template: '<div> <h2> BMW </h2> </div>'
}
});
