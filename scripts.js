$( document ).ready(function() {
    
    // Ramdomly generate the number of stars:
    var starsCount = getRandomInt(50, 100);
    
    // Iterate over the number of stars:
    for (var i = 0; i < starsCount; i++) {
        // Generate a new star properties
        var starProps = createStar();
        
        // Create the new star div element:
        $('#stars').append('<div id="star-' + i + '" class="star"></div>')
        
        // Pass star porpoerties as CSS properties:
        $('#star-' + i).css(starProps);
    }
    
    function createStar() {
        
        var starSize = getRandomInt(1, 5) + 'px'; // random star size
        var starGlow = '0 0 ' + getRandomInt(3, 10) + 'px ' + getRandomInt(1, 3) + 'px white'; // random star glow size
        
        // Star CSS properties literal object
        var star = {
            'display': 'block',
            'position':  'absolute',
            'right': getRandomInt(0, 100) + '%', 
            'top': getRandomInt(0, 100) + '%',
            'height': starSize,
            'width': starSize,
            'background-color': 'white',
            'border-radius': '50%',
            '-webkit-box-shadow': starGlow,
            '-moz-box-shadow': starGlow,
            'box-shadow': starGlow,
            '-webkit-animation': 'twink ' + getRandomInt(5, 10) + 's infinite alternate',
            '-moz-animation': 'twink ' + getRandomInt(5, 10) + 's infinite alternate',
            'animation': 'twink ' + getRandomInt(5, 10) + 's infinite alternate',
        };
        
        return star;
    }
    
    // helper function to generate randome numbers from a given min and max integers
    function getRandomInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
    
});
