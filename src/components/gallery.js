export class Gallery {
    constructor(cardsArray, imageArray) {
        this.cardsArray = cardsArray;
        this.imageArray = imageArray;
    }

    pushImages() {
        let arr = [];
        while (arr.length < 3) {

            const idx = Math.floor(Math.random() * this.imageArray.length);

            const nodeIdx = Math.floor(Math.random() * this.cardsArray.length);

            this.cardsArray[nodeIdx].src = this.imageArray[idx];
            arr.push('1')
        }
    }


}