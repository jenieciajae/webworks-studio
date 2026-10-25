# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

Briefly describe what you refactored and added.

For this project, I changed the Community Connect service directory to use React components instead of repeating the same code for every card. I used props and map() to display the services and added filters so users can choose which category they want to see.

---

# React Decisions

Document approximately three meaningful React decisions.

## Decision 1

**React Concept:**  
Components and props

**Used For:**  
I made a ServiceCard component that displays the category, title, description, and details for each service.

**Why It Helps:**  
This way, I don't have to write the same code over and over for every card. It also makes it easier to change things later.

## Decision 2

**React Concept:**  
map()

**Used For:**  
I used map() to display all the services from the array instead of making each card separately.

**Why It Helps:** 
It makes the code shorter and easier to manage, especially if more services need to be added.

## Decision 3

**React Concept:** 
State and events

**Used For:**  
I used useState() and onClick to make the filter buttons work.

**Why It Helps:**  
Users can click a category to see only those services, and aria-pressed helps communicate which filter is selected.

---

# React Reflection

Write approximately **75–100 words** responding to:

> How is working with React components different from manipulating the DOM directly as you did in Week 8? What seems easier, and what seems more complex?

In Week 8, I used JavaScript to change things directly in the DOM. With React, I can organize the page into components and reuse them instead of repeating code. Using props and map() also makes it easier to display different information in the cards. One thing that took more getting used to was using state and connecting it to the buttons. I think React is helpful for bigger websites because it keeps the code organized and makes it easier to add interactive features.

---

# Testing Notes

- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs the project
- [ ] ServiceCard is reusable
- [ ] Services render from the supplied array
- [ ] Every rendered service uses a stable key
- [ ] All filter works
- [ ] Health filter works
- [ ] Housing filter works
- [ ] Community filter works
- [ ] Active filter is visually clear
- [ ] Active filter uses an accessible programmatic state
- [ ] Keyboard interaction works
- [ ] Browser console has no unresolved warnings/errors
- [ ] `npm run build` completes successfully

---

# Final Handoff Check

- [ ] My project folder is named `week10-react`
- [ ] I used the supplied React/Vite project
- [ ] `ServiceCard.jsx` exists
- [ ] I used props
- [ ] I used `map()`
- [ ] I used stable keys
- [ ] I used `useState()`
- [ ] I used React event handling
- [ ] I used native buttons for filters
- [ ] `node_modules` is not committed
- [ ] My README is complete
- [ ] I committed and pushed the completed project
