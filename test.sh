find . -name package.json -maxdepth 2 -type f | while read -r file; do
    directory=$(dirname "$file")
    cd "$directory"
    echo "$PWD"
    npm run format:check && cd -
done