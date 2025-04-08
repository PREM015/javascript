import os
import re

# Get all directories in the current folder
folders = [f for f in os.listdir() if os.path.isdir(f)]

# Extract numeric prefix and sort by it
def extract_number(folder_name):
    match = re.match(r'^(\d+)\.', folder_name)
    return int(match.group(1)) if match else float('inf')

# Sort folders by numeric prefix
folders.sort(key=extract_number)

# Rename folders with padded numbers
for folder in folders:
    match = re.match(r'^(\d+)\.\s*(.*)', folder)
    if match:
        num = int(match.group(1))
        name = match.group(2).strip()
        new_name = f"{num:02d}. {name}"
        if folder != new_name:
            os.rename(folder, new_name)
            print(f"Renamed: '{folder}' → '{new_name}'")
