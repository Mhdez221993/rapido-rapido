const itemShape = './';
const lines = './';
const starLarge = './';
const starSmall = './';
const comments = './';
const reserve = './';
const footBarBackground = './';
const close = './';

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
          <div class="l-item-detail-main__stars">
            <img class="stars-img" src=${starSmall} alt="stars" />
            <h6 id="stars-count" class="stars-count">${item.stars}</h6>
          </div>
        </section>
        <section class="l-item-detail__ingredients">
            <h6 class="ingredients-title">Ingredients</h6>
            <h6 class="ingredients-content">- ${item.ingredients}</h6>
        </section>        
        <section class="l-item-detail__footbar">
          <img class="footbar-background" src=${footBarBackground} alt="footbar-background" />
          <img id="btn-comments" class="footbar-comments" src=${comments} alt="comments-button" />
          <img id="btn-star" class="footbar-star" src=${starLarge} alt="star-button" />
          <img id="btn-reserve" class="footbar-reserve" src=${reserve} alt="reserve-button" />
        </section>
      </section>`;

  return template;
};

export default itemLayout;
