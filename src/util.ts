import { randomUUID } from "node:crypto"

export default class User{
	name: string
	age: number
	uuid: string

	constructor(name: string, age: number){
		this.name = name
		this.age = age
		this.uuid = randomUUID()
	}

	printUser(){
		console.log(`User ${this.name} is ${this.age} years old`)
	}
	printUUID(){
		console.log(`User ${this.name} uuid is ${this.uuid} years old`)
	}

}

