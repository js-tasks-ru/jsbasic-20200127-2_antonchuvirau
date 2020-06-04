class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';
  productsList;
  orderedProducts = [];
  productsWrapperTemplate = `
  <div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards"></div>
    </div>
  </div>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.productsWrapperTemplate;
    this.show().then(console.log('Продукты получены'));
    this.el.querySelector('.homepage-cards').addEventListener('click', (event) => {
      let target = event.target;
      if (target.tagName === 'BUTTON' && target.dataset.buttonRole) {
        let answer = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');
        if (answer) {
          //Getting localStorage data
          let localStorageData = JSON.parse(localStorage.getItem('cart-products'));
          if (localStorageData) {
            this.orderedProducts.push();
          }
          //Getting new product data
          let productId = target.closest('.products-list-product').dataset.productId;
          let orderedProduct = this.productsList.find((item) => item.id === +productId);
          if (!this.orderedProducts.length || this.orderedProducts.find((item) => item.id === +productId) === undefined) {
            this.orderedProducts.push(orderedProduct);
            localStorage.removeItem('cart-products');
            localStorage.setItem('cart-products', JSON.stringify(this.orderedProducts, null, 2));
          }
          else {
            alert('Товар уже добавлен в корзину');
          }
        }
      }
    });
  }

  makeStarsComponent(stars) {
    let starElement = `<i class="icon-star active"></i>`;
    let starCheckedElement = `<i class="icon-star checked"></i>`;
  
    let allStars = '';
    let checkedStars = stars || 0;
  
    for (let i = 0; i < 5; i++) {
      if (checkedStars === 0) {
        allStars += starElement;
      } else {
        checkedStars -= 1;
        allStars += starCheckedElement;
      }
    }

    return allStars;
  }

  show() {
    return fetch(this.productsUrl)
      .then((resp) => resp.json())
      .then((data) => {
        this.productsList = data;
        data.forEach((item) => {
          let productTemplateLayout = document.createElement('div');
          let productImageLayout = document.createElement('div');
          let productImageElement = document.createElement('img');
          let productTitleElement = document.createElement('h5');
          let productButtonElement = document.createElement('button');
          let productRatingElement = document.createElement('div');
          let productPriceElement;
          let productRatingLayout;
          //Product template
          productTemplateLayout.classList.add('products-list-product');
          productTemplateLayout.classList.add('col-md-6');
          productTemplateLayout.classList.add('col-lg-4');
          productTemplateLayout.classList.add('mb-4');
          productTemplateLayout.dataset.productId = item.id;
          //Product image
          productImageLayout.classList.add('card-img-wrap');
          productImageElement.setAttribute('src', item.imageUrl);
          productImageElement.setAttribute('alt', 'Card image cap');
          productImageLayout.append(productImageElement);
          //Product title
          productTitleElement.classList.add('card-title');
          productTitleElement.textContent = item.title;
          //Product button
          productButtonElement.classList.add('product-add-to-cart');
          productButtonElement.dataset.buttonRole = 'add-to-cart';
          productButtonElement.textContent = 'Add to cart';
          //Product price
          productPriceElement = item.oldPrice ? `
          <p class="card-text price-text discount"><strong>${item.price}</strong>
          <small class="ml-2">${item.oldPrice}</small></p>
          ` : `
          <p class="card-text price-text discount"><strong>${item.price}</strong>
          `;
          //Product rating
          productRatingLayout = item.rating ? this.makeStarsComponent(item.rating.stars) : this.makeStarsComponent(0);
          productRatingElement.classList.add('rate');
          productRatingElement.innerHTML = productRatingLayout;
          if (item.rating) {
            productRatingElement.insertAdjacentHTML('beforeend', '<span class="rate-amount ml-2">' + item.rating.reviewsAmount + '</span>');
          }
          //Whole product element
          productTemplateLayout.innerHTML = '<div class="card"></div>';
          productTemplateLayout.querySelector('.card').append(productImageLayout);
          productTemplateLayout.querySelector('.card').insertAdjacentHTML('beforeend', '<div class="card-body"></div>');
          productTemplateLayout.querySelector('.card-body').append(productTitleElement);
          productTemplateLayout.querySelector('.card-body').append(productRatingElement);
          productTemplateLayout.querySelector('.card-body').insertAdjacentHTML('beforeend', productPriceElement);
          productTemplateLayout.querySelector('.card-body').append(productButtonElement);
          this.el.querySelector('.homepage-cards').append(productTemplateLayout);
        });
      });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
