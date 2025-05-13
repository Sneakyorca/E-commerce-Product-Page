window.addEventListener('DOMContentLoaded', () => {

    const width = window.innerWidth

    if(width <= 720){
        const nav = document.querySelector(".navbar");
        nav.innerHTML = `
        <p class="menu"><span></span><span></span><span></span></p>
        <p class="site-title text-v-d-blue">sneakers</p>
          <div class="nav-list container">
            <li class="nav-item one"><img src="images/icon-cart.svg" alt=""></li>
            <li class="nav-item"><img src="images/image-avatar.png" width="40px" alt=""></li>
          </div>
        </div>`
    }

})