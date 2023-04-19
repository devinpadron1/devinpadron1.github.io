document.addEventListener('DOMContentLoaded', () => {
    // Select and assign variable to buttons
    const buttonNew = document.querySelector(".new");
    const buttonReset = document.querySelector(".reset");
    
    // Selects and assigns variable to container div
    const containerDiv = document.querySelector(".container");
    
    // Initial value for elements per side
    let squaresPerSide = 16;
    
    // Initial grid as page is loaded
    gridGenerator(squaresPerSide);

    // New grid button
    buttonNew.addEventListener("click", function() {
        squaresPerSide = 0;
        while (squaresPerSide <= 0 || squaresPerSide > 100 || isNaN(squaresPerSide)) {
            squaresPerSide = prompt("Enter a number from 1 to 100): ");
        }
        containerDiv.innerHTML = "";
        gridGenerator(squaresPerSide);
    })

    // Reset button
    buttonReset.addEventListener("click", function() {
        containerDiv.innerHTML = "";
        gridGenerator(squaresPerSide);
    })

    // Grid generator
    function gridGenerator(squaresPerSide) {
        // Get container width and calculate grid element width
        const containerWidth = containerDiv.clientWidth;
        const gridElementWidth = containerWidth / squaresPerSide;

        // Create variable for grid element count (sqrt)
        const elementCount = squaresPerSide ** 2; 

        // Creates new div elements
        for (let i = 0; i < elementCount; i++) {
            // Create div element
            const newDiv = document.createElement('div');

            // Assign class to elements
            newDiv.classList.add('class', `gridElement${i}`);

            // Asign dimensions
            newDiv.style.width = `${gridElementWidth}px`;
            newDiv.style.height = `${gridElementWidth}px`;

            // Generate random background color
            let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

            // Counter
            let counter = 0;
            
            // Add an event listener for each element
            newDiv.addEventListener("mouseover", function() {

                // Assign a random background color to div
                newDiv.style.backgroundColor = randomColor;

                // randomColor = 10% darker
                randomColor = darkenColor(randomColor, 10);

                counter ++;

                if (counter >= 10) {
                    newDiv.style.backgroundColor = 'black';
                }
            })

            // Adds new div element to container element
            containerDiv.appendChild(newDiv); 
        }
    }

    // Color darkening function
    function darkenColor(color, amount) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * amount);
        const R = (num >> 16) - amt;
        const G = ((num >> 8) & 0x00ff) - amt;
        const B = (num & 0x0000ff) - amt;
        
        return "#" + (
          0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
          (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1);
    }
});