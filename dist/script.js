// setTimeout(() => {
//   console.clear();
// }, 1000);
// ? Declaring all consts
var burger = document.getElementById("hamburger");
var burgerSubHead = document.getElementById("hamburger-subheader");
var companySubHeading = document.getElementById("company");
var portfolioSubHeading = document.getElementById("portfolio");
var newsSubHeading = document.getElementById("news-and-events");
var companyDropdown = document.getElementById("company-subheader");
var portfolioDropdown = document.getElementById("portfolio-subheader");
var newsDropdown = document.getElementById("news-and-events-subheader");
var companyHamburgerSubHeading = document.getElementById("company-hamburger-subheader");
var portfolioHamburgerSubHeading = document.getElementById("portfolio-hamburger-subheader");
var newsHamburgerSubHeading = document.getElementById("news-and-events-hamburger-subheader");
var companyHamburgerSubHeadingChild = document.getElementById("company-hamburger-subheader-child");
var portfolioHamburgerSubHeadingChild = document.getElementById("portfolio-hamburger-subheader-child");
var newsHamburgerSubHeadingChild = document.getElementById("news-and-events-hamburger-subheader-child");
var companyActiveDomElems = [companySubHeading, companyDropdown];
var portfolioActiveDomElems = [portfolioSubHeading, portfolioDropdown];
var newsActiveDomElems = [newsSubHeading, newsDropdown];
// ? Welcome Modal Click function
var welcomeModal = document.getElementById("welcome-modal");
var welcomeModalButton = document.getElementById("welcome-modal__button");
welcomeModalButton.onclick = function () {
    console.log("yo");
    welcomeModal.classList.add("hidden");
};
// ? this mutes any front-end effects from happening on load
setTimeout(function () {
    companyDropdown === null || companyDropdown === void 0 ? void 0 : companyDropdown.classList.remove("onload-mute-effect");
    portfolioDropdown === null || portfolioDropdown === void 0 ? void 0 : portfolioDropdown.classList.remove("onload-mute-effect");
    newsDropdown === null || newsDropdown === void 0 ? void 0 : newsDropdown.classList.remove("onload-mute-effect");
    burgerSubHead === null || burgerSubHead === void 0 ? void 0 : burgerSubHead.classList.remove("onload-mute-effect");
}, 1000);
var hamburgerClicked = true;
burger.onclick = function () {
    hamburgerClicked = hamburgerClicked ? false : true;
    if (!hamburgerClicked) {
        burger === null || burger === void 0 ? void 0 : burger.classList.add("active");
        burgerSubHead === null || burgerSubHead === void 0 ? void 0 : burgerSubHead.classList.add("active");
    }
    if (hamburgerClicked) {
        burger === null || burger === void 0 ? void 0 : burger.classList.remove("active");
        burgerSubHead === null || burgerSubHead === void 0 ? void 0 : burgerSubHead.classList.remove("active");
    }
};
function classAssignerHelper(elem, req) {
    if (req === "add") {
        elem.forEach(function (e) {
            e.classList.add("active");
        });
    }
    if (req === "remove") {
        elem.forEach(function (e) {
            e.classList.remove("active");
        });
    }
}
// ? Company sub-heading hover controls
companySubHeading.onmouseover = function () {
    classAssignerHelper(companyActiveDomElems, "add");
};
companySubHeading.onmouseleave = function () {
    classAssignerHelper(companyActiveDomElems, "remove");
};
companyDropdown.onmouseover = function () {
    classAssignerHelper(companyActiveDomElems, "add");
};
companyDropdown.onmouseleave = function () {
    classAssignerHelper(companyActiveDomElems, "remove");
};
// ? Portfolio sub-heading hover controls
portfolioSubHeading.onmouseover = function () {
    classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioSubHeading.onmouseleave = function () {
    classAssignerHelper(portfolioActiveDomElems, "remove");
};
portfolioDropdown.onmouseover = function () {
    classAssignerHelper(portfolioActiveDomElems, "add");
};
portfolioDropdown.onmouseleave = function () {
    classAssignerHelper(portfolioActiveDomElems, "remove");
};
// ? News and Events sub-heading hover controls
newsSubHeading.onmouseover = function () {
    classAssignerHelper(newsActiveDomElems, "add");
};
newsSubHeading.onmouseleave = function () {
    classAssignerHelper(newsActiveDomElems, "remove");
};
newsDropdown.onmouseover = function () {
    classAssignerHelper(newsActiveDomElems, "add");
};
newsDropdown.onmouseleave = function () {
    classAssignerHelper(newsActiveDomElems, "remove");
};
// ? Company sub-heading onclick controls
var companySubClicked = true;
companyHamburgerSubHeading.onclick = function () {
    companySubClicked = companySubClicked ? false : true;
    if (!companySubClicked) {
        companyHamburgerSubHeadingChild === null || companyHamburgerSubHeadingChild === void 0 ? void 0 : companyHamburgerSubHeadingChild.classList.add("active");
    }
    if (companySubClicked) {
        companyHamburgerSubHeadingChild === null || companyHamburgerSubHeadingChild === void 0 ? void 0 : companyHamburgerSubHeadingChild.classList.remove("active");
    }
};
// ? Portfolio sub-heading onclick controls
var portfolioSubClicked = true;
portfolioHamburgerSubHeading.onclick = function () {
    portfolioSubClicked = portfolioSubClicked ? false : true;
    if (!portfolioSubClicked) {
        portfolioHamburgerSubHeadingChild === null || portfolioHamburgerSubHeadingChild === void 0 ? void 0 : portfolioHamburgerSubHeadingChild.classList.add("active");
    }
    if (portfolioSubClicked) {
        portfolioHamburgerSubHeadingChild === null || portfolioHamburgerSubHeadingChild === void 0 ? void 0 : portfolioHamburgerSubHeadingChild.classList.remove("active");
    }
};
// ? News and Events sub-heading onclick controls
var newsSubClicked = true;
newsHamburgerSubHeading.onclick = function () {
    newsSubClicked = newsSubClicked ? false : true;
    if (!newsSubClicked) {
        newsHamburgerSubHeadingChild === null || newsHamburgerSubHeadingChild === void 0 ? void 0 : newsHamburgerSubHeadingChild.classList.add("active");
    }
    if (newsSubClicked) {
        newsHamburgerSubHeadingChild === null || newsHamburgerSubHeadingChild === void 0 ? void 0 : newsHamburgerSubHeadingChild.classList.remove("active");
    }
};
