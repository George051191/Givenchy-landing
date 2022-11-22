export class BurgerMenu {
    constructor(navPanel, openStyles) {
        this.openStyles = openStyles;
        this.navPanel = navPanel;

    }

    openMenu() {
        this.navPanel.classList.add(this.openStyles);
    }
    closeMenu() {
        this.navPanel.classList.remove(this.openStyles);
    }
}