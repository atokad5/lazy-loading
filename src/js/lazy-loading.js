export default function() {
  const lazyImg = document.querySelectorAll('.lazy-img');
 
  const injectSrc = () => {
    lazyImg.forEach( img => {
      let elParent = img.parentElement;
      let srcSwap = img.getAttribute('data-lazy-src');
      let lazyWidth = img.getAttribute('data-lazy-width');
      let lazyHeight = img.getAttribute('data-lazy-height');
      
      let getWidth = lazyWidth > 1 ? lazyWidth : 1920;
      let getHeight = lazyHeight > 1 ? lazyHeight : 1080;
      
      // set figure styles 
      elParent.style.position = 'relative';
      elParent.style.paddingBottom = getHeight / getWidth * 100 + '%';
      elParent.style.width = 'auto';
      elParent.style.height = 0 + 'px';

      // set image styles
      img.style.position = 'absolute';
      img.style.top = 0;
      img.style.left = 0;
      img.style.width = 100 + '%';
      img.style.height = 100 + '%';
  
      // setting padding bottom on figure (img parent);
      img.setAttribute('src', srcSwap)
      img.addEventListener('load' , () => elParent.classList.add('is--loaded'))

    })
  }
  
  window.onload = injectSrc;

}



