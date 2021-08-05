const modalCommentNewLayout = `<section id="modal-comments-new" class="l-modal">
        <h3 class="l-modal-title">New Comment</h3>
        <section class="modal-list">
        <textarea id="comment-text" placeholder=" Input your text here ...">     
        </textarea>    
        <input id="comment-name" class="comment-new-name" type="text" placeholder="Input your name here" />    
        <h6 class='new-comment-warning'></h6>
        </section>        
        <section class="buttons">
          <button id="btn-new-submit" class="btn-1 green-background">New Comment</button>
          <button id="btn-new-cancel" class="btn-1 cancel">Cancel</button>
        </section>
      </section>`;

export default modalCommentNewLayout;
