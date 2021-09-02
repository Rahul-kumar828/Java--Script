//inheritance -> class which is inherit from the parent class
/*
parent class
person
 */
/*
chile class
employee
 */
class Person{
    constructor(firstName,lastName) {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    greet(){
        let msg=`Welcome Mr. ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);

    }
}
class Employee extends Person{
      constructor(firstName,lastName ,age,designation) {
          super(firstName,lastName);
          this.age=age;
          this.designation=designation;

      }
      getAge(){
          return this.age;

      }
      getDesignation(){
          return this.designation;
      }
      greet() {
          let msg=`Hello Mr. ${this.getFirstName()} ${this.getLastName()} your age is ${this.getAge()}  and you are ${this.getDesignation()}`;

          console.log(msg);
      }
}
let employee=new Employee('Rahul','Kumar',21,'Manager');
employee.greet();

