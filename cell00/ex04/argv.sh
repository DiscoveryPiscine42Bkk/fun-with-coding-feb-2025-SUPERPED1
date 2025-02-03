if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Print up to the first 3 arguments
    for arg in "$1" "$2" "$3"; do
        # Check if argument exists (handles less than 3 arguments)
        if [ -n "$arg" ]; then
            echo "$arg"
        fi
    done
fi
