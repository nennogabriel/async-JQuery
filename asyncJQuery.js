/**
 * Created by nennogabriel on 3/20/16.
 */

/*
// How to use:
   // Run when dom ready
   a$(document, function(){
      // do something when document has been ready
   });

   // Run when window has loaded
   a$(window, function(){
      // do something when document has been ready
   }, true);

   // Execute the elemnt by CSS
   a$("#WFI" , function(){
      // do something when document has been ready
      $("#WFI").remove();
   });
*/

function a$(el, func, isLoad) {

  (typeof $ === "undefined" ?
      setTimeout(function(){a$(el, func, isLoad)},99) :
      (isLoad ?
          $(el).load(func()) :
          $(el).ready(func())
      )
  )

}