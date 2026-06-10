# Strat AI Homepage Redesign Plan

## Goal

Recreate the visual style and layout of the referenced Strat AI homepage inside this repo without changing stacks. The current site is already structurally close to the target, so this should be treated as a focused front-end redesign rather than a full rebuild.

The redesign work should happen inside the `redesign/` folder and should prioritize:

- visual fidelity to the reference screenshots
- reuse of existing copy and assets where possible
- a premium, minimal B2B design language
- clean static HTML/CSS with only light JavaScript where needed

## High-Level Recommendation

Do not migrate this project to `create-t3-app` or a React/Next.js stack for this work.

Reasons:

- the target is a marketing site, not an app
- the design is driven by layout, typography, spacing, and styling rather than application logic
- the current repo already contains the necessary content structure
- rebuilding in plain HTML/CSS will be faster, cheaper, and lower risk

## What The Reference Design Is

The homepage is a polished dark-mode marketing page with a restrained, premium feel. It is not technically complex. Its quality comes from consistency and composition more than advanced functionality.

Core characteristics:

- very dark navy background with a faint technical grid overlay
- off-white text with cyan accent color
- bold sans-serif headlines with disciplined line breaks
- small uppercase section labels with wide tracking
- thin, subtle borders and medium-large rounded corners
- soft shadows and low-noise visual effects
- large whitespace and strong section rhythm
- minimal, restrained motion

## What Makes It Feel Premium

The site works because it is controlled:

- typography is strong but not flashy
- spacing is generous and highly consistent
- cards and sections share a unified border and radius system
- accent color is used sparingly
- layouts feel editorial rather than template-driven
- decoration is subtle and never overwhelms the content

## Visual Breakdown By Section

## 1. Header / Navigation

Structure:

- left-aligned compact logo and wordmark
- right-aligned navigation links
- one pill-shaped CTA button
- thin divider line under the header

Visual notes:

- dark background with subtle transparency
- simple typography, medium weight
- CTA is filled but subdued
- spacing is clean and balanced

Implementation difficulty: low

## 2. Hero

Structure:

- left column: eyebrow pill, oversized headline, short supporting paragraph, two CTAs, guarantee/trust row
- right column: dashboard-style proof card labeled as a live deal pipeline

Visual notes:

- headline line breaks are highly intentional
- only part of the headline is cyan
- large empty space makes the hero feel expensive
- right-side card adds operational credibility without needing a real product UI

Implementation difficulty: moderate

This section will require the most tuning for type scale, spacing, and composition.

## 3. Section Labels

Examples:

- `WHAT WE DO`
- `WHO WE HELP`
- `COMMON BOTTLENECKS`
- `INTEGRATIONS WE BUILD ON`

Visual notes:

- small uppercase text
- wide letter spacing
- cyan accent color
- consistent vertical offset above main headings

Implementation difficulty: low

These should be turned into one reusable class.

## 4. What We Do

Structure:

- section label
- large section heading
- one short supporting paragraph
- three cards in a row

Each card includes:

- large numeric prefix
- small category label
- title
- short paragraph

Visual notes:

- cards are dark with thin borders
- content is spacious and minimal
- the design is more structured than decorative

Implementation difficulty: low

## 5. Who We Help

Structure:

- large left text block
- two cards on the right: `Good fit` and `Not a fit if`

Visual notes:

- left side reads like editorial content
- right side feels like practical qualification filters
- one card is slightly lighter to create hierarchy

Implementation difficulty: low to moderate

This is mainly a CSS grid composition problem.

## 6. Common Bottlenecks

Structure:

- section label
- large title
- six items inside one bordered matrix

Visual notes:

- one outer rounded container
- internal dividers
- each item has a small cyan number
- cleaner and more intentional than six separate floating cards

Implementation difficulty: low to moderate

This is a better design direction than standalone repeated cards and should be recreated directly.

## 7. Outcomes That Matter

Structure:

- section title
- three large metrics side by side
- one smaller line of follow-up text below

Visual notes:

- large cyan numbers
- muted supporting copy
- thin vertical dividers
- almost no decoration

Implementation difficulty: low

## 8. Integrations

Structure:

- section label
- large heading
- wrapped rows of pill badges

Visual notes:

- pills are subtle, not glossy
- spacing and sizing are very even
- visually this acts as proof and compatibility messaging

Implementation difficulty: low

## 9. Jumpstart Video Section

Structure:

