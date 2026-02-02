#!/usr/bin/env python3
import json
import os
from pathlib import Path

manifest = []

# Find all week directories
for week_dir in sorted(Path('.').glob('week*')):
    if not week_dir.is_dir():
        continue
    
    week_name = week_dir.name
    
    # Find all date subdirectories
    for date_dir in sorted(week_dir.glob('*/')):
        if not date_dir.is_dir():
            continue
        
        date_name = date_dir.name
        examples = []
        
        examples_dir = date_dir / 'examples'
        if examples_dir.exists():
            # Check for nested examples (activity*/code_deliverable)
            for activity_dir in sorted(examples_dir.glob('*/')):
                if activity_dir.is_dir():
                    activity_name = activity_dir.name
                    if activity_name == 'code_deliverable':
                        continue  # Skip, this is direct structure
                    
                    if (activity_dir / 'code_deliverable' / 'index.html').exists():
                        examples.append({
                            "folder": activity_name,
                            "name": activity_name,
                            "nested": True
                        })
            
            # Check for direct examples (examples/code_deliverable)
            if (examples_dir / 'code_deliverable' / 'index.html').exists():
                examples.append({
                    "folder": "code_deliverable",
                    "name": "Example",
                    "nested": False
                })
        
        entry = {
            "week": week_name,
            "folder": date_name,
            "examples": examples
        }
        manifest.append(entry)

# Write manifest
with open('examples-manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)

print("✓ Manifest generated with entries:")
for entry in manifest:
    print(f"  - {entry['week']}/{entry['folder']}: {len(entry['examples'])} examples")
