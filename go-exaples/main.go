package main

import "fmt"

// Person struct for holding person details
type Person struct { //public
	name   string
	age    int
	salary float64
}

func (p Person) raiseSalary(bonus float64) { //private method
	p.salary += bonus
}

// PrintInFormat - format printing
func (p Person) PrintInFormat() string { // public method
	return fmt.Sprintf("Name: %s, Age: %d, Salary: %.2f", p.name, p.age, p.salary)
}
