if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through each argument and create a folder with "ex" prefix
for arg in "$@"; do
    mkdir -p "ex$arg"
done
