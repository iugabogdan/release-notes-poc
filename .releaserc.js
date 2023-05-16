module.exports = {
    branches: ['master'],
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
          slackWebhook: 'https://hooks.slack.com/services/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',
          markdownReleaseNotes: true,
          onSuccessTemplate: {
            text: `Package with version *<$npm_package_version>* of *<$package_name>* is now live on production. Below you can find the release notes.\n<$release_notes>`
          },
          branchesConfig: [
            {
              pattern: 'master',
              notifyOnSuccess: true,
            },
          ],
        },
      ],
      '@semantic-release/github'
    ]
  };
  