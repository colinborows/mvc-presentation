
class node {
    constructor(name, status, description) {
        this.name = name;
        this.status = status;
        this.description = description;
    }
    statusOn() {
        document.getElementById(this.name).classList.add('active');
        this.status = 'on';
        console.log(this.name);
    }
    
    statusOff() {
        this.status = 'off';
        document.getElementById(this.name).classList.remove('active');
    }

}

let slides = [];

class slide {
  constructor(node1, node2, title, text) {
    this.node1 = node1;
    this.node2 = node2;
    this.title = title;
    this.text = text;
    slides.push(this);
  }

  showSlide() {
    document.getElementById("title").innerHTML = this.title;
    document.getElementById("text").innerHTML = this.text;
    document.getElementById(this.node1).classList.add("active");
    document.getElementById(this.node2).classList.add("active");
  }
}

home = new slide(
    'none', 
    'none', 
    'MVC', 
    'MVC, or model view controller, is a method of organization for programming that abstracts the functionality of the program into 3 distinct parts. The model interacts with the database, the view controls the display, and the controller implements the logic that communicates between everything.'
);

slide1 = new slide(
    'user', 
    'user', 
    'USER', 
    'Let us first begin with the USER. The USER visits a website. They will send a request which will be sent to the BROWSER. For example, by typing in a URL, they are sending a request to the browser that they would like to receive the information that the URL points to.'
);

slide2 = new slide(
    'user', 
    'browser', 
    'USER TO BROWSER', 
    'The browser then takes the request of the user and sends it to the router. Types of requests could be GET, POST, PUT, or DELETE.  GET requests retrieve data from the server. Typing in a URL is an example of a GET request. POST requests add data to the server. Filling out a form is an example of a POST request. PUT requests update information on the server. “Liking” a photo is an example of a PUT request. DELETE requests delete information from the server. Deleting a photo or comment is an example of a DELETE request. The client-side javascript (public/js/main.js) is what is going to hear these request from the user and send them to the ROUTER.'
);

slide3 = new slide(
    'browser', 
    'router', 
    'BROWSER TO ROUTER', 
    'The ROUTER hears the requests from the BROWSER and sends them to the CONTROLLER. It takes in the request and sends it to the CONTROLLER with information on where to go next.'
);

slide4 = new slide(
    'router', 
    'controller', 
    'ROUTER TO CONTROLLER', 
    'The CONTROLLER is doing a lot of the heavy lifting. First, it takes the request from the ROUTER and send it to the MODEL with instructions on how to interact with the SERVER. We will return to the CONTROLLER after the MODEL responds.'
);
slide6 = new slide(
    'controller', 
    'model',
    'CONTROLLER TO MODEL', 
    'The MODEL houses the format of the data that is going to be requested from the server. Using a software such as MONGOOSE, you can create SCHEMAS for your data. A SCHEMA is a framework for data. For example, say you have a form and you want a person\'s name and date of birth. You can define in the SCHEMA that the first data point will be a string with the person\'s name, and the second data point will be a number, or 3 numbers, however you want the data to be sent to the server. As applications get more complex, it is important to keep data and information organized, and this main function of the MODEL.'
);
slide7 = new slide(
    'model', 
    'database',
    'MODEL TO DATABASE BACK TO MODEL', 
    'The DATABASE is where the data is housed. The MODEL sends a request to the server of what data it would like to send or receive, and the DATABASE responds with the data requested back to the MODEL.'
);
slide8 = new slide(
    'model', 
    'controller', 
    'MODEL TO CONTROLLER', 
    'The MODEL takes the data it received from the DATABASE and send the data to the CONTROLLER.'
);

slide9 = new slide(
    'controller', 
    'view', 
    'CONTROLLER TO VIEW', 
    'The CONTROLLER takes the data received and sends it to the VIEW.'
);

slide10 = new slide(
    'view', 
    'controller', 
    'VIEW TO CONTROLLER', 
    'The VIEW\'s job is to render everything that the USER sees. This could be a full view, where the entire page renders, or partial view, where only a portion of the page renders. It sends this rendering data back to the CONTROLLER.'
);

slide11 = new slide(
    'controller', 
    'browser', 
    'CONTROLLER TO BROWSER', 
    'The CONTROLLER takes the render and sends it to the BROWSER.'
);

slide12 = new slide(
    'browser', 
    'user', 
    'BROWSER TO USER', 
    'The BROWSER then displays the render that is shown to the USER.'
);

slide13 = new slide(
    'none', 
    'none', 
    'WHY', 
    'That is the basic routing of MVC, but why would you want this? What this structure does is abstract, or isolate, all the various elements of the program into their respective parts. Say you wanted to change an element of the website or a technology you\'re using. For example, your company decides they are switching databases. With MVC, you can easily alter the MODEL without having to touch any of the other code for the program. The same is true for the VIEW. If you decide you want to change what front-end software you are using to render the data, you can simply change the VIEW portion without effecting anything else. This is the power of MVC.'
);

slide14 = new slide(
    'none', 
    'none', 
    'In Conclusion', 
    'MVC is simply a method of organization that improves workflow for developers. By implementing MVC, your programs will be more structured, malleable, and better suited for collaboration with other developers.'
);




// let slides = [home, slide1, slide2];

userNode = new node('user', 'off', 'The user interacts with the browser to send requests to the server.');
browserNode = new node('browser', 'off', 'The browser sends requests to the server.');
routerNode = new node('router', 'off', 'The router receives the request and sends it to the controller.');
controllerNode = new node('controller', 'off', 'The controller receives the request and sends it to the model.');
viewNode = new node('view', 'off', 'The view receives the data from the model and sends it to the browser.');
modelNode = new node('model', 'off', 'The model receives the request from the controller and sends it to the database.');
databaseNode = new node('database', 'off', 'The database receives the request from the model and sends it back to the model.');

let nodes = [userNode, browserNode, viewNode, controllerNode, routerNode, modelNode, databaseNode];

let nextButton = document.getElementById('next');
let previousButton = document.getElementById('prev');


let slideCounter = 0;

nextButton.addEventListener('click', function() {
    if(slideCounter < slides.length - 1){
    clear();
    slideCounter++;
    console.log(slides[slideCounter]);
    slides[slideCounter].showSlide();
    console.log(slideCounter)
}
});

previousButton.addEventListener('click', function() {

    if(slideCounter > 0){
        clear();
        slideCounter--;
        slides[slideCounter].showSlide();
        console.log(slides[slideCounter]);
        console.log('working');
    }
});

// add an event listener to each node that opens a popup box
let nodesClick = document.getElementsByClassName('mvc');
for (let i = 0; i < nodes.length; i++) {
    nodesClick[i].addEventListener('click', function() {
        openPopup(nodes[i]);
    });
}

let closeButton = document.getElementById('close');


closeButton.addEventListener('click', function() {
    // use the showSlide method to show the slide that corresponds to the node
    clear();
    slides[slideCounter].showSlide();
    document.getElementById('prev').classList.remove("hidden");
    document.getElementById('next').classList.remove("hidden");
    document.getElementById('close').classList.add('hidden');
});

function openPopup(node) {
    clear();
    console.log(node);
    document.getElementById("title").innerHTML = node.name.toUpperCase();
    document.getElementById("text").innerHTML = node.description;
    document.getElementById('prev').classList.add("hidden");
    document.getElementById('next').classList.add("hidden");
    document.getElementById('close').classList.remove('hidden');
    document.getElementById(node.name).classList.add('active');
}


function clear(){
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].statusOff();
    }
}