#!/bin/bash

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
WORKSPACE_DIR="$( cd "$SCRIPT_DIR/.." &> /dev/null && pwd )"

VISIBLE_FOLDER_SERVER="${VISIBLE_FOLDER_SERVER}"
VISIBLE_FOLDER_CLIENT="${VISIBLE_FOLDER_CLIENT}"
VISIBLE_FOLDER_PROJECT="${VISIBLE_FOLDER_PROJECT}"
VISIBLE_FOLDER_VERSION="${VISIBLE_FOLDER_VERSION}"

# Set up SERVER_DIR & CLIENT_DIR
if [ -z "$VISIBLE_FOLDER_VERSION" ]; then
    SERVER_DIR="${WORKSPACE_DIR}/${VISIBLE_FOLDER_PROJECT}/server"
    CLIENT_DIR="${WORKSPACE_DIR}/${VISIBLE_FOLDER_PROJECT}/client/${VISIBLE_FOLDER_CLIENT}"
else
    SERVER_DIR="${WORKSPACE_DIR}/${VISIBLE_FOLDER_PROJECT}/${VISIBLE_FOLDER_VERSION}/server"
    CLIENT_DIR="${WORKSPACE_DIR}/${VISIBLE_FOLDER_PROJECT}/${VISIBLE_FOLDER_VERSION}/client/${VISIBLE_FOLDER_CLIENT}/client"
fi

# Backend setup functions
setup_backend() {
    case "$VISIBLE_FOLDER_SERVER" in
        node)
            cd "$SERVER_DIR/node" && npm install
            ;;
        java)
            cd "$SERVER_DIR" && cd java && mvn clean install
            ;;
        dotnet)
            cd "$SERVER_DIR/dotnet" && dotnet restore
            ;;
        php)
            cd "$SERVER_DIR" && cd php && composer install
            ;;
        python)
            cd "$SERVER_DIR" && cd python && python -m venv .venv && pip install -r requirements.txt
            ;;
        ruby)
            cd "$SERVER_DIR" && cd ruby && bundle install
            ;;
        *)
            echo "Unknown server: $VISIBLE_FOLDER_SERVER"
            exit 1
            ;;
    esac
}

# Frontend setup functions
setup_frontend() {
    cd "$CLIENT_DIR" && npm install
}

# Backend start functions
start_backend() {
    case "$VISIBLE_FOLDER_SERVER" in
        node)
            cd "$SERVER_DIR/node" && npm start
            ;;
        java)
            cd "$SERVER_DIR/java" && mvn spring-boot:run
            ;;
        dotnet)
            cd "$SERVER_DIR/dotnet" && dotnet run
            ;;
        php)
            cd "$SERVER_DIR/php" && composer start
            ;;
        python)
            cd "$SERVER_DIR" && cd python && flask --app server run --port 8080
            ;;
        ruby)
            cd "$SERVER_DIR" && cd ruby && bundle exec ruby server.rb
            ;;
        *)
            echo "Unknown server: $VISIBLE_FOLDER_SERVER"
            exit 1
            ;;
    esac
}

# Frontend start functions
start_frontend() {
    cd "$CLIENT_DIR" && npm run start --no-analytics
}

# Post-create commands
post_create() {
    echo "Running post-create commands..."
    setup_backend
    setup_frontend
}

# Post-attach commands
post_attach() {
    echo "Running post-attach commands..."
    start_backend &
    start_frontend
}

# Main execution
case "$1" in
    post-create)
        post_create
        ;;
    post-attach)
        post_attach
        ;;
    *)
        echo "Usage: $0 {post-create|post-attach}"
        exit 1
        ;;
esac

exit 0