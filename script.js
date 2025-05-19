window.addEventListener('DOMContentLoaded', () => {

    const width = window.innerWidth
    console.log(width)
    console.log(window.innerWidth, window.devicePixelRatio)
    if(width <= 721){
      //navbar

        const nav = document.querySelector(".navbar");
        const hamburg  = document.querySelector('.hamburger');
        const overlay = document.querySelector('.over-lay');
        nav.innerHTML = `
        <p class="menu"><span></span><span></span><span></span></p>
        <p class="site-title text-v-d-blue">sneakers</p>
          <div class="nav-list container">
            <li class="nav-item one"><img class="one-img" src="images/icon-cart.svg" alt=""></li>
            <li class="nav-item"><img src="images/image-avatar.png" width="40px" alt=""></li>
          </div>
        </div>`
        console.log(200)
      const hamburgToggle = document.querySelectorAll('.menu');
      hamburgToggle.forEach(menu => {
        menu.addEventListener('click', () =>{
          hamburg.classList.toggle('active');
          overlay.classList.toggle('active');
        })
      })

      // image change on mobile

      if(innerWidth < 481){
        const gallery = document.querySelector('.gallery');
        
        gallery.innerHTML = `
        <div class="main-img"><img src="images/image-product-1.jpg" class="br-lg" alt=""><img src="images/image-product-2.jpg" class="br-lg" alt=""><img src="images/image-product-3.jpg" class="br-lg" alt=""><img src="images/image-product-4.jpg" class="br-lg" alt=""></div>
        <div class="next"><img src="images/icon-next.svg" width="10px" alt=""></div>
        <div class="prev"><img src="images/icon-previous.svg" width="10px" alt=""></div>`

        const mainImg = document.querySelector('.main-img');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');

        let click = 0
        next.addEventListener('click', () => {
          if(click < 3){
            click++;
          if(click == 0){
            mainImg.children[0].style.left = `0`;
            mainImg.children[1].style.left = `100%`;
            mainImg.children[2].style.left = `200%`;
            mainImg.children[3].style.left = `300%`;
          }
          if(click == 1){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `0`;
            mainImg.children[2].style.left = `100%`;
            mainImg.children[3].style.left = `200%`;
          }
          if(click == 2){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `-100%`;
            mainImg.children[2].style.left = `0%`;
            mainImg.children[3].style.left = `100%`;
          }
          if(click == 3){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `-100%`;
            mainImg.children[2].style.left = `-100%`;
            mainImg.children[3].style.left = `0`;
          }
          }
        })
        prev.addEventListener('click', () => {
          if(click > 0){
            click--;
          if(click == 0){
            mainImg.children[0].style.left = `0`;
            mainImg.children[1].style.left = `100%`;
            mainImg.children[2].style.left = `200%`;
            mainImg.children[3].style.left = `300%`;
          }
          if(click == 1){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `0`;
            mainImg.children[2].style.left = `100%`;
            mainImg.children[3].style.left = `200%`;
          }
          if(click == 2){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `-100%`;
            mainImg.children[2].style.left = `0%`;
            mainImg.children[3].style.left = `100%`;
          }
          if(click == 3){
            mainImg.children[0].style.left = `-100%`;
            mainImg.children[1].style.left = `-100%`;
            mainImg.children[2].style.left = `-100%`;
            mainImg.children[3].style.left = `0`;
          }
          }
        })
      }
    }

    // adding to cart
    const cart = document.querySelector('.cart');
    const clickers = document.querySelector('.main');
    let cartItemNum = 0
    const body = document.querySelector('body');

    body.addEventListener('click', (e)=>{
      document.querySelector('.amt').innerHTML = cartItemNum
      if(e.target.classList.contains('add-to-cart')){
        if(cartItemNum == 0){
          cartItemNum++;
        const span = document.createElement('span');
        span.classList.add('span')
        span.innerText = cartItemNum;
        const one = document.querySelector('.one');
        one.appendChild(span);
        document.querySelector('.amt').innerHTML = cartItemNum
        cart.innerHTML = `<p><strong>Cart</strong></p>
        <hr>
        <div class="items">
          <div class="item">
            <img src="images/image-product-1-thumbnail.jpg" width="50px" class="br-sm" alt="">
          <div class="info text-g-blue">
            <p>Fall Limited Edition Sneakers</p>
            <p><span class="item-price">$125.00</span> x <span class="item-count">${cartItemNum}</span>  <strong class="final-price text-black">$${cartItemNum * 125}.00</strong></p>
          </div>
          <img src="images/icon-delete.svg" class="del" alt="" width="15px" height="15px">
          </div>
        </div>
        <div class="checkout btn-primary"><strong>Checkout</strong></div>`
        }
      }
      if(cartItemNum > 0){
        if(e.target.classList.contains('plus')){
          const itemUpdate = document.querySelectorAll('.item-count, .span');
          const update = document.querySelector('.final-price');
          cartItemNum++;
          document.querySelector('.amt').innerHTML = cartItemNum
          itemUpdate.forEach(each => {
            each.innerText = cartItemNum;
          })
          update.innerText = `$${cartItemNum * 125}.00`;
        }
        if(e.target.classList.contains('minus')){
          const itemUpdate = document.querySelectorAll('.item-count, .span');
          const update = document.querySelector('.final-price');
          cartItemNum--;
          document.querySelector('.amt').innerHTML = cartItemNum
          itemUpdate.forEach(each => {
            each.innerText = cartItemNum;
          })
          update.innerText = `$${cartItemNum * 125}.00`;
        }else if(e.target.classList.contains('del')){
          cartItemNum = 0
        }
      }
      setTimeout(()=>{
        if(cartItemNum == 0){
          document.querySelector('.amt').innerHTML = cartItemNum
          const span = document.querySelector('.span');
          span.remove();
          cart.innerHTML = `<p><strong>Cart</strong></p>
          <hr>
          <p class="text-d-g-blue empty">Your cart is empty</p>`
        }
      },.5)

      // gallery little images
      const imageMain = document.querySelector('.main-img img');
      const littleOne = document.querySelector('.little-one');
      const littleTwo = document.querySelector('.little-two');
      const littleThr = document.querySelector('.little-thr');
      const littleFour = document.querySelector('.little-fou');
      if(e.target.classList.contains('little-one')){
        imageMain.src = `images/image-product-1.jpg`;
        e.target.classList.add('active');
        littleTwo.classList.remove('active');
        littleThr.classList.remove('active');
        littleFour.classList.remove('active');
      }else if(e.target.classList.contains('little-two')){
        imageMain.src = `images/image-product-2.jpg`;
        e.target.classList.add('active');
        littleOne.classList.remove('active');
        littleThr.classList.remove('active');
        littleFour.classList.remove('active');
      }else if(e.target.classList.contains('little-thr')){
        imageMain.src = `images/image-product-3.jpg`;
        e.target.classList.add('active');
        littleOne.classList.remove('active');
        littleTwo.classList.remove('active');
        littleFour.classList.remove('active');
      }else if(e.target.classList.contains('little-fou')){
        imageMain.src = `images/image-product-4.jpg`;
        e.target.classList.add('active');
        littleOne.classList.remove('active');
        littleThr.classList.remove('active');
        littleTwo.classList.remove('active');
      }

      // cart toggle
      if(e.target.classList.contains('one') || e.target.classList.contains('one-img')){
        cart.classList.toggle('active-cart')
      }

      // lightbox
      if(width > 960){
        if(e.target.classList.contains('omg')){
          const gallery = document.querySelector('.gallery');
          const body = document.querySelector('body')
          const newGallery = gallery.cloneNode(true);
          const next = document.querySelector('.next').cloneNode(true)
          const prev = document.querySelector('.prev').cloneNode(true)
          const cancel = document.createElement('img')
          cancel.src = 'images/icon-close.svg'
          newGallery.appendChild(cancel)
          newGallery.classList.remove('gallery')
          newGallery.classList.add('new-gallery')
          body.appendChild(newGallery);
          const nextReal = document.querySelector('.new-gallery .next')
          const prevReal = document.querySelector('.new-gallery .prev')
          const canc = document.querySelector('.new-gallery > img')
          const mainImg = document.querySelector('.new-gallery .main-img img')
          const littleOne = document.querySelector('.new-gallery .little-one');
          const littleTwo = document.querySelector('.new-gallery .little-two');
          const littleThr = document.querySelector('.new-gallery .little-thr');
          const littleFour = document.querySelector('.new-gallery .little-fou');
          const overlay = document.querySelector('.over-lay');
          overlay.classList.add('active');
          let cint = 0
          canc.addEventListener('click', ()=>{
            cint = 0
            document.querySelector('.new-gallery').remove()
            overlay.classList.remove('active')
          })
          nextReal.addEventListener('click', () => {
            if(cint < 3){
              cint++;
            if(cint == 0){
              mainImg.src =  `images/image-product-1.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.add('active');
              littleThr.classList.remove('active');
              littleFour.classList.remove('active');
            }
            if(cint == 1){
              mainImg.src =  `images/image-product-2.jpg`;
              littleTwo.classList.add('active')
              littleOne.classList.remove('active');
              littleThr.classList.remove('active');
              littleFour.classList.remove('active');
            }
            if(cint == 2){
              mainImg.src =  `images/image-product-3.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.remove('active');
              littleThr.classList.add('active');
              littleFour.classList.remove('active');
            }
            if(cint == 3){
              mainImg.src =  `images/image-product-4.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.remove('active');
              littleThr.classList.remove('active');
              littleFour.classList.add('active');
            }
            }
          })
          prevReal.addEventListener('click', () => {
            if(cint > 0){
              cint--;
            if(cint == 0){
              mainImg.src =  `images/image-product-1.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.add('active');
              littleThr.classList.remove('active');
              littleFour.classList.remove('active');
              
            }
            if(cint == 1){
              mainImg.src =  `images/image-product-2.jpg`;
              littleTwo.classList.add('active')
              littleOne.classList.remove('active');
              littleThr.classList.remove('active');
              littleFour.classList.remove('active');
            }
            if(cint == 2){
              mainImg.src =  `images/image-product-3.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.remove('active');
              littleThr.classList.add('active');
              littleFour.classList.remove('active');
            }
            if(cint == 3){
              mainImg.src =  `images/image-product-4.jpg`;
              littleTwo.classList.remove('active')
              littleOne.classList.remove('active');
              littleThr.classList.remove('active');
              littleFour.classList.add('active');
            }
            }
          })
        }
      }
    })
})