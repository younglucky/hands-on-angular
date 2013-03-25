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
  
  it("returns a picture by id", function(){
    expect(pictures.find(1).name).toBe("First Picture");
    expect(pictures.find(3).name).toBe("Third Picture");
  });
  
  it("allows to add a picture", function(){
    expect(pictures.all.length).toBe(4);
    pictures.add({ id: 5, name: "Fifth Picture", url: "5.png" });
    expect(pictures.all.length).toBe(5);
  });
  
  it("prohibits to add pictures that are already in the storage", function(){
    expect(pictures.all.length).toBe(4);
    pictures.add({ id: 4, name: "Fourth Picture", url: "4.png" });
    expect(pictures.all.length).toBe(4);
  });
  
});