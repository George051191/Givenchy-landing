export class BurgerMenu {
    constructor(navPanel, openStyles) {
        this.openStyles = openStyles;
        this.navPanel = navPanel;

    }

    openMenu() {

        this.navPanel.classList.add(this.openStyles);

    }
    closeMenu() {
        console.log('ffff')
        this.navPanel.classList.remove(this.openStyles);
    }
}