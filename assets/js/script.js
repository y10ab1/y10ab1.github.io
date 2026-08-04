'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// add click event to all modal items
if (testimonialsItem.length > 0) {
  for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
      }

    });

  }
}

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
if (selectItems.length > 0 && selectValue && select) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length > 0 && selectValue) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (formInputs.length > 0 && form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // First, remove active class from all navigation links and pages
    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }
    for (let k = 0; k < pages.length; k++) {
      pages[k].classList.remove("active");
    }

    // Then add active class to clicked navigation link
    this.classList.add("active");

    // Find and show the corresponding page
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
        break;
      }
    }

  });
}

// Programmatically switch to a page by its data-page name (e.g. "publications").
// Keeps nav links and page "active" states in sync with the click handler above.
const activatePage = function (pageName) {
  let matched = false;

  for (let k = 0; k < pages.length; k++) {
    if (pages[k].dataset.page === pageName) {
      pages[k].classList.add("active");
      matched = true;
    } else {
      pages[k].classList.remove("active");
    }
  }

  for (let k = 0; k < navigationLinks.length; k++) {
    if (navigationLinks[k].innerHTML.toLowerCase() === pageName) {
      navigationLinks[k].classList.add("active");
    } else {
      navigationLinks[k].classList.remove("active");
    }
  }

  return matched;
};

// Handle in-page citation links (e.g. [1] -> #publication-1). Because pages are
// hidden via the SPA navigation above, a plain hash link cannot scroll to a
// target inside a non-active page. Switch to the Publications page first, then
// scroll the referenced entry into view.
const scrollToHashTarget = function (hash) {
  if (!hash || hash.charAt(0) !== "#") return false;

  const target = document.getElementById(hash.slice(1));
  if (!target) return false;

  // Make sure the page containing the target is active before scrolling.
  const parentPage = target.closest("[data-page]");
  if (parentPage) activatePage(parentPage.dataset.page);

  // Defer to the next frame so layout reflects the now-visible page.
  requestAnimationFrame(function () {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  return true;
};

document.addEventListener("click", function (event) {
  const link = event.target.closest('a[href^="#publication-"]');
  if (!link) return;

  const hash = link.getAttribute("href");
  if (scrollToHashTarget(hash)) {
    event.preventDefault();
    // Keep the URL hash in sync without triggering the browser's default jump.
    history.replaceState(null, "", hash);
  }
});

// Handle direct visits / reloads with a #publication-* hash already in the URL.
window.addEventListener("load", function () {
  if (location.hash.indexOf("#publication-") === 0) {
    scrollToHashTarget(location.hash);
  }
});