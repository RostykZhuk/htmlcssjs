// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };
// ==========
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.ip}:80`;
  }
}
// Patern
const aws = new Server('AWS German', '82.21.21.32'); //creating constructor
console.log(aws.getUrl());
