/**         All the DOM manipulation will be done from this module          */
import { Api } from './api';
import menuLayout from './mock-layouts/menu';
import itemLayout from './mock-layouts/item';
import modalReservationsLayout from './mock-layouts/modal-reserve.js';
import modalCommentsLayout from './mock-layouts/modal-comments.js';
import modalCommentNewLayout from './mock-layouts/modal-comment-new.js';

const fs = require('fs');

window.document.body.innerHTML = fs.readFileSync('src/index.html');
const main = document.getElementById('main');

const api = new Api();
window.menu = [];
window.likes = null;

function addStar(item) {
  const index = window.menu.indexOf(item);
  let count = window.menu[index].stars ? window.menu[index].stars : 0;
  count += 1;
  window.menu[index].stars = count;
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
    window.menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    window.menu[pos].comments = obj;
    return window.menu[pos];
  });
}

function postReservation(reservation) {
  return api.postReservation(reservation).then((response) => response);
}

function fetchReservations(item) {
  return api.getReservations(item.name).then((response) => {
    let pos = null;
    window.menu.forEach((i, index) => {
      if (i.name === item.name) {
        pos = index;
      }
    });
    const obj = JSON.parse(response);
    if (obj.length > 0) {
      window.menu[pos].reservations = obj;
    }

    return window.menu[pos];
  });
}

function displayCommentNew(item) {
  main.insertAdjacentHTML('beforeend', modalCommentNewLayout);
  const submitBtn = window.document.getElementById('btn-new-submit');
  const cancelBtn = window.document.getElementById('btn-new-cancel');
  const textInput = window.document.getElementById('comment-text');
  const nameInput = window.document.getElementById('comment-name');

  submitBtn.addEventListener('click', () => {
    const username = nameInput.value;
    const comment = textInput.value;
    const data = {
      item_id: item.name,
      username,
      comment,
    };
    postComments(data).then((response) => {
      if (response === 'Created') {
        const modal = window.document.getElementById('modal-comments-new');
        main.removeChild(modal);
      }
    });
  });

  cancelBtn.addEventListener('click', () => {
    const modal = window.document.getElementById('modal-comments-new');
    main.removeChild(modal);
  });
}

function displayComments(item) {
  fetchComments(item).then((newItem) => {
    main.insertAdjacentHTML('beforeend', modalCommentsLayout(newItem));
    const newBtn = window.document.getElementById('btn-new');
    const cancelBtn = window.document.getElementById('btn-comment-cancel');
    newBtn.addEventListener('click', () => {
      displayCommentNew(newItem);
    });

    cancelBtn.addEventListener('click', () => {
      const modal = window.document.getElementById('modal-comments');
      main.removeChild(modal);
    });
  });
}

function displayReserve(item) {
  fetchReservations(item).then((newItem) => {
    main.insertAdjacentHTML('beforeend', modalReservationsLayout(newItem));

    const cancelBtn = window.document.getElementById('btn-reserve-cancel');
    cancelBtn.addEventListener('click', () => {
      const modal = window.document.getElementById('modal-reserve');
      main.removeChild(modal);
    });

    const submitBtn = window.document.getElementById('btn-reserve-new');
    submitBtn.addEventListener('click', () => {
      const dateStart = window.document.getElementById('reserve-date-start');
      const dateEnd = window.document.getElementById('reserve-date-end');
      const name = window.document.getElementById('reserve-name');

      const data = {
        item_id: item.name,
        username: name.value,
        date_start: dateStart.value,
        date_end: dateEnd.value,
      };

      postReservation(data).then((response) => {
        if (response === 'Created') {
          const modal = window.document.getElementById('modal-reserve');
          main.removeChild(modal);
        }
      });
    });
  });
}

const displayItem = (item) => {
  const menu = window.document.getElementById('menu');
  // menu.style.display = "none";
  main.insertAdjacentHTML('beforeend', itemLayout(item));
  const commentsBtn = window.document.getElementById('btn-comments');
  const reserveBtn = window.document.getElementById('btn-reserve');
  const closeBtn = window.document.getElementById('btn-close-item');
  const startBtn = window.document.getElementById('btn-star');

  commentsBtn.addEventListener('click', () => {
    displayComments(item);
  });

  startBtn.addEventListener('click', () => {
    const count = addStar(item);
    const starsCount = window.document.getElementById('stars-count');
    starsCount.innerText = count;
  });

  reserveBtn.addEventListener('click', () => {
    displayReserve(item);
  });

  closeBtn.addEventListener('click', () => {
    const itemSection = window.document.getElementById('item');
    const main = window.document.getElementById('main');
    main.removeChild(itemSection);
    menu.style.display = 'block';
  });
};

function displayMenu() {
  main.innerHTML = null;
  main.insertAdjacentHTML('beforeend', menuLayout(window.menu));

  const openItem = window.document.getElementsByClassName(
    'l-menu-main-item-shape',
  );
  Array.from(openItem).forEach((item, index) => {
    item.addEventListener('click', () => {
      window.displayItem(window.menu[index]);
    });
  });
}

function init() {
  displayMenu(window.menu);
}

function testStart() {
  api.refresh().then((response) => {
    window.menu = response;
    api.getLikes().then((response) => {
      window.likes = response;
      if (window.likes.length > 0) {
        window.likes.forEach((item) => {
          window.menu.forEach((i, index) => {
            if (i.name === item.item_id) {
              window.menu[index].stars = item.likes;
            }
          });
        });
      }
    });
    init(window.menu);
  });
}

testStart();

module.exports = {
  testStart,
  displayItem,
  displayComments,
  displayCommentNew,
  displayReserve,
};
