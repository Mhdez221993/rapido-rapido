import shadow from '../../images/shadowTr.png';
import itemShape from '../../images/item-shape.svg';
import itemShapeBackground from '../../images/item-shape-background.svg';

const menuLayout = (menu) => {
  const menuPairs = menu.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  const newMenuPairs =  []
  menu.flatMap(el => newMenuPairs.push(el))


  const menuSection = `<section id="menu" class="l-menu">
                       <header class="l-menu-hero">
                          <h1 class="l-menu-hero__title-1">RAPIDO!</h1>
                          <h1 class="l-menu-hero__title-2">RAPIDO!</h1>
                          <h5 class="l-menu-hero__subtitle">Fast Food Restaurant</h5>
                        </header>
                        <section class="l-menu-main">   
                                               
                          ${newMenuPairs.map( (element) => `
                            <div class="l-menu-main-group">
                                 <img
                                    src=${element.image} alt="burger" class="l-menu-main-item-img"
                                  />
                                  <img
                                    src=${shadow} alt="shadow" class="l-menu-main-item-shadow shadow-left"
                                  />
                                 <img
                                   id="burger" src=${itemShape} alt="item-shape" class="l-menu-main-item-shape"
                                 />
                                 ${ /*

                                 <img
                                   src=${itemShapeBackground}
                                   alt="item-shape-background"
                                   class="l-menu-main-item-shape-background background-left"
                                 />

                                 <h6 class="l-menu-main-item-text">${element.name}</h6>
                                 */''}
                            </div>`
                          ).join('')}
                        </section>
                     </section>`;
  return menuSection;
};

export default menuLayout;
