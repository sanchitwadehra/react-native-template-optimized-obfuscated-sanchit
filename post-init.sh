#!/bin/bash
echo ">>> Running Sanchit's Post-Init Script <<<"

# Rename gitignore.template back to .gitignore in the new project
if [ -f "gitignore.template" ]; then
  echo "Restoring .gitignore from gitignore.template..."
  mv gitignore.template .gitignore
  echo ".gitignore has been restored!"
else
  echo "WARNING: gitignore.template not found in new project. .gitignore not restored."
fi

# You can add other post-init tasks here if needed in the future!

echo ">>> Sanchit's Post-Init Script Finished <<<"
exit 0 