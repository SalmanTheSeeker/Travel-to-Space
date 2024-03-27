let container = document.getElementById("container")
let navItems = document.querySelectorAll(".nav-li")
let explore = document.getElementById("explore")



const planets = 
[
    {
        Url:"./assets/imgs/moon.png",
        Dis:".384 MIL. KM",
        Time:"3 DAYS"
        
    },

    {
        Url:"./assets/imgs/mars.png",
        Dis:"255 MIL. KM",
        Time:"9 MONTHS"
        
    },

    {
        Url:"./assets/imgs/europa.png",
        Dis:"628 MIL. KM",
        Time:"5.5 YEARS"
        
    },

    {
        Url:"./assets/imgs/titan.png",
        Dis:"746 MIL. KM",
        Time:"7 YEARS"
        
    }

    
]


includeHTML("home.html")


navItems.forEach(function(navItem)
{

    navItem.addEventListener("click", function(){

        removeUnderLine(navItems, "nav-li-active")
        navItem.classList.add("nav-li-active")

        if(navItem.id == "home"){

            includeHTML("home.html")
            container.classList = "container-main-home"

        }else if(navItem.id == "Destination"){

            includeHTML("destination.html")
            container.classList = "container-main-destination"

        }else if(navItem.id == "Crew"){

            includeHTML("comming1.html")
            container.classList = "container-main-destination"

        }else if(navItem.id == "Technology"){

            includeHTML("comming2.html")
            container.classList = "container-main-destination"

        }

    })

})

function exploreClick(){

    removeUnderLine(navItems, "nav-li-active")
    navItems[1].classList.add("nav-li-active")

    includeHTML("destination.html")
    container.classList = "container-main-destination"

}

function moonClick(){

    removeDestLine("moon")

}

function marsClick(){

    removeDestLine("mars")

}

function eurpaClick(){

    removeDestLine("eurpa")

}

function titanClick(){

    removeDestLine("titan")

}


function removeDestLine(myID){

    let items = document.querySelectorAll(".desti-a")

    items.forEach(item => {
        
        item.classList.remove("desti-li-a-active")

    });

    document.getElementById(myID).classList.add("desti-li-a-active")
    let tital = document.getElementById("destination-title")
    let img = document.getElementById("destination-img")
    let disrtance = document.getElementById("avg-dis")
    let time = document.getElementById("est-time")

    tital.innerText = myID

    switch (myID) {
        case "moon":
            img.src = planets[0].Url
            disrtance.innerText = planets[0].Dis
            time.innerText = planets[0].Time
        break;

        case "mars":
            img.src = planets[1].Url
            disrtance.innerText = planets[1].Dis
            time.innerText = planets[1].Time
        break;
        case "eurpa":
            img.src = planets[2].Url
            disrtance.innerText = planets[2].Dis
            time.innerText = planets[2].Time
        break;
        case "titan":
            img.src = planets[3].Url
            disrtance.innerText = planets[3].Dis
            time.innerText = planets[3].Time
        break;
    
        default:
            break;
    }

}



function removeUnderLine(items, cls){

    items.forEach(item => {
        
        item.classList.remove(cls)


    });

}


function includeHTML(page){
    $(function(){
        $("#main").load(page);
    });

}
