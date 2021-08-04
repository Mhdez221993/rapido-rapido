import shadow from "../../images/shadowTr.png";
import itemShape from "../../images/item-shape.svg";
import itemShapeBackground from "../../images/item-shape-background.svg";
import comments from "../../images/comments-icon.svg";
import reserve from "../../images/reserve-icon.svg";
import starTinyFull from "../../images/star-tiny-full.svg";
import starTinyEmpty from "../../images/star-tiny-empty.svg";

const menuLayout = (menu) => {
  const menuPairs = menu.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  const menuSection = `<section id="menu" class="l-menu">
                       <header class="l-menu-hero">
                          <h1 class="l-menu-hero__title-1">RAPIDO!</h1>
                          <h1 class="l-menu-hero__title-2">RAPIDO!</h1>
                          <h5 class="l-menu-hero__subtitle">Fast Food Restaurant</h5>
                          <div class= "l-menu-hero__counter">
                          Dishes in the Menu: ${menu.length}
                          </div>    
                        </header>
                        <section class="l-menu-main">   
                               
                           ${menuPairs
                             .map(
                               (element) => `<div class="l-menu-main-group">
                               <div id=${element[0].name} class="l-menu-main-item item-left">
                                 <div class="l-menu-main-item__stars">
                                  <img id="btn-star-${element[0].name}" class="stars-img" src=${starTinyEmpty} alt="stars" />
                                  <h6 id="stars-count" class="stars-count">${element[0].stars}</h6>
                                 </div>
                                 <img
                                   src=${element[0].image}
                                   alt="burger"
                                   class="l-menu-main-item-img img-left"
                                 />
                                 <img
                                   src=${shadow}
                                   alt="shadow"
                                   class="l-menu-main-item-shadow shadow-left"
                                 />
                                 <img
                                   id="burger"
                                   src=${itemShape}
                                   alt="item-shape"
                                   class="l-menu-main-item-shape shape-left"
                                 />
                                 <img
                                   src=${itemShapeBackground}
                                   alt="item-shape-background"
                                   class="l-menu-main-item-shape-background background-left"
                                 />
                                <img id="btn-comments-${element[0].name}" class="item-comments" src=${comments} alt="comments-button" />
                                <img id="btn-reserve-${element[0].name}" class="item-reserve" src=${reserve} alt="reserve-button" />
      
                                 <h6 class="l-menu-main-item-text">${element[0].name}</h6>
                               </div>
                               <div id=${element[1].name} class="l-menu-main-item item-right">
                               <div class="l-menu-main-item__stars">
                                  <img id="btn-star-${element[1].name}" class="stars-img" src=${starTinyEmpty} alt="stars" />
                                  <h6 id="stars-count" class="stars-count">${element[1].stars}</h6>
                                 </div>                               
                                 <img
                                   src=${element[1].image}
                                   alt="tacos"
                                   class="l-menu-main-item-img img-right"
                                 />
                                 <img
                                   src=${shadow}
                                   alt="shadow"
                                   class="l-menu-main-item-shadow shadow-right"
                                 />
                                 <img
                                   id="tacos"
                                   src=${itemShape}
                                   alt="item-shape"
                                   class="l-menu-main-item-shape shape-right"
                                 />
                                 <img
                                   src=${itemShapeBackground}
                                   alt="item-shape"
                                   class="l-menu-main-item-shape-background background-right"
                                 />
                                 <img id="btn-comments-${element[1].name}" class="item-comments" src=${comments} alt="comments-button" />
                                 <img id="btn-reserve-${element[1].name}" class="item-reserve" src=${reserve} alt="reserve-button" />
                                <h6 class="l-menu-main-item-text">${element[1].name}</h6>
                               </div>
                             </div>`
                             )
                             .join("")}
                               
                         </section>
                     </section>`;
  return menuSection;
};

export default menuLayout;
