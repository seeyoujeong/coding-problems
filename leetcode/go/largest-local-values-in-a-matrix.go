package main

func LargestLocal(grid [][]int) [][]int {
	n := len(grid)
	result := make([][]int, 0)

	for i := range n - 2 {
			row := make([]int, 0)

			for j := range n - 2 {
					maxVal := 0

					for x := range 3 {
							for y := range 3 {
									maxVal = max(maxVal, grid[i + x][j + y])
							}
					}

					row = append(row, maxVal)
			}

			result = append(result, row)
	}

	return result
}