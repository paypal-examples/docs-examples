#!/bin/bash

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
WORKSPACE_DIR="$( cd "$SCRIPT_DIR/.." &> /dev/null && pwd )"

VISIBLE_FOLDER_SERVER="$VISIBLE_FOLDER_SERVER"
VISIBLE_FOLDER_CLIENT="$VISIBLE_FOLDER_CLIENT"
VISIBLE_FOLDER_PROJECT="$VISIBLE_FOLDER_PROJECT"
VISIBLE_FOLDER_VERSION="$VISIBLE_FOLDER_VERSION"

DEVCONTAINER_WORKSPACE="$WORKSPACE_DIR/.devcontainer"
SETTINGS_FILE="$WORKSPACE_DIR/.vscode/settings.json"
PROJECT_WORKSPACE="$WORKSPACE_DIR/$VISIBLE_FOLDER_PROJECT"


if [ -z "$VISIBLE_FOLDER_CLIENT" ]; then
    echo "Error: VISIBLE_FOLDER_CLIENT is not set, setting it to default"
    VISIBLE_FOLDER_CLIENT="DEFAULT"
fi

if [ -z "$VISIBLE_FOLDER_VERSION" ]; then
    SERVER_WORKSPACE="$WORKSPACE_DIR/$VISIBLE_FOLDER_PROJECT/backend"
    CLIENT_WORKSPACE="$WORKSPACE_DIR/$VISIBLE_FOLDER_PROJECT/frontend"
    VERSION_WORKSPACE="$PROJECT_WORKSPACE"
    VISIBLE_FOLDER_DEVCONTAINER="$VISIBLE_FOLDER_PROJECT-$VISIBLE_FOLDER_CLIENT-$VISIBLE_FOLDER_SERVER"
    PROJECT_DIR="$VISIBLE_FOLDER_PROJECT"
else
    SERVER_WORKSPACE="$WORKSPACE_DIR/$VISIBLE_FOLDER_PROJECT/$VISIBLE_FOLDER_VERSION/backend"
    CLIENT_WORKSPACE="$WORKSPACE_DIR/$VISIBLE_FOLDER_PROJECT/$VISIBLE_FOLDER_VERSION/frontend"
    VERSION_WORKSPACE="$PROJECT_WORKSPACE/$VISIBLE_FOLDER_VERSION"
    VISIBLE_FOLDER_DEVCONTAINER="$VISIBLE_FOLDER_PROJECT-$VISIBLE_FOLDER_VERSION-$VISIBLE_FOLDER_CLIENT-$VISIBLE_FOLDER_SERVER"
    PROJECT_DIR="$VISIBLE_FOLDER_PROJECT/$VISIBLE_FOLDER_VERSION"

fi
echo "SERVER_WORKSPACE:$SERVER_WORKSPACE"
echo "CLIENT_WORKSPACE:$CLIENT_WORKSPACE"
echo "VISIBLE_FOLDER_DEVCONTAINER:$VISIBLE_FOLDER_DEVCONTAINER"
echo "PROJECT_WORKSPACE:$PROJECT_WORKSPACE"


echo "Workspace directory: $WORKSPACE_DIR"
echo "Server directory: $SERVER_WORKSPACE"
echo "Visible server folder: $VISIBLE_FOLDER_SERVER"
echo "Visible client folder: $VISIBLE_FOLDER_CLIENT"
echo "Visible project folder: $VISIBLE_FOLDER_PROJECT"
echo "Visible version: $VISIBLE_FOLDER_VERSION"
echo "Visible devcontainer: $DEVCONTAINER_WORKSPACE"
if [ ! -d "$SERVER_WORKSPACE" ]; then
    echo "Error: Server directory not found at $SERVER_WORKSPACE"
    exit 1
fi

if [ ! -d "$DEVCONTAINER_WORKSPACE" ]; then
    echo "Error: .devcontainer directory not found at $DEVCONTAINER_WORKSPACE"
    exit 1
fi

if [ -z "$VISIBLE_FOLDER_SERVER" ]; then
    echo "Error: VISIBLE_FOLDER_SERVER is not set"
    exit 1
fi

mkdir -p "$(dirname "$SETTINGS_FILE")"

echo "{
  \"files.exclude\": {" > "$SETTINGS_FILE"

first=true

for dir in "$WORKSPACE_DIR"/*/ ; do
    dir_name=$(basename "$dir")
    if [ -d "$dir" ] && [ "$dir_name" != "$VISIBLE_FOLDER_PROJECT" ]; then
        if [ "$first" = true ] ; then
            first=false
        else
            echo "," >> "$SETTINGS_FILE"
        fi
        echo -n "    \"**/$dir_name\": true" >> "$SETTINGS_FILE"
    fi
done

if [ -n "$VISIBLE_FOLDER_VERSION" ]; then
    for dir in "$PROJECT_WORKSPACE"/*/ ; do
        dir_name=$(basename "$dir")
        if [ -d "$dir" ] && [ "$dir_name" != "$VISIBLE_FOLDER_VERSION" ]; then
            if [ "$first" = true ] ; then
                first=false
            else
                echo "," >> "$SETTINGS_FILE"
            fi
            echo -n "    \"**/$VISIBLE_FOLDER_PROJECT/$dir_name\": true" >> "$SETTINGS_FILE"
        fi
    done
fi

for dir in "$DEVCONTAINER_WORKSPACE"/*/ ; do
    dir_name=$(basename "$dir")
    if [ -d "$dir" ] && [ "$dir_name" != "$VISIBLE_FOLDER_DEVCONTAINER" ]; then
        if [ "$first" = true ] ; then
            first=false
        else
            echo "," >> "$SETTINGS_FILE"
        fi
        echo -n "    \"**/.devcontainer/$dir_name\": true" >> "$SETTINGS_FILE"
    fi
done

for dir in "$SERVER_WORKSPACE"/*/ ; do
    dir_name=$(basename "$dir")
    if [ -d "$dir" ] && [ "$dir_name" != "$VISIBLE_FOLDER_SERVER" ]; then
        if [ "$first" = true ] ; then
            first=false
        else
            echo "," >> "$SETTINGS_FILE"
        fi
        echo -n "    \"**/$PROJECT_DIR/backend/$dir_name\": true" >> "$SETTINGS_FILE"
    fi
done

for dir in "$CLIENT_WORKSPACE"/*/ ; do
    dir_name=$(basename "$dir")
    if [ -d "$dir" ] && [ "$dir_name" != "$VISIBLE_FOLDER_CLIENT" ]; then
        if [ "$first" = true ] ; then
            first=false
        else
            echo "," >> "$SETTINGS_FILE"
        fi
        echo -n "    \"**/$PROJECT_DIR/frontend/$dir_name\": true" >> "$SETTINGS_FILE"
    fi
done

echo "
  }
}" >> "$SETTINGS_FILE"

echo "VS Code settings updated to show only $VISIBLE_FOLDER_SERVER and $VISIBLE_FOLDER_CLIENT folder in server directory."
echo "Contents of $SETTINGS_FILE:"
cat "$SETTINGS_FILE"