# async JQuery

[![Code Climate](https://codeclimate.com/github/nennogabriel/async-JQuery/badges/gpa.svg)](https://codeclimate.com/github/nennogabriel/async-JQuery)


# async JQuery

The most simple way to use JQuery async.

## Archiviments

The goal is load JQuery asynchronessly with a short code. The minified version have 140 characters even with 3 chars in the name.

Can be done shorter, can be done more semantical. It's your choice, fork it! ;-)

## How to Use

The recomended way to do is copy and paste  the minified version into script tag inline at head of the page.

Load JQuery from a repository using async tag.

    <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

Use the function aJQ() to load:

    aJQ(["r", function(){
        // any jquery code
    }])

## Parameters and Options

You can chose between 'r' for document ready or 'l' for $(window).load()

Usualy the "ready" will run first as "load".
