describe("Gallery Controller", function(){
  var scope, controller, pictures;
  
  beforeEach(function(){
    module("gallery");
    module("galleryMock");
    
    inject(function($injector, $rootScope, $controller){
      scope       = $rootScope.$new();
      controller  = $controller("GalleryController", { $scope: scope });
      pictures    = $injector.get("pictures");
    });
  });
  
  it("exposes the pictures service", function(){
    expect(scope.pictures.all.length).toBe(4);
  });
  
});