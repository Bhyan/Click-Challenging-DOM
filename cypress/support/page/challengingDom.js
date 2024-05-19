class ChallengingDom {
  go() {
    cy.visit("/challenging_dom");
  }

  clickButtons() {
    cy.get(".button").then(function (buttons) {
      for (let i = 0; i < buttons.length; i++) {
        cy.get(".button").eq(i).click();
      }
    });
  }

  clickAllEdits() {
    cy.get("a[href='#edit']").then(function (edits) {
      for (let i = 0; i < edits.length; i++) {
        cy.get("a[href='#edit']").eq(i).click();
      }
    });
  }

  clickAllDeletes() {
    cy.get("a[href='#edit']").then(function (edits) {
      for (let i = 0; i < edits.length; i++) {
        cy.get("a[href='#edit']").eq(i).click();
      }
    });
  }
}

export default new ChallengingDom();
