# Name of your Docker image
IMAGE_NAME = my-semantic-release

# Docker build command
build:
	@docker build -t $(IMAGE_NAME) .

# Docker run command
run:
	@docker run $(IMAGE_NAME)

# Docker run with dry-run
dry-run:
	@docker run $(IMAGE_NAME) semantic-release --dry-run

# Make all
all: build run
