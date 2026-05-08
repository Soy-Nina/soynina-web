Commit all modified and untracked files (excluding anything that looks like secrets such as .env files) and push to the staging branch.

Steps:
1. Run `git status` and `git diff` to review what changed.
2. Run `git log -5 --oneline` to match the existing commit message style.
3. Stage the relevant files with `git add` (specific files, not `git add -A`).
4. Write a concise conventional-commit message that describes the changes, ending with:
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
5. Commit and then run `git push origin staging`.
6. Report the commit hash and confirm the push succeeded.

If there is nothing to commit, say so instead of creating an empty commit.
