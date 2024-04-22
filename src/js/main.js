var checkAllTrigger = document.querySelector(".allchecked");

var checkboxes = document.querySelectorAll(".switch input");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

checkAllTrigger.addEventListener("click", checkAll);

// ------------------------------------------------------------------

var checkAllTrigger = document.querySelector(".allunchecked");

var checkboxes = document.querySelectorAll(".switch input");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

checkAllTrigger.addEventListener("click", checkAll);
