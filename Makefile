IMAGE_NAME = my-semantic-release

build:
	@docker build -t $(IMAGE_NAME) .

run:
	@docker run $(IMAGE_NAME)

dry-run:
	@docker run $(IMAGE_NAME) semantic-release --dry-run

all: build run