- left text block
- right media card with poster image, play icon, and branding

Visual notes:

- wide two-column layout
- visual focus is on the preview asset
- the card has strong rounded corners and clean framing

Implementation difficulty: low to moderate

This will depend on using the existing repo assets cleanly.

## 10. Jumpstart Sprint Pricing Section

Structure:

- left: large pricing card with CTA
- right top: three feature cards
- right bottom: success panel with three short outcomes

Visual notes:

- this section feels highly composed
- card sizing and spacing matter more than decoration
- the price card has a slightly lighter panel tone

Implementation difficulty: moderate

This likely needs a more exact CSS grid than the current layout.

## 11. Custom Builds / Flagship Partnership

Structure:

- two side-by-side large cards
- long-form supporting copy
- bottom CTA pill on each

Visual notes:

- simple and restrained
- low visual noise
- broad cards with a lot of internal spacing

Implementation difficulty: low

## Comparison To The Current Repo

The current repo already helps significantly.

What already exists:

- homepage content with similar section order
- supporting pages like About and FAQ
- dark theme foundations
- buttons, cards, panels, and badge patterns
- some reveal animation support
- existing media assets

What likely needs to change:

- hero layout and composition
- typography system
- spacing scale
- grid background treatment
- component styling consistency
- section container widths
- border language and radii
- card hierarchy and proportions
- motion restraint

## Main Design Shift

Current site direction:

- dark gradient SaaS landing page
- more decorative/glassy styling
- more visibly animated component treatment

Target site direction:

- premium B2B operations brand
- restrained and editorial
- more geometric and consistent
- less glow, less noise, less visual excess

The redesign should move away from generic dark-mode SaaS styling and toward a cleaner, more controlled visual system.

## Hardest Parts To Match

The main challenge is not technical implementation. It is design precision.

Hard parts:

- exact headline wrapping and font sizing
- whitespace rhythm between sections
- subtle grid background treatment
- getting borders visible but not noisy
- balancing muted copy against bright accent text
- preserving the premium feel on smaller screens

## Recommended Build Strategy

### Phase 1: Build The Design System

Create a small, deliberate visual system first.

Define:

- color variables
- typography scale
- spacing scale
- border opacity and stroke rules
- radius system
- shadow system
- container widths
- section paddings

### Phase 2: Rebuild Homepage Sections In Order

Recommended order:

1. header
2. hero
3. what we do
4. who we help
5. common bottlenecks
6. outcomes
7. integrations
8. jumpstart video section
9. jumpstart sprint pricing section
10. custom builds / flagship partnership

### Phase 3: Standardize Components

Reduce the design to a small set of reusable components:

- primary CTA button
- secondary CTA button
- eyebrow / section label
- pill badge
- numbered feature card
- matrix item cell
- metric item
- panel
- highlighted panel
- pricing card

### Phase 4: Add Minimal Motion

Motion should be understated.

Recommended:

- fade or slide-in on scroll
- subtle button hover transitions
- slight panel lift on hover where appropriate
- optional soft background drift only if it remains very restrained

Avoid:

- heavy glow animations
- constant floating motion on many elements
- anything that makes the page feel gimmicky

### Phase 5: Apply The Design Language To Other Pages

After the homepage is complete:

- restyle `about-us`
- restyle `faq`
- optionally restyle `casestudies`

These should inherit the same visual system rather than becoming separate designs.

## Estimated Difficulty By Section

- header: low
- hero: moderate
- what we do: low
- who we help: low to moderate
- bottlenecks matrix: low to moderate
- outcomes: low
- integrations: low
- jumpstart video section: low to moderate
- pricing section: moderate
- custom builds section: low

Overall difficulty: moderate

The homepage is absolutely realistic to recreate in this repo.

## Practical Conclusion

This should be approached as a visual refactor, not a platform migration.

What is required:

- careful HTML restructuring where needed
- a new CSS system tuned to the screenshots
- disciplined layout and typography work

What is not required:

- React
- Next.js
- `create-t3-app`
- backend changes
- advanced app logic

## Working Rule For The Redesign Folder

The `redesign/` folder should contain the new experimental build of the site before replacing the existing top-level files.

Suggested contents later:

- `redesign/index.html`
- `redesign/about-us.html`
- `redesign/faq.html`
- `redesign/style.css`
- `redesign/assets/`

This allows the redesign to be built and reviewed in isolation before promotion into the main site.
