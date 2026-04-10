# Creative Graphic Designer Portfolio Website

A fully responsive, statically generated portfolio website built for a creative professional using raw HTML, CSS, and Vanilla JavaScript. Minimal dependencies, extremely lightweight, and beautifully modern execution.

## Features
- **Clean Structure**: Fully semantic HTML5 mapping to `index.html`, `projects.html`, `about.html`, and `contact.html`.
- **Responsive Layout**: Adheres to modern responsive design principles using Flexbox, CSS Grid, and media queries for desktop, tablet, and mobile viewing.
- **Custom CSS Architecture**: Variables setup for colors, spacing, and transitions for scalable styling. No frameworks required.
- **Vanilla JavaScript**: Form validation (visual feedback), project filtering system, and animated mobile hamburger menu.

## File Structure Overview
```
.
├── index.html        # Main landing page (Hero, Services, Featured Projects)
├── projects.html     # Filterable portfolio showcase Grid
├── about.html        # Information about the designer + skills visualizer
├── contact.html      # Feedback form structure providing simulated UI
├── README.md         # The file you are currently reading
└── assets/
    ├── css/
    │   └── style.css # The main and only CSS system entry point
    └── js/
        └── script.js # Frontend interactions and DOM scripts
```

## Setup & Preview Locally
Since there is no backend, this site can be launched effortlessly.
1. Download or clone this directory.
2. Locate the `index.html` file in your system's File Explorer.
3. Double click on `index.html` to open it in your default web browser.

For an optimal viewing experience locally (which prevents strict CORS behavior on some local browsers), serve the directory using a quick local server if you have Python or Node installed:
- Using Python 3: `python -m http.server 8000`
- Using Node (`serve`): `npx serve .`

Then simply navigate to `http://localhost:8000` or `http://localhost:3000` in your browser.

## Customization
- **Colors & Theming**: Modifications to primary colors can be easily executed by tweaking the `:root` pseudo-class variables located at the very top of `assets/css/style.css`.
- **Typography**: The design presently loads `Inter` automatically from Google Fonts. This can be adapted using `@import` right above the variables.
- **Images**: Ensure high-quality assets are placed inside the project paths. Simply swap the placeholder Unsplash URLs inside the HTML tags with real assets paths relative to the root (e.g. `assets/images/portfolio-1.jpg`).
