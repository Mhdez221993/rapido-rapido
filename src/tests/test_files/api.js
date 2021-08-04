/**
 *          Api class handles all the communication with the API                  */
/**          GET - https://microverse.abi.api.waldenberginc.com/api/read.php Fetch ALL Records
             GET - https://microverse.abi.api.waldenberginc.com/api/single_read.php/?id=2 Fetch Single Record
*/
import 'whatwg-fetch';

import {
  abiApiResponse,
  microverseApiComments,
  microverseApiLikes,
  microverseApiReservations,
} from './testConstants.js';

class Api {
  constructor() {
    this.menu = [];
    this.microverseApiLikes = microverseApiLikes;
    this.abiApiResponse = abiApiResponse;
    this.microverseApiReservations = microverseApiReservations;
    this.microverseApiComments = microverseApiComments;
  }

  /**         Obtains the record of scores from the API          */
  async refresh() {
    this.promise = Promise.resolve(abiApiResponse);
    return this.promise;
  }

  async getLikes() {
    this.promise = Promise.resolve(microverseApiLikes);
    return this.promise;
  }

  async postLikes(item) {
    const str = JSON.stringify(item);
    const response = await fetch(`${this.postUrl}/apps/${this.appId}/likes`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: str,
    }).then((response) => response.text());

    return response;
  }

  async getComments() {
    this.promise = Promise.resolve(JSON.stringify(microverseApiComments));
    return this.promise;
  }

  async postComment(item) {
    const str = JSON.stringify(item);
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/comments`,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: str,
      },
    ).then((response) => response.text());

    return response;
  }

  async getReservations() {
    this.promise = Promise.resolve(JSON.stringify(microverseApiReservations));
    return this.promise;
  }

  async postReservation(item) {
    const str = JSON.stringify(item);
    const response = await fetch(
      `${this.postUrl}/apps/${this.appId}/reservations/`,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: str,
      },
    ).then((response) => response.text());

    return response;
  }
}

export default Api;
