# Jonathan Dowyaro — Software Engineering Portfolio

A responsive, multi-page student portfolio showcasing software engineering interests, three interactive JavaScript projects, an academic planner, and a personal audio introduction.

## Pages

- **Home** (`index.html`) — introduction, portrait, and audio player with animated visualizer.
- **About** (`about.html`) — profile, interests, and skills.
- **Projects** (`projects.html`) — project showcases and screenshots, with a subtle cursor glow.
- **Planner** (`planner.html`) — interactive academic task management.
- **Contact** (`contact.html`) — validated demonstration contact form.

## Interactive projects

1. **Dowyaro Calc** (`projects/dowyaro-calc/index.html`): basic calculator with keyboard controls.
2. **Dowyaro Store** (`projects/dowyaro-store/index.html`): sample shopping catalog with search, category filters, shopping bag, and demo checkout. Includes 12 product images.
3. **GridGlow** (`projects/tic-tac-toe/index.html`): local two-player Tic-Tac-Toe with win/draw detection, highlighted winning squares, and scoreboard.

## Features and technologies

- HTML5, CSS3, and vanilla JavaScript; no framework or backend required.
- Responsive navigation, styling, and accessible native audio playback.
- MP3 audio introduction with animated visualizer (`assets/jonathan-introduction.mp3`).
- Academic planner: add, edit, complete, delete, search, filter, and sort tasks; track deadlines, priorities, and completion progress.
- Browser localStorage saves planner tasks and demonstration contact form submissions in the current browser.
- Contact form checks required fields, email format, and digits-only phone number, then shows an animated confirmation and returns to Home.

**Important:** The contact form is a browser-only demonstration. It does not send email or save submissions to a remote database. The shopping checkout is also a demonstration; no payments or real orders are processed. Avoid entering sensitive information.

## Run locally

Download or clone the repository, then open `index.html` in a modern browser. For consistent behavior, you may also serve the folder using a simple local static server (for example, VS Code Live Server).

## Deploy to GitHub and Vercel

1. Create a new GitHub repository and upload **the contents of this folder** to its root (so `index.html` is at repository root).
2. In Vercel, select **Add New → Project** and import that GitHub repository.
3. Choose **Other** for the framework preset, leave the build command empty, and set the output directory to the repository root (`.`) if Vercel asks for one.
4. Deploy. Verify Home, About, Projects, Planner, Contact, each project link, and audio playback on the live site.

No environment variables, database, or package installation are required.

## Submission links

- GitHub repository: _Add URL after publishing._
- Live website: _Add URL after deployment._

## Credits

Portfolio created for **Jonathan Dowyaro**, Software Engineering. © 2026 Jonathan Dowyaro.
