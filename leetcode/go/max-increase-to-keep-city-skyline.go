package main

func MaxIncreaseKeepingSkyline(grid [][]int) int {
	n := len(grid)
	rowMax := make([]int, n);
	colMax := make([]int, n);

	for i, row := range grid {
			for j, col := range row {
					rowMax[i] = max(rowMax[i], col)
					colMax[j] = max(colMax[j], col)
			}
	}

	var result int

	for i, row := range grid {
			for j, col := range row {
					maxHeight := min(rowMax[i], colMax[j])
					result += maxHeight - col
			}
	}

	return result
}