window.onload = function() {
    //When window loads, create nav
    createNavBar();
};

function createNavBar() {
    //create header
    var header = document.createElement("HEADER");
    header.setAttribute("id", "header");
    header.setAttribute("class", "nav-bar");
    document.body.appendChild(header);
    // create A tag for logo
    var createA = document.createElement('a');
    createA.setAttribute('href', "/");
    // create img for logo
    var logo = document.createElement("IMG");
    logo.setAttribute("src", "https://www.nomnomnow.com/images/logo_main.svg");
    logo.setAttribute("alt", "NomNomNow Logo");
    logo.setAttribute("class", "header-logo");
    //Add image to a tag
    createA.appendChild(logo);

    //Create ul for links
    var ul = document.createElement('ul');
    ul.setAttribute('id','menu');
    ul.setAttribute('class','menu');
    //object of all the nav links
    var navList = {"Dogs ": [{
            name:"Recipe",
            link: "/fresh-dog-food-recipes"
        },{
            name:"Variety Pack",
            link: "/site/variety-pack"
        },{
            name:"Treats",
            link: "/site/products/dog-treats"
        },{
            name:"Probiotics",
            link: "/site/products/dog-probiotics"
        },{
            name:"Microbiome",
            link: "/site/products/microbiome"
        }],
        "Cats " :[{
            name:"Recipe",
            link: "/fresh-cat-food-recipes"
        },{
            name:"Treats",
            link: "/site/products/dog-treats/?pet_type=CAT"
        },{
            name:"Supplements",
            link: "/site/products/cat-supplements/"
        },{
            name:"Microbiome",
            link: "/site/products/microbiome/?pet_type=CAT"
        }],
        "Learn" : [{
            name:"Our approach",
            link: "/site/how-it-works"
        },{
            name:"Success stories",
            link: "/learn/success-stories"
        },{
            name:"Article",
            link: "/learn"
        }],
        "Log in" :{
            type: "link",
            link: "/a/login?redirect_url=https%3A%2F%2Fwww.nomnomnow.com%2Fa%2F"
        },
        "Start trial" :{
            type: "cta-button",
            link: "/profile"
        }
    }

    Object.keys(navList).forEach(renderList);

    function renderList(element) {
        var li = document.createElement('li');
        var p = document.createElement('p')
        p.setAttribute('class', 'dropbtn')
        p.innerHTML = element
        // if navList[element] then its a drop down link
        if(Array.isArray(navList[element])){
            li.setAttribute('class','menu-item drop-down dropdown');

            var span = document.createElement('span')
            span.setAttribute('class', 'down-arrow')
            span.innerHTML = "▾"
            li.appendChild(p)
            li.appendChild(span)
            var ul2 = document.createElement('ul')
            ul2.setAttribute('class','drop-menu')

            navList[element].forEach((data)=>{
                var li2 = document.createElement('li')
                var a2 = document.createElement('a')
                a2.setAttribute('href', data.link);
                a2.innerHTML = data.name
                li2.appendChild(a2)
                ul2.appendChild(li2)
                li.appendChild(ul2)
            })
        }else{
            //If not, check the type
            if(navList[element].type == "link"){
                //Login link
                li.setAttribute('class','menu-item menu-link');

                var link = document.createElement('a')
                link.setAttribute('class', 'link')
                link.setAttribute('href', element.link);
                link.innerHTML = "Log in"
                li.appendChild(link)
            }else if(navList[element].type === "cta-button"){
                //cta button
                li.setAttribute('class','menu-item cta-btn-link');
                var ctaButton = document.createElement('a')
                ctaButton.innerHTML = "Start trial"
                ctaButton.setAttribute('class', 'cta-btn')
                ctaButton.setAttribute('href', '/profile')
                li.appendChild(ctaButton)
            }

        }
        //Add to ul nav list
        ul.appendChild(li);
    }

    //Add Logo
    document.getElementById("header").appendChild(createA);
    //Add ul
    document.getElementById("header").appendChild(ul);
}