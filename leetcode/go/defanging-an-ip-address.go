package main

import "strings"

func DefangIPaddr(address string) string {
	return strings.ReplaceAll(address, ".", "[.]")
}