import { BaseController } from "./Base/BaseController.js";

export class UnderConstructionController extends BaseController{
    #_pageWrapper;
    constructor(){
        super("Smart Skep");
    }

    Init =()=>{
        this.#_pageWrapper = document.querySelector(".under-construction-page-wrapper");

        this.#implementCountdown();
    }

    #implementCountdown = () => {
        setInterval(this.#updateCountdown, 1000);
        this.#updateCountdown();
    }

    #updateCountdown =() => {
         // Set the end date to December 14, 2023, 00:00:00 in West African Time (UTC+1)
      const endDate = new Date("December 14, 2023 00:00:00 GMT+0100");

      const now = new Date();
      const timeRemaining = endDate - now;
      let countDown = [0,0,0,0];

      if (timeRemaining <= 0) {  
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      countDown = [days, hours, minutes, seconds];
      const countDownElements = this.#_pageWrapper.querySelectorAll(".count-down .count-down-number");

      countDownElements.forEach( (element, index) => {
        element.textContent = this.#formatTwoDigits(countDown[index]);
      });
    }

    #formatTwoDigits = (value) => {
        return value < 10 ? '0' + value : value;
    }

    #getEndDate = () => {
        const endDate = new Date("December 15, 2023 00:00:00 GMT+0100");
    }
}