import json
from pathlib import Path

manifest = []


def is_placeholder(index_html):
    """True for empty/TODO stub examples that shouldn't be surfaced on the site."""
    try:
        text = index_html.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return True
    if len(text.strip()) < 400 and ("<title>TODO</title>" in text or "<h1>TODO</h1>" in text):
        return True
    return False

def process_directory(parent_dir, label, folder_prefix=""):
    if not parent_dir.exists():
        return

    for folder_dir in sorted(parent_dir.glob("*/")):
        if not folder_dir.is_dir():
            continue

        folder_name = folder_dir.name
        # Skip hidden folders
        if folder_name.startswith('.'):
            continue
            
        examples = []

        # Check for examples subfolder
        examples_dir = folder_dir / "examples"
        if examples_dir.exists():
            # Check for nested examples (activity*/code_deliverable)
            for activity_dir in sorted(examples_dir.glob("*/")):
                if activity_dir.is_dir():
                    activity_name = activity_dir.name
                    if activity_name == "code_deliverable":
                        continue  # Skip, this is direct structure

                    nested_index = activity_dir / "code_deliverable" / "index.html"
                    if nested_index.exists() and not is_placeholder(nested_index):
                        examples.append(
                            {
                                "folder": activity_name,
                                "name": activity_name,
                                "nested": True,
                                "path": str(activity_dir / "code_deliverable") + "/"
                            }
                        )

            # Check for direct examples (examples/code_deliverable)
            direct_index = examples_dir / "code_deliverable" / "index.html"
            if direct_index.exists() and not is_placeholder(direct_index):
                examples.append(
                    {
                        "folder": "code_deliverable",
                        "name": "Example",
                        "nested": False,
                        "path": str(examples_dir / "code_deliverable") + "/"
                    }
                )

        # Check for direct submission (folder_dir/code_deliverable)
        if (folder_dir / "code_deliverable" / "index.html").exists():
             examples.append(
                {
                    "folder": "code_deliverable",
                    "name": "Main Submission", 
                    "nested": False,
                    "path": str(folder_dir / "code_deliverable") + "/",
                    "isMain": True
                }
            )

        if examples:
            entry = {
                "week": label,
                "folder": folder_name,
                "examples": examples,
            }
            manifest.append(entry)

# Process Weeks
for week_dir in sorted(Path(".").glob("week*")):
    if week_dir.is_dir():
        process_directory(week_dir, week_dir.name)

# Process Extra
process_directory(Path("extra"), "extra")

# Write manifest
with open("examples-manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)

print("✓ Manifest generated with entries:")
for entry in manifest:
    print(f"  - {entry['week']}/{entry['folder']}: {len(entry['examples'])} examples")
