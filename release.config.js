import { createRequire } from "module";
const require = createRequire(import.meta.url);

const commitAnalyzer = require("@semantic-release/commit-analyzer");
const releaseNotesGenerator = require("@semantic-release/release-notes-generator");
const changelog = require("@semantic-release/changelog");
const npm = require("@semantic-release/npm");
const git = require("@semantic-release/git");

export default {
  branches: ["main"],
  plugins: [commitAnalyzer, releaseNotesGenerator, changelog, npm, git],
};
