describe("Pictures Service", function(){
  var pictures;
  
  beforeEach(function(){
    module("gallery");
    module("galleryMock");
    
    inject(function($injector){
      pictures = $injector.get("pictures");
    });
  });
  
  it("returns 4 default pictures", function(){
    expect(pictures.all.length).toBe(4);
  });
  
});