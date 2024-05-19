import challengingDom from "../support/page/challengingDom";

describe("Click", () => {
  it("click in all buttons", () => {
    challengingDom.go();
    challengingDom.clickButtons();
  });

  it("click in all anchor edits", () => {
    challengingDom.go();
    challengingDom.clickAllEdits();
  });

  it("click in all anchor deletes", () => {
    challengingDom.go();
    challengingDom.clickAllDeletes();
  });
});
