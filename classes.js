// class User {
//     constructor(name){
//         this.name = name;
//     }
//     fullName(){
//         return `${this.name} ${this.lName}`;
//     }

//     set name(value){
//         if(value.length < 10){
//             return "Name is short";
//         }
//         this._name = value;
//     }

//     get name(){
//         return this._name;
//     }
//   }
  
//   let user = new User("John");
//   User.prototype.lName = "Muthaliar";
//   console.log(Object.getOwnPropertyNames(User.prototype)); // John
//   console.log(User.prototype.fullName); // undefined
//   console.log(user.fullName());


class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

















