describe("Thumbnail Directive", function(){
  var scope, element;
  
  beforeEach(function(){
    module("gallery");
    module("galleryMock");
    
    inject(function($injector, $rootScope, $compile){
      scope = $rootScope;
      $rootScope.picture = { id:1, name: "Test", url: "test.png" };
      element = angular.element('<thumbnail picture="picture">');
      $compile(element)($rootScope);
      $rootScope.$digest();
    });
  });
  
  it("displays itself with an image", function(){
    expect(element.find("img").attr("src")).toBe("img/test.png");
    expect(element.find("img").attr("alt")).toBe("Test");
  });
  
  it("removes element if picture is false", function(){
    scope.picture = false;
    expect(element.find("li").length).toBe(0);
  });
});