package main

import "fmt"

// Human interface for ploymorphism
type Human interface {
	doSomething()
}

// Person struct for holding person details
type Person struct {
	name   string
	age    int
	salary float64
}

func (p Person) doSomething() {
	fmt.Println("doing something")
}

func main() {

	var p1 Human
	// create struct specifying field name
	p1 = Person{
		name:   "TechoNeo",
		age:    22,
		salary: 20000,
	}

	// create struct without specify struct name.
	p2 := Person{"Techo-Neo", 23, 45000}

	fmt.Println("Person 1", p1)
	fmt.Println("Person 2", p2)
}
