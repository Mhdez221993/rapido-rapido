import itemShape from '../../images/item-shape-large.png';
import lines from '../../images/zigzag.svg';
import close from '../../images/close.svg';

const itemLayout = (item) => {
  if (item.stars === undefined) {
    item.stars = 0;
  }
  const template = `<section id="item" class="l-item-detail">
       <img id='btn-close-item' class='close-item' src=${close} alt="item close"/>
       <img class="l-item-detail-image" src=${lines} alt="main-image" />
        <section class="l-item-detail-title">
          <h2 class="l-item-detail-title-large">${item.name}</h2>
          <h5 class="l-item-detail-title-price">$${item.price}</h5>
        </section>
        <section class="l-item-detail-main">
          <div class="l-item-detail-main-image">
            <img class="l-item-detail-main-image-main" src=${item.image} alt="main-image" />
            <img class="l-item-detail-main-image-shape" src=${itemShape} alt="main-image-shape" />
          </div>
        </section>
        <section class="l-item-detail__ingredients">
            <h6 class="ingredients-title">Ingredients</h6>
            <h6 class="ingredients-content">- ${item.ingredients}</h6>
        </section>        
      </section>`;

  return template;
};

export default itemLayout;
