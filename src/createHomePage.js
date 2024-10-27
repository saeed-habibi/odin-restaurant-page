function createHeading(beeImage) {
  const boxOuter = document.createElement("div");
  boxOuter.classList.add("box-outer", "heading");

  const boxInner = document.createElement("div");
  boxInner.classList.add("box-inner");

  const beeLeft = document.createElement("img");
  beeLeft.classList.add("decoration", "bee-left");
  beeLeft.src = beeImage;
  beeLeft.setAttribute("alt", "bee image");

  const beeRight = document.createElement("img");
  beeRight.classList.add("decoration", "bee-right");
  beeRight.src = beeImage;
  beeRight.setAttribute("alt", "bee image");

  const h1 = document.createElement("h1");
  h1.textContent = "Beary's Breakfast Bar";

  boxInner.append(beeLeft, beeRight, h1);
  boxOuter.append(boxInner);

  return boxOuter;
}

function createReview() {
  const boxOuter = document.createElement("div");
  boxOuter.classList.add("box-outer", "review");

  const boxInner = document.createElement("div");
  boxInner.classList.add("box-inner");

  const reviewText = document.createElement("p");
  reviewText.textContent = `Beary's has the best porridge! The atmosphere and customer service
                            make you feel like you are sitting in the middle of the woods,
                            eating like a bear! This is exactly the kind of place that I like to
                            return to again and again.`;

  const customer = document.createElement("h2");
  customer.textContent = "Goldilocks";

  boxInner.append(reviewText, customer);
  boxOuter.append(boxInner);

  return boxOuter;
}

function createHours() {
  const hoursArray = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];

  const boxOuter = document.createElement("div");
  boxOuter.classList.add("box-outer");

  const boxInner = document.createElement("div");
  boxInner.classList.add("box-inner");

  const boxTitle = document.createElement("h2");
  boxTitle.classList.add("box-title");
  boxTitle.textContent = "Hours";

  boxInner.append(boxTitle);
  hoursArray.forEach((hour) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = hour;
    boxInner.append(paragraph);
  });

  boxOuter.append(boxInner);

  return boxOuter;
}

function createLocation() {
  const boxOuter = document.createElement("div");
  boxOuter.classList.add("box-outer");

  const boxInner = document.createElement("div");
  boxInner.classList.add("box-inner");

  const boxTitle = document.createElement("h2");
  boxTitle.classList.add("box-title");
  boxTitle.textContent = "Location";

  const paragraph = document.createElement("p");
  paragraph.textContent = "123 Forest Drive, Forestville, Maine";

  boxInner.append(boxTitle, paragraph);
  boxOuter.append(boxInner);

  return boxOuter;
}

export default function (contentBox, beeImage) {
  contentBox.append(
    createHeading(beeImage),
    createReview(),
    createHours(),
    createLocation()
  );
}
