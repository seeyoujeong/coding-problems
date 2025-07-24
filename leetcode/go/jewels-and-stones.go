package main

func NumJewelsInStones1(jewels string, stones string) int {
	result := 0

	for _, j := range jewels {
			for _, s := range stones {
					if j == s {
							result++
					}
			}
	}

	return result
}

func NumJewelsInStones2(jewels string, stones string) int {
	jewelSet := make(map[rune]bool)

	for _, jewel := range jewels {
			jewelSet[jewel] = true
	}

	count := 0

	for _, stone := range stones {
			if jewelSet[stone] {
					count++
			}
	}

	return count
}