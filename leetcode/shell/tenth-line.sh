#!/bin/bash
count=0
while IFS= read -r line; do
    count=$((count + 1))
    if [ "$count" -eq 10 ]; then
        echo "$line"
        break
    fi
done < file.txt