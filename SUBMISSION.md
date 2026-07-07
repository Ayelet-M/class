# Submitting Assignments

Canvas is where you submit. GitHub is where we verify the work.

For each individual activity, submit both items on Canvas:

1. A `.zip` file of the entire assignment folder, for example `week1/7_13/`.
2. The link to your deployed assignment page.

Your deployed link should be from your own GitHub Pages site, not the canonical course site. It will usually look like:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/week1/7_13/code_deliverable/
```

Replace `week1/7_13/` with the assignment folder you are submitting.

## What We Grade

We use the Canvas submission as the formal timestamp and package, but we also review the matching GitHub Classroom repo:

- your committed `code_deliverable/`;
- your `log_deliverable/history.md` prompt trace;
- your `vibe-report.md`;
- your deployed page;
- your commit history up to the Canvas submission time.

If you push commits after submitting on Canvas, those later commits do not count for that submission unless the instructor asks you to resubmit.

## Before You Submit

From the repo root:

```bash
git status
git add week1/7_13
git commit -m "Submit week1 7_13"
git push
```

Then make the zip file for that same folder and submit it on Canvas with your deployed link.

For deployment setup and troubleshooting, see [DEPLOY.md](DEPLOY.md).
