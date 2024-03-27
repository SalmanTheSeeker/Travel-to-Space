let container = document.getElementById("container")
let navItems = document.querySelectorAll(".nav-li")
let explore = document.getElementById("explore")
let mBody = document.body;

console.log(explore);


includeHTML("destination.html")


navItems.forEach(function(navItem)
{

    navItem.addEventListener("click", function(){

        removeUnderLine(navItems)
        navItem.classList.add("nav-li-active")

        if(navItem.id == "home"){

            includeHTML("home.html")
            container.classList = "container-main-home"

        }else if(navItem.id == "Destination"){

            includeHTML("destination.html")
            container.classList = "container-main-destination"

        }

    })

})

function titanClick(){

    let titan = document.getElementById("titan-a")

    console.log(titan.classList);

    titan.classList = "desti-li-a-active"

    console.log(titan.classList);

}


function removeUnderLine(items){

    items.forEach(item => {
        
        item.classList.remove("nav-li-active")


    });

}


function includeHTML(page){
    $(function(){
        $("#main").load(page);
    });

}
