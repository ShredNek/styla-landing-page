const burger = document.getElementById("hamburger");
const burgerSubHead = document.getElementById("hamburger-sub-header");

const companySubHeading = document.getElementById("company");
const portfolioSubHeading = document.getElementById("portfolio");
const newsSubHeading = document.getElementById("news-and-events");

const companyDropdown = document.getElementById("company-subheader");
const portfolioDropdown = document.getElementById("portfolio-subheader");
const newsDropdown = document.getElementById("news-and-events-subheader");

const companyActiveDomElems = [companySubHeading, companyDropdown];
const portfolioActiveDomElems = [portfolioSubHeading, portfolioDropdown];
const newsActiveDomElems = [newsSubHeading, newsDropdown];

// ? this mutes any front-end effects from happening on load
setTimeout(() => {
  companyDropdown.classList.remove("onload-mute-effect");
  burgerSubHead.classList.remove("onload-mute-effect");
}, 1000);

let clicked = false;
burger.onclick = () => {
  clicked = clicked ? false : true;
  if (!clicked) {
    burger.classList.add("active");
    burgerSubHead.classList.add("active");
  }
  if (clicked) {
    burger.classList.remove("active");
    burgerSubHead.classList.remove("active");
  }
};

function classAssignerHelper(elems, req) {
  if (req === "add") {
    elems.forEach((e) => {
      e.classList.add("active");
    });
  }

  if (req === "remove") {
    elems.forEach((e) => {
      e.classList.remove("active");
    });
  }
}

// ? Company sub-heading hover controls
companySubHeading.onmouseover = () => {
  classAssignerHelper(companyActiveDomElems, "add");
};
companySubHeading.onmouseleave = () => {
  classAssignerHelper(companyActiveDomElems, "remove");
};
companyDropdown.onmouseover = () => {
  classAssignerHelper(companyActiveDomElems, "add");
};
companyDropdown.onmouseleave = () => {
  classAssignerHelper(companyActiveDomElems, "remove");
};

// ? Portfolio sub-heading hover controls
portfolioSubHeading.onmouseover = () => {
  classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioSubHeading.onmouseleave = () => {
  classAssignerHelper(portfolioActiveDomElems, "remove");
};
portfolioDropdown.onmouseover = () => {
  classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioDropdown.onmouseleave = () => {
  classAssignerHelper(portfolioActiveDomElems, "remove");
};

// ? News and Events sub-heading hover controls
newsSubHeading.onmouseover = () => {
  classAssignerHelper(newsActiveDomElems, "add");
};
newsSubHeading.onmouseleave = () => {
  classAssignerHelper(newsActiveDomElems, "remove");
};
newsDropdown.onmouseover = () => {
  classAssignerHelper(newsActiveDomElems, "add");
};
newsDropdown.onmouseleave = () => {
  classAssignerHelper(newsActiveDomElems, "remove");
};
