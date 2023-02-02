setTimeout(() => {
  console.clear();
}, 1000);

// ? Declaring all consts
const burger = document.getElementById("hamburger");
const burgerSubHead = document.getElementById("hamburger-subheader");

const companySubHeading = document.getElementById("company");
const portfolioSubHeading = document.getElementById("portfolio");
const newsSubHeading = document.getElementById("news-and-events");

const companyDropdown = document.getElementById("company-subheader");
const portfolioDropdown = document.getElementById("portfolio-subheader");
const newsDropdown = document.getElementById("news-and-events-subheader");

const companyHamburgerSubHeading = document.getElementById(
  "company-hamburger-subheader"
);
const portfolioHamburgerSubHeading = document.getElementById(
  "portfolio-hamburger-subheader"
);
const newsHamburgerSubHeading = document.getElementById(
  "news-and-events-hamburger-subheader"
);
const companyHamburgerSubHeadingChild = document.getElementById(
  "company-hamburger-subheader-child"
);
const portfolioHamburgerSubHeadingChild = document.getElementById(
  "portfolio-hamburger-subheader-child"
);
const newsHamburgerSubHeadingChild = document.getElementById(
  "news-and-events-hamburger-subheader-child"
);

const companyActiveDomElems = [companySubHeading, companyDropdown];
const portfolioActiveDomElems = [portfolioSubHeading, portfolioDropdown];
const newsActiveDomElems = [newsSubHeading, newsDropdown];

// ? this mutes any front-end effects from happening on load
setTimeout(() => {
  companyDropdown?.classList.remove("onload-mute-effect");
  portfolioDropdown?.classList.remove("onload-mute-effect");
  newsDropdown?.classList.remove("onload-mute-effect");
  burgerSubHead?.classList.remove("onload-mute-effect");
}, 1000);

let hamburgerClicked = true;
burger!.onclick = () => {
  hamburgerClicked = hamburgerClicked ? false : true;
  if (!hamburgerClicked) {
    burger?.classList.add("active");
    burgerSubHead?.classList.add("active");
  }
  if (hamburgerClicked) {
    burger?.classList.remove("active");
    burgerSubHead?.classList.remove("active");
  }
};

function classAssignerHelper(elem, req) {
  if (req === "add") {
    elem.forEach((e) => {
      e.classList.add("active");
    });
  }

  if (req === "remove") {
    elem.forEach((e) => {
      e.classList.remove("active");
    });
  }
}

// ? Company sub-heading hover controls
companySubHeading!.onmouseover = () => {
  classAssignerHelper(companyActiveDomElems, "add");
};
companySubHeading!.onmouseleave = () => {
  classAssignerHelper(companyActiveDomElems, "remove");
};
companyDropdown!.onmouseover = () => {
  classAssignerHelper(companyActiveDomElems, "add");
};
companyDropdown!.onmouseleave = () => {
  classAssignerHelper(companyActiveDomElems, "remove");
};

// ? Portfolio sub-heading hover controls
portfolioSubHeading!.onmouseover = () => {
  classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioSubHeading!.onmouseleave = () => {
  classAssignerHelper(portfolioActiveDomElems, "remove");
};
portfolioDropdown!.onmouseover = () => {
  classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioDropdown!.onmouseleave = () => {
  classAssignerHelper(portfolioActiveDomElems, "remove");
};

// ? News and Events sub-heading hover controls
newsSubHeading!.onmouseover = () => {
  classAssignerHelper(newsActiveDomElems, "add");
};
newsSubHeading!.onmouseleave = () => {
  classAssignerHelper(newsActiveDomElems, "remove");
};
newsDropdown!.onmouseover = () => {
  classAssignerHelper(newsActiveDomElems, "add");
};
newsDropdown!.onmouseleave = () => {
  classAssignerHelper(newsActiveDomElems, "remove");
};

// ? Company sub-heading onclick controls
let companySubClicked = true;
companyHamburgerSubHeading!.onclick = () => {
  companySubClicked = companySubClicked ? false : true;
  if (!companySubClicked) {
    companyHamburgerSubHeadingChild?.classList.add("active");
  }
  if (companySubClicked) {
    companyHamburgerSubHeadingChild?.classList.remove("active");
  }
};
// ? Portfolio sub-heading onclick controls
let portfolioSubClicked = true;
portfolioHamburgerSubHeading!.onclick = () => {
  portfolioSubClicked = portfolioSubClicked ? false : true;
  if (!portfolioSubClicked) {
    portfolioHamburgerSubHeadingChild?.classList.add("active");
  }
  if (portfolioSubClicked) {
    portfolioHamburgerSubHeadingChild?.classList.remove("active");
  }
};
// ? News and Events sub-heading onclick controls
let newsSubClicked = true;
newsHamburgerSubHeading!.onclick = () => {
  newsSubClicked = newsSubClicked ? false : true;
  if (!newsSubClicked) {
    newsHamburgerSubHeadingChild?.classList.add("active");
  }
  if (newsSubClicked) {
    newsHamburgerSubHeadingChild?.classList.remove("active");
  }
};
