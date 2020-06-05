'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';
  productsList;
  productsListLayout = `<div class="product-list-box"></div>`;

  constructor(parentElement) {
    this.el = parentElement;
    this.el.innerHTML = this.productsListLayout;
    this.productsList = JSON.parse(localStorage.getItem(this.productsStoreKey));
    this.el.querySelector('.product-list-box').addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.tagName === 'BUTTON' && target.dataset.buttonRole) {
        let question = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
        if (question) {
          let productId = target.closest('.product-wrapper').dataset.productId;
          let index = this.productsList.findIndex((item) => item.id === +productId);
          this.productsList.splice(index, 1);
          localStorage.removeItem(this.productsStoreKey);
          if (this.productsList.length) {
            localStorage.setItem(this.productsStoreKey, JSON.stringify(this.productsList, null, 2));
          }
          target.closest('.product-wrapper').remove();
        }
      }
    });
    this.show();
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
    if (this.productsList) {
      this.productsList.forEach((item) => {
        let productTemplateLayout = document.createElement('div');
        let productImageLayout = document.createElement('div');
        let productImageElement = document.createElement('img');
        let productTitleElement = document.createElement('h5');
        let productDescriptionLayout = document.createElement('div');
        let productButtonLayout = `<div class="product-remove-button-wrapper"></div>`;
        let productButtonElement = document.createElement('button');
        let productRatingElement = document.createElement('div');
        let productPriceElement;
        let productRatingLayout;
        //Product template
        productTemplateLayout.classList.add('product-wrapper');
        productTemplateLayout.classList.add('box-inner-col');
        productTemplateLayout.classList.add('description-col');
        productTemplateLayout.dataset.productId = item.id;
        //Product image
        productImageLayout.classList.add('product-image-container');
        productImageElement.classList.add('product-image');
        productImageElement.setAttribute('src', item.imageUrl);
        productImageElement.setAttribute('alt', 'img');
        productImageLayout.append(productImageElement);
        productTemplateLayout.append(productImageLayout);
        //Product title
        productTitleElement.classList.add('col-title');
        productTitleElement.classList.add('mb-2');
        productTitleElement.textContent = item.title;
        //Product rating
        productRatingLayout = item.rating ? this.makeStarsComponent(item.rating.stars) : this.makeStarsComponent(0);
        productRatingElement.classList.add('rate');
        productRatingElement.innerHTML = productRatingLayout;
        if (item.rating) {
          productRatingElement.insertAdjacentHTML('beforeend', '<p class="rate-amount d-none d-md-block mt-1">' + item.rating.reviewsAmount + ' reviews' + '</p>');
        }
        //Product description
        productDescriptionLayout.classList.add('product-description');
        productTemplateLayout.append(productDescriptionLayout);
        productDescriptionLayout.append(productTitleElement);
        productDescriptionLayout.append(productRatingElement);
        //Product button
        productButtonElement.classList.add('product-remove-button');
        productButtonElement.dataset.buttonRole = 'checkout-remove-product';
        productButtonElement.textContent = 'X';
        //Product price
        productPriceElement = `<div class="product-price">
        <p class="mb-0 font-weight-light">Price:</p>
        <h4 class="col-title price-text mb-2">${item.price}</h4>
        `;
        //Whole product element
        productTemplateLayout.insertAdjacentHTML('beforeend', productButtonLayout);
        productDescriptionLayout.insertAdjacentHTML('afterend', productPriceElement);
        productTemplateLayout.querySelector('.product-remove-button-wrapper').append(productButtonElement);
        this.el.querySelector('.product-list-box').append(productTemplateLayout);
      });
    }
    else {
      alert('Корзина пуста');
    }
  }
}

window.CheckoutProductList = CheckoutProductList;
