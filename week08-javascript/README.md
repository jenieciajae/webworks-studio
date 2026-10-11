# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

I used `querySelector()` to select the button, panel, form, and feedback area so my JavaScript could interact with them.

### Decision 2 — Event Handling

I used a click event for the difficulty button and a submit event for the form.

### Decision 3 — State / DOM Update

The button shows or hides the difficulty information. The form displays a message with the user's selections after a valid submission.

### Decision 4 — Accessibility

I kept `aria-expanded` updated and used the browser's built-in form validation so the page is easier to use.

---

## Testing Notes

### Difficulty Disclosure

* Mouse: Worked correctly
* Keyboard: Worked with Tab, Enter, and Space.
* `aria-expanded`: Updated correctly when opening and closing.
* Console errors: No errors

### Planning Form

* Empty/invalid submission: Browser validation worked 
* Valid submission: Confirmation message displayed correctly
* Keyboard: Form could be submitted using keyboard
* Console errors: No errors

---

## Live Site

[Add GitHub Pages URL here.]