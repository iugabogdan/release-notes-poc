module.exports = {
    branches: [process.env.BRANCH_NAME || 'master'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
          releaseRules: [
            { type: 'feat', release: 'major' },
            { type: 'fix', release: 'major' },
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
      [
        'semantic-release-slack-bot',
        {
          notifyOnSuccess: true,
          notifyOnFail: true,
          slackWebhook: process.env.SLACK_WEBHOOK,
          markdownReleaseNotes: true,
          onSuccessTemplate: {
            text: `Package with github tag *$npm_package_version* of *$package_name* is now live in production.\nBelow you can find the release notes.\n$release_notes`
          },
          branchesConfig: [
            {
              pattern: process.env.BRANCH_NAME || 'master',
              notifyOnSuccess: true,
            },
          ],
        },
      ],
      '@semantic-release/github'
    ]
  };
  