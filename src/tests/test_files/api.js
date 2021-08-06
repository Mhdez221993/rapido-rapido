/**
 *          Api class handles all the communication with the API                  */
/**          GET - https://microverse.abi.api.waldenberginc.com/api/read.php Fetch ALL Records
             GET - https://microverse.abi.api.waldenberginc.com/api/single_read.php/?id=2 Fetch Single Record
*/
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
    this.promise = Promise.resolve(JSON.stringify(abiApiResponse));
    return this.promise;
  }

  async getLikes() {
    this.promise = Promise.resolve(JSON.stringify(microverseApiLikes));
    return this.promise;
  }

  async postLikes() {
    return this.true;
  }

  async getComments() {
    this.promise = Promise.resolve(JSON.stringify(microverseApiComments));
    return this.promise;
  }

  async postComment() {
    return this.true;
  }

  async getReservations() {
    this.promise = Promise.resolve(JSON.stringify(microverseApiReservations));
    return this.promise;
  }

  async postReservation() {
    return this.true;
  }
}

export default Api;
