module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/miroadamy-practice/github-actions-demo-1',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
