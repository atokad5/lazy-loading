# Lazy Loading 

## Installation

`npm install lazy-loader-js`


and in your main js file 

`import lazyLoading from "lazy-loader-js"`

## Intro
This lazy loading script provides a feature that holds the height of your DOM, even when your images haven't fully loaded yet and while they are being loaded in.


## Code example
```
<div class="outer-container"> // this is just an example, must use an outer element to set max width of image.
  <figure>
    <img class="lazy-img" data-lazy-src="" data-lazy-width="" data-lazy-height="">
  </figure>
</div>
```

## Must use

You must use the following: 


  class: `lazy-img`


  data-attributes: `data-lazy-src`, `data-lazy-width`, `data-lazy-height`


  wrap each image around a figure.


## Styles

You will be able to have access to a `is--loaded` class. This class becomes available when the image becomes fully loaded and is ready to be viewed.


## Sup?
If you have any questions feel free to email me or contact me on Twitter [@ispykenny](https://twitter.com/ispykenny)