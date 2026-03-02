# Student Submissions -  Setup


This directory is configured to automatically deploy to GitHub Pages with a landing page that links to all student homework submissions.

## Directory Structure

```bash
class/
├── index.html                          # Main landing page
├── .github/workflows/deploy.yml         # GitHub Actions deployment
├── week1/
│   ├── 7_13/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
│   ├── 7_14/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
│   └── 7_15/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
├── week2/
│   ├── 7_20/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
│   ├── 7_21/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
│   └── 7_22/
│   │   ├── code_deliverable/
│   │   ├── log_deliverable/
│   │   ├── examples/
└── week3/
    ├── 7_27/
    │   ├── code_deliverable/
    │   ├── log_deliverable/
    │   ├── examples/
    └── 7_28/
        ├── code_deliverable/
        ├── log_deliverable/
        ├── examples/

```

## How It Works

### Landing Page

The root `index.html` displays a directory of all student submissions organized by week. Each submission links to its `code_deliverable` folder.

### Supported Site Types

#### Static HTML/CSS/JS

Place your HTML files directly in the `code_deliverable` folder:

```bash
week1/7_13/code_deliverable/
├── index.html
├── style.css
└── script.js
```

### React Apps

If your submission is a React app with a `package.json`:

```bash
week1/7_13/code_deliverable/
├── package.json
├── src/
└── public/

```

The GitHub Actions workflow will automatically build it and serve the build output.

## Important Notes

- The workflow publishes the entire repository to GitHub Pages
- For React apps with sub folders in package.json (like `"homepage": "/repo-name/week1/7_13/code_deliverable/"`), ensure they're properly configured
- Static HTML sites don't need any special configuration
- Each submission can be a completely independent project

## Instructions Files

Each project folder has one instruction file:

- `instructions.md` → guidance for completing the assignment

The site renders student-facing instructions through `instructions.html` and links to it from the overview page and each submission page.

## Testing Locally

To test the landing page locally, open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000`
