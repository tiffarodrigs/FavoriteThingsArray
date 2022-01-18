$("document").ready(function(){
  $("form").submit(function(){
    event.preventDefault();

   let fav1= $("#fav1").val();
   let fav2= $("#fav2").val();
   let fav3= $("#fav3").val();
   let fav4= $("#fav4").val();
   let fav5= $("#fav5").val();
   console.log("list"+fav1+ fav2 +fav3 +fav4 +fav5);
   let favArray=[];
   favArray.push(fav1,fav2,fav3,fav4,fav5);
   console.log(favArray);
   favArray[2]
   let newFavArray=[];
   newFavArray.push(favArray[2],favArray[3],favArray[4])
   console.log(newFavArray);
   let index0=newFavArray[0]
   let index1=newFavArray[1]
   let index2=newFavArray[2]

   //$("li").newFavArray[0]
   //$('ul').children('li').text(newFavArray[0]);
   //$('ul').children('li').text(newFavArray[1]);
   //$('ul').children('li').text(newFavArray[2]);
   
   $('ul').prepend(`<li>${index0}</li>`);
   $('ul').prepend(`<li>${index1}</li>`);
   $('ul').prepend(`<li>${index2}</li>`);


  });

});