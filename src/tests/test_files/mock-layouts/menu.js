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
                        </header>
                        <section class="l-menu-main">   
                                               
                           ${menuPairs.map(
    (element) => `<div class="l-menu-main-group">
                               <div class="l-menu-main-item item-left">
                                 <img
                                   src="./"
                                   alt="burger"
                                   class="l-menu-main-item-img img-left"
                                 />
                                 <img
                                   src="./"
                                   alt="shadow"
                                   class="l-menu-main-item-shadow shadow-left"
                                 />
                                 <img
                                   id="burger"
                                   src="./"
                                   alt="item-shape"
                                   class="l-menu-main-item-shape shape-left"
                                 />
                                 <img
                                   src="./"
                                   alt="item-shape-background"
                                   class="l-menu-main-item-shape-background background-left"
                                 />

                                 <h6 class="l-menu-main-item-text">${element[0].name}</h6>
                               </div>
                               <div class="l-menu-main-item item-right">
                                 <img
                                   src="./"
                                   alt="tacos"
                                   class="l-menu-main-item-img img-right"
                                 />
                                 <img
                                   src="./"
                                   alt="shadow"
                                   class="l-menu-main-item-shadow shadow-right"
                                 />
                                 <img
                                   id="tacos"
                                   src="./"
                                   alt="item-shape"
                                   class="l-menu-main-item-shape shape-right"
                                 />
                                 <img
                                   src="./"
                                   alt="item-shape"
                                   class="l-menu-main-item-shape-background background-right"
                                 />

                                 <h6 class="l-menu-main-item-text">${element[1].name}</h6>
                                       <img id="btn-comments" class="footbar-comments" src="./" alt="comments-button" />
          <img id="btn-star" class="footbar-star" src="./" alt="star-button" />
          <img id="btn-reserve" class="footbar-reserve" src="./" alt="reserve-button" />
                               </div>
                             </div>`,
  )}
                               
                         </section>
                     </section>`;
  return menuSection;
};

export default menuLayout;
