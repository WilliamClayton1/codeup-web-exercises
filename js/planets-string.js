(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    let newPlanetsString = planetsArray.join('<br>');
    console.log(newPlanetsString);

    /** BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let newList = newPlanetsString.split('<br>');

    newList = newList.map((i) => {
        return '<li>' + i + '</li>';
    })
    let unorderedList = '<ul>' + newList.join('') + '</ul>';
    console.log(unorderedList);

})();