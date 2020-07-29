package main

import "fmt"

// Person struct for holding person details
type Person struct { //public
	name   string
	age    int
	salary float64
}

// Manager struct
type Manager struct {
	Person     // embedding an nameless Person here
	department string
}

func (p Person) printPersonNameMethod() {
	fmt.Println("Name: ", p.name)
}

func printNameFunction(p Person) {
	fmt.Println("Name: ", p.name)
}

func main() {
	m := Manager{Person{"Techo-Neo", 21, 35000}, "Finance"}
	fmt.Println(m.name)         // prints-  Techo-Neo
	printNameFunction(m.Person) // prints - Name:  Techo-Neo
	m.printPersonNameMethod()   // prints - Name:  Techo-Neo
}
