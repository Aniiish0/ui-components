// release.config.js
import commitAnalyzer from "@semantic-release/commit-analyzer";
import releaseNotesGenerator from "@semantic-release/release-notes-generator";
import changelog from "@semantic-release/changelog";
import npm from "@semantic-release/npm";
import git from "@semantic-release/git";

export default {
  branches: ["main"],
  plugins: [commitAnalyzer, releaseNotesGenerator, changelog, npm, git],
};
