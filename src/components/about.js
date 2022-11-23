export class About {
    constructor(firstBlockTitle, firstBlockText, secondBlockText, thirdBlockText, endBlockText) {
        this.firstBlockTitle = firstBlockTitle;
        this.firstBlockText = firstBlockText;
        this.secondBlockText = secondBlockText;
        this.thirdBlockText = thirdBlockText;
        this.endBlockText = endBlockText;
    }



    pushText() {
        if (window.pageYOffset > 90) {
            this.firstBlockText.classList.add('about_type_visible')
        }
        if (window.pageYOffset > 400) {
            this.secondBlockText.classList.add('about_type_visible')
        }

    }
}