The Project is Closed. To Load jquery and other Libraries in a correct way uso browsify or webpack. If need a simple js to use inline in HEAD look at [TAL Project](https://github.com/nennogabriel/The-Async-Loader)

# async JQuery

[![Code Climate](https://codeclimate.com/github/nennogabriel/async-JQuery/badges/gpa.svg)](https://codeclimate.com/github/nennogabriel/async-JQuery)


# async JQuery

The most simple way to use JQuery async.

## Archiviments

The goal is load JQuery asynchronessly with a short code. The minified version have 116 bytes. (less then a tweet)

Can be done shorter, can be done more semantical. It's your choice, fork it! ;-)

## How to Use

The recomended way to do is copy and paste  the minified version into script tag inline at head of the page.

Load JQuery from a repository using async tag.

    <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

Use the function a$() to load:

    // Run when dom ready
    a$(document, function(){
       // do something when document has been ready
    });
    
    // Run when window has loaded
    a$(window, function(){
       // do something $(window).load()
    }, true);
    
    // Execute the elemnt by CSS
    a$("#WFI" , function(){
       // do something CSS element was ready
       $("#WFI").remove();
    });

## Parameters and Options

el - element to confirm whe it is ready (of course it has to be done before jQuery Loading)
func - function with executables to be done.
isLoad - A boolean to verify which case will execute, as .load() or as .ready() (True for .load())

The "ready" will run first as "load". Sometimes "load" will be inconsistent for elemnts.
