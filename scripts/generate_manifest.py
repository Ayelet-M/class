import json
from pathlib import Path

manifest = []

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

                    if (activity_dir / "code_deliverable" / "index.html").exists():
                        examples.append(
                            {
                                "folder": activity_name,
                                "name": activity_name,
                                "nested": True,
                                "path": str(activity_dir / "code_deliverable") + "/"
                            }
                        )

            # Check for direct examples (examples/code_deliverable)
            if (examples_dir / "code_deliverable" / "index.html").exists():
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
