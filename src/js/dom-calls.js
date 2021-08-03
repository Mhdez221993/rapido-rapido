/**         All the DOM manipulation will be done from this module          */
import Api from "./api.js";
import landingLayout from "./layouts/landing.js";
import menuLayout from "./layouts/menu.js";
import itemLayout from "./layouts/item.js";
import modalReservationsLayout from "./layouts/modal-reserve.js";
import modalCommentsLayout from "./layouts/modal-comments.js";
import modalCommentNewLayout from "./layouts/modal-comment-new.js";

/*          Initializes the active components                               */
const main = document.getElementById("main");

const api = new Api();
let menu = [];
let likes = null;

function addStar(item) {
  const index = menu.indexOf(item);
  let count = menu[index].stars ? menu[index].stars : 0;
  count += 1;
  menu[index].stars = count;
  const data = { item_id: item.name };
  api.postLikes(data).then((response) => {
    if (response === "Created") {
      localStorage(menu);
    }
  });
  return count;
}

function postComments(comment) {
  return api.postComment(comment).then((response) => response);
}

function fetchComments(item) {
  return api.getComments(item.name).then((response) => {
    let pos = null;
    menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    menu[pos].comments = obj;
    return menu[pos];
  });
}

function postReservation(reservation) {
  return api.postReservation(reservation).then((response) => response);
}

function fetchReservations(item) {
  return api.getReservations(item.name).then((response) => {
    let pos = null;
    menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    if (obj.length > 0) {
      menu[pos].reservations = obj;
    }

    return menu[pos];
  });
}

function displayCommentNew(item) {
  main.insertAdjacentHTML("beforeend", modalCommentNewLayout);
  const submitBtn = document.getElementById("btn-new-submit");
  const cancelBtn = document.getElementById("btn-new-cancel");
  const textInput = document.getElementById("comment-text");
  const nameInput = document.getElementById("comment-name");

  submitBtn.addEventListener("click", () => {
    const username = nameInput.value;
    const comment = textInput.value;
    const data = {
      item_id: item.name,
      username,
      comment,
    };
    postComments(data).then((response) => {
      if (response === "Created") {
        const modal = document.getElementById("modal-comments-new");
        main.removeChild(modal);
      }
    });
  });

  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-comments-new");
    main.removeChild(modal);
  });
}

function displayComments(item) {
  fetchComments(item).then((newItem) => {
    main.insertAdjacentHTML("beforeend", modalCommentsLayout(newItem));
    const newBtn = document.getElementById("btn-new");
    const cancelBtn = document.getElementById("btn-comment-cancel");
    newBtn.addEventListener("click", () => {
      displayCommentNew(newItem);
    });

    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("modal-comments");
      main.removeChild(modal);
    });
  });
}

function displayReserve(item) {
  fetchReservations(item).then((newItem) => {
    main.insertAdjacentHTML("beforeend", modalReservationsLayout(newItem));

    const cancelBtn = document.getElementById("btn-reserve-cancel");
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("modal-reserve");
      main.removeChild(modal);
    });

    const submitBtn = document.getElementById("btn-reserve-new");
    submitBtn.addEventListener("click", () => {
      const dateStart = document.getElementById("reserve-date-start");
      const dateEnd = document.getElementById("reserve-date-end");
      const name = document.getElementById("reserve-name");

      const data = {
        item_id: item.name,
        username: name.value,
        date_start: dateStart.value,
        date_end: dateEnd.value,
      };

      postReservation(data).then((response) => {
        if (response === "Created") {
          const modal = document.getElementById("modal-reserve");
          main.removeChild(modal);
        }
      });
    });
  });
}

function displayItem(item) {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
  main.insertAdjacentHTML("beforeend", itemLayout(item));
  const commentsBtn = document.getElementById("btn-comments");
  const reserveBtn = document.getElementById("btn-reserve");
  const closeBtn = document.getElementById("btn-close-item");
  const startBtn = document.getElementById("btn-star");

  commentsBtn.addEventListener("click", () => {
    displayComments(item);
  });

  startBtn.addEventListener("click", () => {
    const count = addStar(item);
    const starsCount = document.getElementById("stars-count");
    starsCount.innerText = count;
  });

  reserveBtn.addEventListener("click", () => {
    displayReserve(item);
  });

  closeBtn.addEventListener("click", () => {
    const itemSection = document.getElementById("item");
    const main = document.getElementById("main");
    main.removeChild(itemSection);
    menu.style.display = "block";
  });
}

function displayMenu(menu) {
  main.innerHTML = null;
  main.insertAdjacentHTML("beforeend", menuLayout(menu));
  const openItem = document.getElementsByClassName("l-menu-main-item-shape");
  Array.from(openItem).forEach((item, index) => {
    item.addEventListener("click", () => {
      displayItem(menu[index]);
    });
  });
}

function init(menu) {
  main.insertAdjacentHTML("beforeend", landingLayout);
  const enterBtn = document.getElementById("arrow-left-hero");
  enterBtn.addEventListener("click", () => {
    displayMenu(menu);
  });
}

api.refresh().then((response) => {
  menu = response;
  api.getLikes().then((response) => {
    likes = response;
    likes.forEach((item) => {
      menu.forEach((i, index) => {
        if (i.name === item.item_id) {
          menu[index].stars = item.likes;
        }
      });
    });
  });
  init(menu);
});
