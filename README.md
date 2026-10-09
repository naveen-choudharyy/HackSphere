# HackSphere — Bennett University Hackathon Discovery Portal

> **Transforming Campus Hackathon Discovery Through SEO**  
> *Course: Search Engine Optimization • Bennett University, Greater Noida*  
> *Academic Year: 2026–27*

HackSphere is a lightweight, responsive, SEO-first frontend application designed to give hackathons at Bennett University (Greater Noida) a single, crawlable home. It maps high-intent student queries—registration steps, eligibility rules, round timelines, problem tracks, and campus directions—to dedicated, individual pages.

---

## 1. Strict Requirement: 100% AI-Free Implementation

This project was built adhering strictly to the **zero-AI policy**:
- **No External AI APIs**: No OpenAI, Google Gemini, Anthropic Claude, or machine-learning APIs.
- **No Generative AI or Chatbots**: No hallucinated text, generative dialog, predictive search, or fake reviews.
- **No Fabricated Data**: All event dates, eligibility requirements, rules, and organizers are drawn strictly from confirmed campus records and platform archives.
- **Pure Native Frontend**: Developed entirely using semantic HTML5, CSS3 with Tailwind CSS, React 18, and vanilla JavaScript algorithms.

---

## 2. Key Features

1. **Dedicated Query-to-Page Routing**:
   - `/` — Homepage & Discovery Hub
   - `/about` — Project background, problem statement, and SEO rationale
   - `/hackathons` — Complete searchable event directory
   - `/hackathons/:slug` — Reusable detail page with copy link, share, rules, schedule, and official link
   - `/registration` — 4-step registration guide with verified organizer handoffs
   - `/eligibility` — Confirmed batch criteria and mandatory SIH team rules
   - `/schedule` — Chronological timeline with "To be announced" notices for upcoming rounds
   - `/rules` — Participation rules, 100-point judging rubric, and code of conduct
   - `/tracks` — Problem domains (distinguishing illustrative domains from confirmed event tracks)
   - `/speakers` — Honest "To be announced" panel states with zero fake personas
   - `/venue` — Confirmed Bennett University campus address, transit guide (Metro Aqua Line / Expressway), and lab guidelines
   - `/faq` — Keyboard-accessible accordion with search and category filtering
   - `/saved` — Bookmark system powered by browser `localStorage`
   - `/blog/hackathon-for-beginners` — Practical guide for first-year participants
   - `/blog/how-to-prepare-for-a-hackathon` — 48-hour preparation checklist
   - `*` (404) — Friendly recovery page with direct links to main sections

2. **Useful Functionalities**:
   - **Local Storage Bookmarks**: Save and remove events across sessions.
   - **JavaScript Deadline Calculations**: Displays accurate remaining days countdown only when confirmed dates exist.
   - **Client-Side Filtering & Search**: Instant filtering by format (Offline, Online, Hybrid), technology track, and event status.
   - **Accessible Navigation**: Keyboard focus rings, ARIA tags, and mobile responsive menu.
   - **Web Share & Clipboard API**: One-click link copying with feedback.

3. **Comprehensive SEO Architecture**:
   - **Dynamic Metadata**: Title, meta description, and canonical tags update per route.
   - **Semantic Heading Structure**: One H1 per page, followed by logical H2/H3 elements.
   - **Valid `public/robots.txt`**: Directly points to sitemap.
   - **XML Sitemap (`public/sitemap.xml`)**: Complete coverage of all public pages.
   - **JSON-LD Schema**:
     - `Event` structured data for campus hackathons.
     - `FAQPage` structured data on the FAQ page.
     - `WebSite` search action schema on Home.

---

## 3. Tech Stack

- **Framework**: React 18 with Vite 6
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS 3 (restrained navy and blue design system)
- **Icons**: Lucide React
- **Storage**: Browser `localStorage` (defensive try-catch error handling)
- **Testing**: Node.js built-in assertion test runner (`test/verify.test.js`)

---

## 4. Folder Structure

```
├── public/
│   ├── favicon.svg          # Custom SVG favicon
│   ├── robots.txt           # Crawl directives referencing sitemap
│   └── sitemap.xml          # XML sitemap covering all core routes
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.jsx    # Semantic breadcrumb navigation
│   │   ├── Button.jsx         # Accessible reusable button & link
│   │   ├── EmptyState.jsx     # Friendly zero-results component
│   │   ├── FAQAccordion.jsx   # Keyboard-accessible accordion with ARIA
│   │   ├── FilterPanel.jsx    # Format, track, and status filter selectors
│   │   ├── Footer.jsx         # Semantic footer with dynamic copyright year
│   │   ├── HackathonCard.jsx  # Event directory card with bookmarking
│   │   ├── Navbar.jsx         # Sticky header with mobile drawer & badge
│   │   ├── SearchBar.jsx      # Accessible search input with clear button
│   │   ├── SEOHead.jsx        # Route-level title, meta, canonical & JSON-LD updater
│   │   └── StatusBadge.jsx    # Event status indicator pills
│   ├── data/
│   │   ├── faq.js             # Verified FAQ questions and answers
│   │   └── hackathons.js      # Structured catalog of campus hackathons
│   ├── hooks/
│   │   └── useBookmarks.js    # LocalStorage hook with cross-tab synchronization
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BlogBeginners.jsx
│   │   ├── BlogPreparation.jsx
│   │   ├── Eligibility.jsx
│   │   ├── FAQ.jsx
│   │   ├── HackathonDetails.jsx
│   │   ├── Hackathons.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Registration.jsx
│   │   ├── Rules.jsx
│   │   ├── SavedHackathons.jsx
│   │   ├── Schedule.jsx
│   │   ├── Speakers.jsx
│   │   ├── Tracks.jsx
│   │   └── Venue.jsx
│   ├── utils/
│   │   ├── dateUtils.js        # Date formatting, sorting, and deadline calculations
│   │   └── filterHackathons.js # Pure JavaScript filtering algorithms
│   ├── App.jsx                 # Route declarations & global layout
│   ├── index.css               # Tailwind directives & focus ring styling
│   └── main.jsx                # React DOM root mounting
├── test/
│   └── verify.test.js          # Automated verification test suite
├── index.html                  # HTML entry point with meta tags & Google fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 5. Local Setup & Execution Commands

### Prerequisites
- Node.js (v18 or higher recommended; verified on Node v24)
- npm (v9 or higher; verified on npm v11)

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Run Automated Test Suite**
   ```bash
   npm test
   ```
   Executes unit and data integrity tests covering filter logic, date arithmetic, slug resolvers, and SEO assets.

4. **Build Production Bundle**
   ```bash
   npm run build
   ```
   Generates production assets in the `dist/` directory.

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 6. Project Viva & Presentation Notes

When presenting this project:
1. **Why No AI?**: Highlight that search engines index factual, authoritative content with high user-intent relevance. Hand-crafted, accurate information with fast loading times and clear schemas ranks better and serves students more reliably than hallucinated AI dynamic content.
2. **SEO Strategy**: Explain the Keyword-to-Page Mapping (Appendix A of the report) which avoids keyword cannibalization by granting each primary query its own crawlable page.
3. **Data Integrity**: Note how unconfirmed future dates for the flagship hackathon are honestly labeled "To be announced", rather than guessing dates.
