const modalReserveLayout = (item) => {
  let template = `<section id="modal-reserve" class="l-modal">
        <h3 class="l-modal-title">Reservations</h3>
        <section class="modal-list">
        </section>
        <section class="new">
          <h5 class="new-title">New Reservation</h5>
          <div class="new-input">
            <input id="reserve-date-start" class="new-reservation-input" type="text" placeholder="Input your date start"/>
          </div>
          <div class="new-input">
            <input id="reserve-date-end" class="new-reservation-input" type="text" placeholder="Input your date end" />
          </div>      
          <div class="new-input">
            <input id="reserve-name" class="new-reservation-input" type="text" placeholder="Input your name"/>
          </div>
        </section>
        <section class="buttons">
          <button id="btn-reserve-new" class="btn-1">Submit</button>
          <button id="btn-reserve-cancel" class="btn-1 cancel">Go Back</button>
        </section>
      </section>`;

  if (item.reservations) {
    template = `<section id="modal-reserve" class="l-modal">
        <h3 class="l-modal-title">Reservations</h3>
        <section class="modal-list">

        ${item.reservations.map((i) => {
          const reservation = `<div class="modal-list-item">
            <h5>${i.date_start}</h5
            -
            <h5>${i.date_end}</h5>
            -
            <h5>${i.username}</h5>
          </div>
        `;
          return reservation;
        })}

        </section>
        <section class="new">
          <h5 class="new-title">New Reservation</h5>
          <div class="new-input">
            <input id="reserve-date-start" class="new-reservation-input" type="text" placeholder="Input your date start"/>
          </div>
          <div class="new-input">
            <input id="reserve-date-end" class="new-reservation-input" type="text" placeholder="Input your date end" />
          </div>      
          <div class="new-input">
            <input id="reserve-name" class="new-reservation-input" type="text" placeholder="Input your name"/>
          </div>
        </section>
        <section class="buttons">
          <button id="btn-reserve-new" class="btn-1">Submit</button>
          <button id="btn-reserve-cancel" class="btn-1 cancel">Go Back</button>
        </section>
      </section>`;
  }

  return template;
};

export default modalReserveLayout;
