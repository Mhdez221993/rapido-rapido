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
  api.postLikes(data).then((response) => response);
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
  const commentsModal = document.getElementById("modal-comments");
  commentsModal.style.visibility = "hidden";
  main.insertAdjacentHTML("beforeend", modalCommentNewLayout);
  const submitBtn = document.getElementById("btn-new-submit");
  const cancelBtn = document.getElementById("btn-new-cancel");
  const textInput = document.getElementById("comment-text");
  const nameInput = document.getElementById("comment-name");

  submitBtn.addEventListener("click", () => {
    const username = nameInput.value;
    const comment = textInput.value;

    if (comment.length < 5) {
      alert("Please provide a valid comment");
      return;
    }
    if (username.length < 3) {
      nameInput.value = "";
      alert("Please provide a valid name");
      return;
    }

    const data = {
      item_id: item.name,
      username,
      comment,
    };

    let error = "";

    if (!username) {
      error += "username,";
    }
    if (!comment) {
      error += "comment,";
    }

    if (username && comment) {
      postComments(data).then((response) => {
        if (response === "Created") {
          const modal = document.getElementById("modal-comments-new");
          main.removeChild(modal);
          commentsModal.style.visibility = "visible";
        }
      });
    } else {
      const warning = document.getElementsByClassName("new-comment-warning")[0];
      warning.textContent = `Check ${error} it is not correct`;
      warning.style.display = "block";
    }
  });

  cancelBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-comments-new");
    main.removeChild(modal);
    commentsModal.style.visibility = "visible";
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
      const dateStart = document.getElementById("reserve-date-start").value;
      const dateEnd = document.getElementById("reserve-date-end").value;
      const name = document.getElementById("reserve-name").value;

      const isValidDateStart = Date.parse(dateStart);
      const isValidDateEnd = Date.parse(dateEnd);
      const isValidName = !!name;
      console.log(dateStart);
      console.log(dateEnd);
      console.log(isValidName);

      let error = "";
      if (!isValidDateStart) {
        error += "start date,";
      }
      if (!isValidDateEnd) {
        error += "end date,";
      }
      if (!isValidName) {
        error += "name,";
      }

      if (isValidDateEnd && isValidDateStart && isValidName) {
        const data = {
          item_id: item.name,
          username: name,
          date_start: dateStart,
          date_end: dateEnd,
        };

        postReservation(data).then((response) => {
          console.log(response);
          if (response === "Created") {
            const modal = document.getElementById("modal-reserve");
            main.removeChild(modal);
          }
        });
      } else {
        const warning = document.getElementsByClassName(
          "new-reserve-warning"
        )[0];
        warning.textContent = `Check ${error} it is not correct`;
        warning.style.display = "block";
      }
    });
  });
}

function displayItem(item) {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
  main.insertAdjacentHTML("beforeend", itemLayout(item));
  const closeBtn = document.getElementById("btn-close-item");

  closeBtn.addEventListener("click", () => {
    const itemSection = document.getElementById("item");
    const modals = document.getElementsByClassName("l-modal");
    const main = document.getElementById("main");
    main.removeChild(itemSection);
    Array.from(modals).forEach((item) => {
      main.removeChild(item);
    });
    menu.style.display = "block";
  });
}

function displayMenu(menu) {
  main.innerHTML = null;
  main.insertAdjacentHTML("beforeend", menuLayout(menu));
  const items = document.getElementsByClassName("l-menu-main-item");
  Array.from(items).forEach((item, index) => {
    const commentsBtn = document.getElementById(`btn-comments-${item.id}`);
    const reserveBtn = document.getElementById(`btn-reserve-${item.id}`);
    const starBtn = document.getElementById(`btn-star-${item.id}`);

    commentsBtn.addEventListener("click", () => {
      displayItem(menu[index]);
      displayComments(menu[index]);
    });

    starBtn.addEventListener("click", () => {
      const count = addStar(menu[index]);
      const starsCount = document.getElementById(`stars-count-${item.id}`);
      starsCount.innerText = count;
    });

    reserveBtn.addEventListener("click", () => {
      displayItem(menu[index]);
      displayReserve(menu[index]);
    });
  });
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
