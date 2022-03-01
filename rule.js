let images = [
    { name: 'gmc' , url:'pic/gmc.htm', Likes: 150},
    { name: 'sport' , url: 'file:///C:/Users/ADMIN/Desktop/web/ass3/pic/sport.htm', Likes: 300},
    
    { name: 'kai' , url: 'pic/kai.webp', Likes: 100},
   { name: 'nissan' , url: 'pic/nissan.htm', Likes:70} 

]

images.sort(function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.Likes - a.Likes;
    
  });
  style="width: 400px; height: 300px;"


  for (ImgeIcon of images){
      let imgElm = document.createElement("img");
      imgElm.src = ImgeIcon.url;
      document.body.append(imgElm); 
  }