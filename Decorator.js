class EmployeeComponent {
    doTask(){

    }
    join(date){

    }
    terminate(date){

    }
    getName(){

    }
    formatDate(data){
        var d = new Date(date);
        return d.toLocaleDateString();
    }
}

class EmployeeConcreteComponent extends EmployeeComponent{
    constructor(name){
        super();
        this.name = name;
    }
    doTask(){
        // Unsigned task
    }
    join(date){
        console.log(this.name, "joined on", this.formatDate(date));
    }
    terminate(date){
        console.log(this.name, "terminated on", this.formatDate(date));
    }
    getName(){
        return this.name;
    }
}

class EmployeeDecorator extends EmployeeComponent {
    constructor(employee){
        super();
        this.employee = employee;
    }
    join(date){
        this.employee.join(date);
    }
    terminate(date){
        this.employee.terminate(date);
    }
    getName(){
        this.employee.getName();
    }
}

class Manager extends EmployeeDecorator {
    constructor(employee){
        // console.log(employee);
        super(employee);
    }
    createRequirement(){
        console.log(this.employee.getName() + " is create requirements.");
    }
    assignTask(){
        console.log(this.employee.getName() + " is assigning tasks.");
    }
    manageProgress(){
        console.log(this.employee.getName() + " is managing the progress.");
    }
    // Override
    doTask(){
        this.employee.doTask();
        this.createRequirement();
        this.assignTask();
        this.manageProgress();
    }
}

class TeamLeader extends EmployeeDecorator {
    constructor(employee){
        // console.log(employee);
        super(employee);
        // console.log(this.getName());
        // console.log(this.doTask());
    }
    planning(){
        console.log(this.employee.getName() + " is planing.");
    }
    motivate(){
        console.log(this.employee.getName() + " is motivating his members.");
    }
    monitor(){
        console.log(this.employee.getName() + " is monitoring his members.");
    }
    // Override
    doTask(){
        this.employee.doTask();
        this.planning();
        this.motivate();
        this.monitor();
    }
}
e = new EmployeeConcreteComponent("Black");
m = new Manager(e);
f = new TeamLeader(m.employee);
f.doTask();