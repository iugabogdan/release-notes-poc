FROM node:18-slim

RUN apt-get update && apt-get install -y git
RUN npm install -g semantic-release \
    @semantic-release/commit-analyzer \
    @semantic-release/release-notes-generator \
    @semantic-release/changelog \
    @semantic-release/github \
    @semantic-release/git

WORKDIR /app

COPY . .

CMD ["semantic-release"]