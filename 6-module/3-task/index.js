'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.render();
    let dropdownElementsCollection = this.el.querySelectorAll('.dropdown');
    let navLinksCollection = this.el.querySelectorAll('.nav-link');
    for (let item of dropdownElementsCollection) {
      item.addEventListener('pointerenter', (event) => this.onPointerEnter(event));
      item.addEventListener('pointerleave', (event) => this.onPointerLeave(event));
    }
    for (let item of navLinksCollection) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        item.dispatchEvent(new CustomEvent("select", {
          bubbles: false,
          detail: {
            id: item.getAttribute('id')
          }
        }));
      });
    }
  }
  render() {
    this.el.innerHTML = this.template;
  }
  onPointerEnter(event) {
    let target = event.target;
    target.querySelector('.dropdown-menu').classList.add('show');
    document.querySelector('.backdrop').classList.add('show');
  }
  onPointerLeave(event) {
    let target = event.target;
    target.querySelector('.dropdown-menu').classList.remove('show');
    document.querySelector('.backdrop').classList.remove('show');
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;