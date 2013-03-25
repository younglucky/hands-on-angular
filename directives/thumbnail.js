gallery.directive("thumbnail", function(){
  return {
    restrict: 'E',
    scope:{ picture: '=' },
    controller: function($scope, pictures){
      $scope.delete = function(id){
        pictures.delete(id);
      }
    },
    link: function($scope, element){
      $scope.$watch("picture", function(){
        if(!$scope.picture){
          element.remove();
        }
      });
    },
    template: "<li class='span3'>" +
                "<a href='#' class='thumbnail' ng-click='delete(picture.id)'>" +
                  "<img src='img/{{picture.url}}' alt='{{picture.name}}'>" +
                "</a>" +
                "{{picture.name}}" +
              "</li>",
    replace: true
  };
});