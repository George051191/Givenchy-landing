export class About {
    constructor(array, arrayLastBlock, firstBlockText, secondBlockText, id, classForOriginalText,
        classForBeautyText, classForBeautyAuthorName, thirdBlockText, endBlockText, visibleClass, animatedClass) {
        this.firstBlockText = firstBlockText;
        this.secondBlockText = secondBlockText;
        this.id = id;
        this.classForBeautyText = classForBeautyText;
        this.classForBeautyAuthorName = classForBeautyAuthorName;
        this.thirdBlockText = thirdBlockText;
        this.endBlockText = endBlockText;
        this.array = array;
        this.classForOriginalText = classForOriginalText;
        this.visibleClass = visibleClass;
        this.animatedClass = animatedClass;
    }

    makeBeautyText(specLetter, array, el, specsymb) {
        for (let i = 0; i < array.length; i++) {
            const style = !!array[i].match(/[a-zA-z]/) ? array[i] + i + specLetter : 'stl' + (specsymb + i || i);
            const txt = document.createTextNode(array[i])
            const letter = document.createElement('span');
            letter.classList.add(this.classForOriginalText, style);
            letter.append(txt);
            el.append(letter);
            setTimeout(() => document.querySelector(`.${style}`).classList.add(this.classForBeautyText), i * 10)
        }
        el.classList.add(this.classForBeautyAuthorName)
    }

    makeTextScale(el) {
        el.classList.add(this.visibleClass, this.animatedClass)
    }



}