"use strict";

/*
  WEBWORKS STUDIO — WEEK 8
  Hill Country Trail Guide

  Your job is to implement TWO behaviors:
  1. Accessible difficulty disclosure
  2. Hike-planning form validation and feedback

  Do not use inline onclick/onchange attributes.
  Use addEventListener().
  Test with mouse AND keyboard.
  Keep aria-expanded synchronized with the disclosure state.
*/


// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

// TODO 1:
// Select the disclosure button and the panel it controls.
const difficultyToggle = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");

// TODO 2:
// Listen for activation of the button.
difficultyToggle.addEventListener("click", function () {

// TODO 3:
// Determine whether the panel is currently open/closed.
const isClosed = difficultyPanel.hidden;

// TODO 4:
// Show or hide the panel.
 difficultyPanel.hidden = !isClosed;

// TODO 5:
// Update aria-expanded to match the visible state.
difficultyToggle.setAttribute("aria-expanded", String(isClosed));
});

// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

// TODO 6:
// Select the form and the feedback region.
const hikeForm = document.querySelector("#hike-form");
const formFeedback = document.querySelector("#form-feedback");

// TODO 7:
// Listen for form submission.
hikeForm.addEventListener("submit", function (event) {

// TODO 8:
// Preserve native HTML validation.
// If the form is invalid, allow/report useful validation behavior
// and DO NOT display success feedback.
if (!hikeForm.checkValidity()) {
    hikeForm.reportValidity();
    return;
  }

// TODO 9:
// If the form is valid, prevent a real server submission.
event.preventDefault();

// TODO 10:
// Read the values you need from the form.
const trail = document.querySelector("#trail").value;
const experience = document.querySelector("#experience").value;
const hours = document.querySelector("#hours").value;
const confirmation = document.querySelector("#confirm").checked;

// TODO 11:
// Display useful confirmation/feedback in #form-feedback.
formFeedback.textContent =
  "Your hike plan is ready to review! You selected " +
  trail +
  ", your experience level is " +
  experience +
  ", and you have " +
  (hours === "4" ? "4 or more hours" : hours + " hours") +
  " available. Remember to check the weather and trail conditions before leaving.";
});

// TODO 12:
// Test:
// - empty form
// - partially completed form
// - valid form
// - keyboard-only interaction
// - browser console
