gallery.service("pictures", function(){
  var self = this;
  
  this.all = [
    { id: 1, name: "First Picture",  url: "1.png" },
    { id: 2, name: "Second Picture", url: "2.png" },
    { id: 3, name: "Third Picture",  url: "3.png" },
    { id: 4, name: "Fourth Picture", url: "4.png" }
  ];
  
  // finds a picture by id
  this.find = function(id){
    var foundPicture = false;
    angular.forEach(self.all, function(picture){
      if(picture.id === id){
        foundPicture = picture;
        return true;
      }
    });
    return foundPicture;
  };
  
  // adds a picture if it isn't present already
  this.add = function(picture){
    var existing = self.find(picture.id);
    if(existing) return false;
    
    self.all.push(picture);
  };
  
  // adds a picture if it isn't present already
  this.delete = function(id){
    var index = self.all.indexOf(self.find(id));
    if(index < 0) return false;
    
    self.all.splice(index, 1);
  };
  
});