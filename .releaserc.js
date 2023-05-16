module.exports = {
    branches: ['master'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
          releaseRules: [
            { type: 'feat', release: 'major' },
            { type: 'fix', release: 'mmajor' },
            { type: 'perf', release: 'major' },
            { type: 'docs', release: false },
            { type: 'style', release: false },
            { type: 'refactor', release: false },
            { type: 'test', release: false },
            { type: 'build', release: false },
            { type: 'chore', release: false },
            { type: 'revert', release: false }
          ]
        }
      ],
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md'],
          message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
      ],
      '@semantic-release/github'
    ]
  };
  