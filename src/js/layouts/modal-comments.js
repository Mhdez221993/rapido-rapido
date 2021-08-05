const modalCommentsLayout = (item) => {
  let newItem = RemovEmptyCooment(item.comments);
  let template = `<section id="modal-comments" class="l-modal">
        <h3 class="l-modal-title">Comments</h3>
        <section class="modal-list">
        </section>        
        <section class="buttons">
          <button id="btn-new" class="btn-1 green-background">New Comment</button>
          <button id="btn-comment-cancel" class="btn-1 cancel">Cancel</button>
        </section>
      </section>`;

  if (item.comments.length > 0) {
    template = `<section id="modal-comments" class="l-modal">
        <h3 class="l-modal-title">Comments</h3>
        <section class="modal-list">
        ${newItem.map(
      (i) => `<div class="modal-list-item  list-item-comment">
            <h5>${i.username}</h5>
            <h5 class="comment-text">${i.comment}</h5>
          </div>`,
    )
    .join('')}
        </section>        
        <section class="buttons">
          <button id="btn-new" class="btn-1 green-background">New Comment</button>
          <button id="btn-comment-cancel" class="btn-1 cancel">Go Back</button>
        </section>
      </section>
`;
  }
  return template;
};

const RemovEmptyCooment = item => {
  return item.filter(v => !v.comment.trim() !== true || v.comment.length < 5)
}

export default modalCommentsLayout;
