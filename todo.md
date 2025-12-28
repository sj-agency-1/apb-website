Preparation phase

- [x] Setup i18n
- [x] Install BMad

- [x] Plan the work
  - [x] Extracting assets from Figma
  - [x] Work items on features
  - [x] Styling/Components
  - [x] Pages

- [x] Extract assets from figma
  - [x] Export images
  - [x] Downsize images using online services
  - [x] Put images to the folders and rename them
  - [x] Prepare fonts

- [x] Prepare blocks
  - [x] Header + Responsiveness
  - [x] Footer
  - [x] Sidebar
  - [x] Content
  - [x] Section

- [x] Create pages
  - [x] Home
  - [x] How It Works
  - [x] About
  - [x] Advantages + Advantage (implement Add content first below)
  - [x] Blog + Post
  - [x] Reviews
  - [x] FAQ
  - [x] Contacts

- [x] Add content
  - [x] Add and setup collections
  - [x] Add content for collections
- [x] Retrieve data from collections

- [x] Add mising pages
  - [x] Review all links on the website (header/footer) and implement missing pages

- [x] Fixes
  - [x] Active link of the current page in header menu
  - [x] Smooth scrolling

- [x] Refactor code:
  - [x] Use translated content on pages when possible to keep ui.ts (with translations) small
  - [x] Remove unused code
  - [x] Refactor components and define some reusable components as blocks (like CTA cards and etc.) to follow DRY principle
  - [x] Review the component system and make sure it follows best practices, be maintainable while keeping them simple (do not overengineer)
    - [x] Move hero component to the Layout.
- [x] After all of this, run the `npm run fix` command and after that `npm run check` to fix all of the left errors
- [x] Refactor again

- [x] Manually review pages and adjust them
  - [x] Add 404

- [x] Add docs for later use

- [ ] Fix prod website
  - [ ] Update tailwindcss approach to use (move layers in style attribyte of components to no-layer in separate file) - quick fix for now to make website working
