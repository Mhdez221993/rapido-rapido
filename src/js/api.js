/**
 *          Api class handles all the communication with the API                  */
/**          GET - https://microverse.abi.api.waldenberginc.com/api/read.php Fetch ALL Records
             GET - https://microverse.abi.api.waldenberginc.com/api/single_read.php/?id=2 Fetch Single Record
*/

class Api {
  constructor() {
    this.fetchUrl = "https://microverse.abi.api.waldenberginc.com/api";
    this.postUrl =
      "https://guarded-basin-44458.herokuapp.com/https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
    this.menu = [];
    this.appId = "9hvvjEsfhlPhvERRXvIH";
  }

  /**         Obtains the record of scores from the API          */
  async refresh() {
    const response = await fetch(`${this.fetchUrl}/read.php`)
      .then((response) => response.json())
      .then((json) => {
        this.menu = json.body;
        return this.menu;
      });
    return response;
  }

  async getLikes() {
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/likes`
    ).then((response) => response.text());
    return JSON.parse(response);
  }

  async postLikes(item) {
    const str = JSON.stringify(item);
    const response = await fetch(`${this.postUrl}/apps/${this.appId}/likes`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: str,
    }).then((response) => response.text());

    return response;
  }

  async getComments(item) {
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/comments?item_id=${item}`
    ).then((response) => response.text());
    return response;
  }

  async postComment(item) {
    const str = JSON.stringify(item);
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/comments`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-type": "Application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: str,
      }
    ).then((response) => response.text());

    return response;
  }

  async getReservations(item) {
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/reservations?item_id=${item}`
    ).then((response) => response.text());
    return response;
  }

  async postReservation(item) {
    const str = JSON.stringify(item);
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/reservations/`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-type": "Application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: str,
      }
    ).then((response) => response.text());

    return response;
  }
}

export default Api;
