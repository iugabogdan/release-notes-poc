module.exports = {
    branches: ['master'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
          parserOpts: {
            headerPattern: /^(?::([\w-]*):)?\s*(\w*)(?:\(([^)]*|^TP\d{6}$)\))?:\s*(.*)$/,
          },
          releaseRules: [
            { type: 'feat', release: 'minor' },
            { type: 'fix', release: 'patch' },
            { type: 'docs', release: false },
            { type: 'style', release: false },
            { type: 'refactor', release: false },
            { type: 'perf', release: 'minor' },
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
  