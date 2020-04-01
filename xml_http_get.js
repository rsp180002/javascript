//small snipped of how to get data from apis
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
alert(data.title); // there are other data as well like id, userid 
}

request.send();
