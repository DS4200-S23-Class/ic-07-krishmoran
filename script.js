// The code is executed once the window is loaded
window.onload = function() {

    // The data to be visualized
    var data = [55000, 48000, 27000, 66000, 90000];

    // The margin around the SVG element
    var margin = { top: 10 , right : 10 , bottom : 10 , left : 10}
    
    // Selects the <svg> element with the id 'chart' and appends an <svg> element to it with a fixed width and height
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000 + margin.top + margin.bottom);
    
    // Scales the data to fit the height of the chart
    var y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 400]);

    // Appends a <g> element to the <svg> element, which will hold the y-axis, and calls the d3.axisRight() function to create the y-axis
    svg.append("g")
        .attr("transform", "translate(50, 50)")
        .call(d3.axisRight(y));

    // Selects all <circle> elements in the SVG, binds the data to them, and appends new circles for any data points that don't have a corresponding circle yet
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        // Positions each circle at a fixed x-coordinate and a y-coordinate based on the scaled data value
        .attr("cx", 50)
        .attr("cy", function(d) {
            return 50 + y(d);
        })
        // Sets the radius and fill color of each circle
        .attr("r", 6)
        .attr("fill", "blue");
};