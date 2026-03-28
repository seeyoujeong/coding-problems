#!/bin/bash
while IFS= read -r line; do
    if [[ $line =~ ^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$ ]]; then
        echo "$line"
    fi
done < file.txt

# 1
p1='\([0-9][0-9][0-9]\)\ [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'
p2='[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'

while read line; do
  case "$line" in
  $p1 | $p2) echo "$line" ;;
  esac
done < file.txt

# 2
grep -E '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt

# 3
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt