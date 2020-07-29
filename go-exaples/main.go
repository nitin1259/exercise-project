package main

import "fmt"

// Role interface for ploymorphism
type Role interface {
	roleName()
}

// Person struct for holding person details
type Person struct { //public
	name   string
	age    int
	salary float64
}

func (p Person) roleName() {
	fmt.Println("Generic Person role Name")
}
func printRoleName(r Role) {
	r.roleName()
}
func main() {
	p1 := Person{"Techo-Neo", 23, 45000}
	printRoleName(p1)
}
