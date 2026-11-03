# Week 12 Customization Audit
## Planning Aid — Complete Before Production

This is a short planning aid, not a separate major deliverable.

### 1. What is already working from Week 11?
List the content and CMS structure you intend to preserve.

- The Home, Programs, About, and News content structure.
- The existing navigation and overall site organization.
- The existing editable WordPress content rather than rebuilding pages from scratch.

### 2. Which requirements are global?
Examples: palette, typography, buttons, content width, spacing rhythm.

- Apply the approved color palette to headings, backgrounds, buttons, and links.
- Keep button styles, spacing, and content widths consistent across pages

### 3. Which requirement belongs in a reusable pattern?
What repeated structure will carry the Southtown brand?

- I would create a Branded Program Feature pattern that includes a category label, program heading, short description, image, and button. This would work well on the Home and Programs pages because staff could reuse the same layout for different programs without having to redesign each section.

### 4. Which requirement belongs in shared site structure?
What should change once and affect multiple pages?

- I would use the Southtown colors and organize the footer to display the organization name, San Antonio location, email address, and short tagline. Since this information appears throughout the website, it makes more sense to update it once in the Site Editor instead of editing every page individually.

### 5. What is your one development-level modification?
Choose **one**:
- [ ] small `theme.json` adjustment
- [X] small targeted CSS rule

Why is this modification necessary instead of another editor/global setting?

- I added a small CSS rule to create a hover effect for buttons. When visitors hover over a button, the background changes from Southtown Teal to Southtown Deep while the text stays white. This adds a little interaction and keeps the buttons consistent with the brand. 

### 6. What will you test?
Visitor:
- Check that the website looks good on desktop and mobile.
- Make sure the colors and fonts are consistent across pages.
- Test buttons, links, and navigation.
- Make sure keyboard focus is visible.

Editor:
- Make sure existing page content can still be edited through WordPress.
- Test that the reusable program pattern can be duplicated and updated.
- Temporarily change some text, preview the page, and restore the original.
- Make sure the global changes don't interfere with editing individual pages.
