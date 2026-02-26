let shareBtnDesktop = document.getElementById("share-btn-desktop");
let sharePopupDesktop = document.getElementById("share-popup-desktop");

let shareBtnMobile = document.getElementById("share-btn-mobile");
let shareBtnMobileActive = document.getElementById("share-btn-mobile-active");

let profileContainerMobile = document.getElementById(
  "profile-container-mobile",
);
let profileContainerMobileActive = document.getElementById(
  "profile-container-mobile-active",
);

shareBtnDesktop.addEventListener("click", () => {
  sharePopupDesktop.classList.toggle("hidden");
});

shareBtnMobile.addEventListener("click", () => {
  profileContainerMobileActive.classList.toggle("hidden");
  profileContainerMobile.classList.add("hidden");
});

shareBtnMobileActive.addEventListener("click", () => {
  profileContainerMobileActive.classList.toggle("hidden");
  profileContainerMobile.classList.remove("hidden");
});
