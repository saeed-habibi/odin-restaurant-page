function createHeading() {
  const boxOuter = document.createElement("div");
  boxOuter.classList.add("box-outer", "heading");

  const boxInner = document.createElement("div");
  boxInner.classList.add("box-inner");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu Page";

  boxInner.append(h1);
  boxOuter.append(boxInner);

  return boxOuter;
}

export default function (contentBox) {
  contentBox.append(createHeading());
}
