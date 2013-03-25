describe("Thumbnail Directive", function(){
  var element;
  
  beforeEach(function(){
    module("gallery");
    module("galleryMock");
    
    inject(function($injector, $rootScope, $compile){
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
});