import burger from "../../images/burgerIllustration.png";
import hotdog from "../../images/hotdogIllustration.png";
import doughnut from "../../images/donutIllustration.png";
import pizza from "../../images/pizzaIllustration.png";
import drink from "../../images/drinkIllustration.png";
import fries from "../../images/friesIllustration.png";
import shadow from "../../images/shadowIllustration.png";
import arrow from "../../images/down-arrow.svg";

const landingLayout = `<section class="l-landing">
        <section class="l-landing-hero">
          <h1 class="l-landing-hero__title-1">RAPIDO!</h1>
          <h1 class="l-landing-hero__title-2">RAPIDO!</h1>
          <h5 class="l-landing-hero__subtitle">Fast Food Restaurant</h5>
        </section>
        <section class="l-landing-hero__main">
          <img src=${burger} class="l-landing-hero__main--image img-burger" alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-burger"
            alt="main-image-shadow"
          />
          <img src=${hotdog} class="l-landing-hero__main--image img-hotdog " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-hotdog"
            alt="main-image-shadow"
          />
          <img src=${doughnut} class="l-landing-hero__main--image img-doughnut " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-doughnut"
            alt="main-image-shadow"
          />     
          <img src=${hotdog} class="l-landing-hero__main--image img-hotdog " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-hotdog"
            alt="main-image-shadow"
          />     
          <img src=${pizza} class="l-landing-hero__main--image img-pizza " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-pizza"
            alt="main-image-shadow"
          />  
          <img src=${drink} class="l-landing-hero__main--image img-drink " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-drink"
            alt="main-image-shadow"
          />  
          <img src=${fries} class="l-landing-hero__main--image img-fries " alt="main-image" />
          <img
            src=${shadow}
            class="l-landing-hero__main--shadow shadow-fries"
            alt="main-image-shadow"
          />              
        </section>
        <section id="l-landing-hero__action" class="l-landing-hero__action">
          <h2 class="landing-text">ENTER</h2>
          <img class="landing-image" src=${arrow} id="arrow-left-hero" alt="arrow-left" />
        </section>
      </section>`;

export default landingLayout;
