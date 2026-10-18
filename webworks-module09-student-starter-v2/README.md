# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

# Project Summary

Mission City Makers Market is a website that features local makers and their products. It includes four makers, their crafts, descriptions, and booth numbers. I used Tailwind CSS for styling and Alpine.js to make the maker filter interactive.

## Alpine Decision

**User/client need:**  
I wanted visitors to be able to filter makers by craft type so they can find what they're interested in.

**Alpine directives used:**  
I used `x-data` to store the selected category, `x-model` for the dropdown, `x-show` to show or hide maker cards, and `x-text` to update the results message.

**Why Alpine was appropriate:**  
Alpine was a good choice because I could add a simple filter directly to my HTML without writing a lot of JavaScript.

## Preline Decision

**Preline component selected:**  
I used a Preline accordion.

**Problem it solves:**  
The accordion lets visitors open and close sections to view information without making the page too crowded.

**How you adapted it:**  
I changed the styling to match the colors and overall look of my website.

## Accessibility Notes

1. I added a label to the craft filter so visitors know what it does.
2. The dropdown works with a keyboard, and the results message updates when a category is selected.

## Testing Notes

**Narrow viewport:** I checked that the content fits on a smaller screen.

**Medium viewport:** I checked that the layout looks organized at a medium screen size.

**Wide viewport:** I checked that the maker cards display properly on desktop.

**Keyboard testing:** I tested using the keyboard to navigate and select a craft category.

**Browser console:** I checked the console for errors.

## Dependencies

**Alpine.js — how used:** I used Alpine.js to filter the maker cards by craft type.

**Preline UI — how used:** I used Preline UI for the accordion that opens and closes sections of information.

**Tailwind CSS — how used:** I used Tailwind CSS for the layout, colors, spacing, and responsive styling.


## Official Documentation Used

- Alpine.js: TODO
- Preline UI: TODO

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [ ] `npm run build` completes.
- [ ] Tailwind styles load.
- [ ] Alpine interaction works.
- [ ] Preline component works.
- [ ] They solve different needs.
- [ ] Keyboard testing works.
- [ ] Responsive testing is complete.
- [ ] Console has no unresolved errors.
- [ ] README is complete.
- [ ] `css/output.css` is committed.
- [ ] `js/vendor/preline.js` is committed.
- [ ] `node_modules` is not committed.
- [ ] Work is pushed to GitHub.
