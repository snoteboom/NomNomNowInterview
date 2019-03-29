# NomNomNowInterview

Instructions: 
Eng exercises
  Set up:
    Create a github repo to check in completed work.
1) Site nav menu


    Visit nomnomnow.com and observe how the top navigation menu works.
    Reimplement the navigation menu using CSS and Javascript. Use vanilla Javascript (no third party libraries).
    Make a page to demo functionality.
    
    Write a brief explanation of what you did and why you made the choices you made.

2) Dog food comparison calculator

    Visit https://www.nomnomnow.com/site/nutrient-calculator and play around with the existing calculator, understand what it's doing.
   
    Look up nutrient info for 3 popular dog kibble products on the Internet
    
    Use HTML + CSS + either vanilla JS or ReactJS to reimplement the comparison calculator as selectable dropdown menus, getting rid of all the free form input fields.
    
    First dropdown should contain the 3 popular kibble brands
    
    Second dropdown should be the same set of 4 NomNomNow recipes
    
    Use the following formulas for converting percentage values in Guaranteed Analysis to grams:
        Grams protein = (% protein + 1.5) / (kcal per kg / 10000)
        Grams fat = (% fat + 1) / (kcal per kg / 10000)
        Grams carbs = (1000 - (grams protein * 3.5) - (grams fat * 8.5))/3.5
        If grams carbs is less than 0, set value to 0.
        
    Make a page to demo functionality.
    
    Write a brief explanation of what you did and why you made the choices you made.




##### Explination for # 1:

    To run: 
    1) Clone repo
    2) cd Site_Nav
    3) node server.js
    
            (I also add the site_nav.js script to my react page so they can be viewed on one page)

    You will see that in the site_nav.js folder there is js code creating each element in the nav bar.
    I choise to create an object "navList" containing all the nav bar links and drop downs so i could loop through the object and create each ul/li
    The keys of the array is what should be displayed in the nav bar, the values that are arrays mean that they are dropdowns.
  
  
##### Explination for # 2:
    To run: 
    1) Clone repo
    2) cd dog-food-calculator/
    3) npm start
    4) open http://localhost:3000/
    

    When recreating the dog food nutrition calculator, I noticed that the instructions said show 3 different kibble brands
    but when looking up dog kibble i saw that each brand had different recipes with different nutritional values so i decided to 
    list the brand along with a few different recipes to give the user more useful information.
    
    I also saw that on the orginal page the user had to click "See the the nutrient comparison below" since they entered the values by hand but once the calculator no longer needed the user to enter the nutrition values on their kibble I realized there was no reason to add this extra user step.
   
    
    If you look through the code you will see a few different components and elements(dumb components). The components manage data,
    and the elements just display the data.

 
    *Not wanting to stray from the instruction too much i didn't make a typeahead form field although i belive this would benefit
    the user since there are so many different brands and recipes.
