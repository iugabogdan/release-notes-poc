FROM node:16-slim

RUN apt-get update && apt-get install -y git
RUN npm install -g semantic-release@19.0.5 \
    @semantic-release/commit-analyzer@9.0.2 \
    @semantic-release/release-notes-generator@19.0.3 \
    @semantic-release/changelog@6.0.2 \
    @semantic-release/github@8.0.6 \
    @semantic-release/git@10.0.1

WORKDIR /app

COPY . .