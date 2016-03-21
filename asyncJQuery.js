/**
 * Created by nennogabriel on 3/20/16.
 */

/*
// how to use:
// "$" -> as soon as jQuery Loads (raw function)
// "r" -> for jQuery Ready (jQuery shorthand)
// "#any-dom-element" -> for $("#any-dom-element").load() | window for $(window).load()
aJQ(["r",function (){
  ...
  // code to be load when jquery is ready.
}]);
*/

function aJQ(any) {
  if (typeof $ === "undefined"){
    setTimeout(function(){
      aJQ(any);
    },99);
    return;
  }
  if(any[0] == "r"){
    $(any[1]);
  }else if (any[0] == "l") {
    $(window).load(any[1]);
  }
}
