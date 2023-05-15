FROM node:18-slim

ENV GH_TOKEN=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

RUN apt-get update && apt-get install -y git
RUN npm install -g semantic-release \
    @semantic-release/commit-analyzer \
    @semantic-release/release-notes-generator \
    @semantic-release/changelog \
    @semantic-release/github \
    @semantic-release/git

WORKDIR /usr/src/app

COPY . .

CMD ["semantic-release", "--dry-run"]
