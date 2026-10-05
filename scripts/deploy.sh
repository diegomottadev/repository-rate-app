#!/usr/bin/env bash
# Publishes the web build to the gh-pages branch for GitHub Pages.
# It uses a git worktree, so your working copy and current branch stay as
# they are. It never force-pushes: if gh-pages moved on the remote, the push
# fails and you decide what to do.
#
# Usage:
#   npm run deploy            build, commit to gh-pages and push
#   DRY_RUN=1 npm run deploy  build and show what would change, no commit
set -euo pipefail

BRANCH=gh-pages
REMOTE=origin
ROOT="$(git rev-parse --show-toplevel)"
REPO_NAME="$(basename -s .git "$(git -C "$ROOT" remote get-url "$REMOTE")")"
WORKTREE="$(mktemp -d "${TMPDIR:-/tmp}/${REPO_NAME}-pages.XXXXXX")"

cleanup() {
    git -C "$ROOT" worktree remove --force "$WORKTREE" 2>/dev/null || rm -rf "$WORKTREE"
    git -C "$ROOT" worktree prune
}
trap cleanup EXIT

cd "$ROOT"
echo "Building for https://<user>.github.io/${REPO_NAME}/"
BASE_URL="/${REPO_NAME}" npx expo export --platform web --output-dir dist

git fetch --quiet "$REMOTE" "$BRANCH" 2>/dev/null || true
if git show-ref --verify --quiet "refs/remotes/${REMOTE}/${BRANCH}"; then
    git worktree add --quiet -B "$BRANCH" "$WORKTREE" "${REMOTE}/${BRANCH}"
else
    # First deploy: start an empty branch with no history from main.
    git worktree add --quiet --detach "$WORKTREE"
    git -C "$WORKTREE" checkout --quiet --orphan "$BRANCH"
    git -C "$WORKTREE" rm -rf --quiet .
fi

# Replace everything except .git with the new build.
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$WORKTREE"/
# Without this file GitHub runs Jekyll, which drops folders that start with _ (like _expo/).
touch "$WORKTREE/.nojekyll"

git -C "$WORKTREE" add --all
if git -C "$WORKTREE" diff --cached --quiet; then
    echo "Nothing changed since the last deploy."
    exit 0
fi

if [ "${DRY_RUN:-0}" = "1" ]; then
    echo "DRY_RUN: these files would be published:"
    git -C "$WORKTREE" diff --cached --stat
    exit 0
fi

SOURCE="$(git rev-parse --short HEAD)"
git diff --quiet HEAD || SOURCE="${SOURCE} + uncommitted changes"
git -C "$WORKTREE" commit --quiet -m "Deploy ${SOURCE}"
git -C "$WORKTREE" push "$REMOTE" "$BRANCH"
echo "Done. GitHub Pages may take a minute to update."
