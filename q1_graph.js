// Add your JavaScript code here
const MAX_WIDTH = Math.max(1080, window.innerWidth);
const MAX_HEIGHT = 360;
const margin = {top: 40, right: 100, bottom: 40, left: 300};

// Added
const NUM_EXAMPLES = 10;

let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;

// Set up SVG object with width, height and margin
let svg = d3.select("#graph1")
    .append("svg")
    .attr("width", graph_1_width)
    .attr("height", graph_1_height)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Create a linear scale for the x axis (number of occurrences)
let x = d3.scaleLinear()
    .range([0, (graph_1_width - margin.left - margin.right)]);

// Create a scale band for the y axis (game)
let y = d3.scaleBand()
    .range([0, graph_1_height - margin.top - margin.bottom])
    .padding(0.1);  // Improves readability

// Set up reference to global sales SVG group
let gSalesRef = svg.append("g");
// Set up reference to y axis label to update text in setData
let y_axis_label = svg.append("g");

// Add x-axis label
svg.append("text")
    .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2}, ${(graph_1_height - margin.top - margin.bottom) + 30})`) // Place this at the bottom middle edge of the graph
    .style("text-anchor", "middle")
    .text("Global Sales")
    .style("font-family", 'Lato');

// Add y-axis label
let y_axis_text = svg.append("text")
    .attr("transform", `translate(-200, ${(graph_1_height - margin.top - margin.bottom) / 2})`) // Place this at the center left edge of the graph
    .style("text-anchor", "middle")
    .text("Games")
    .style("font-family", 'Lato');

// Add chart title
let title = svg.append("text")
    .attr("transform", `translate(${(graph_1_width - margin.left - margin.right) / 2}, ${-20})`) // Place this at the top middle edge of the graph
    .style("text-anchor", "middle")
    .style("font-size", 20);

/**
 * Sets the data on the barplot using the provided index of valid data sources and an attribute
 * to use for comparison
 */
function setData(attr) {
    // Load the video games CSV file into D3 by using the d3.csv() method
    d3.csv("data/video_games.csv").then(function(data) {
        // Clean and strip desired amount of data for barplot
        data = cleanData(data, function(a, b) { return parseFloat(b[attr]) - parseFloat(a[attr]) }, NUM_EXAMPLES);

        // Update the x axis domain with the max global sales of the provided data
        x.domain([0, d3.max(data, function(d) { return parseFloat(d[attr]) })]);

        // Update the y axis domains with the desired attribute
        y.domain(data.map(function(d) { return d["Name"]; }));

        // Render y-axis label
        y_axis_label.call(d3.axisLeft(y).tickSize(0).tickPadding(10));

        let bars = svg.selectAll("rect").data(data);

        var color = d3.scaleOrdinal().range(["#E1BE6A", "#40B0A6", "#E1BE6A", "#40B0A6", "#E1BE6A", "#40B0A6", "#E1BE6A", "#40B0A6", "#E1BE6A", "#40B0A6"]);

        bars.enter()
            .append("rect")
            .merge(bars)
            .transition()
            .duration(1000)
            .attr("x", x(0))
            .attr("y", function(d) { return y(d["Name"]); })
            .attr("width", function(d) { return x(parseFloat(d[attr])); })
            .attr("height", y.bandwidth()) // y.bandwidth() makes a reasonable display height
            .style("fill", function(d, i) {
                return color(i);
            });

        let g_sales = gSalesRef.selectAll("text").data(data);

        // Render the text elements on the DOM
        g_sales.enter()
            .append("text")
            .merge(g_sales)
            .transition()
            .duration(1000)
            .attr("x", function(d) { return x(parseFloat(d[attr]) + 5); })
            .attr("y", function(d) { return y(d["Name"]) + 10; })
            .style("text-anchor", "start")
            .text(function(d) { return parseFloat(d[attr]); })
            .style("font-size", 12)
            .style("font-family", 'Lato'); // Get global sales of the game

        if (attr == "Global_Sales") {
            title.text("Top 10 Video Games in the World")
            .style("font-size", 18)
            .style("font-family", 'Lora')
            .style("font-weight", 'bold');
        } else if (attr == "NA_Sales") {
            title.text("Top 10 Video Games in North America")
            .style("font-size", 18)
            .style("font-family", 'Lora')
            .style("font-weight", 'bold');
        }

        // Remove elements not in use if fewer groups in new dataset
        bars.exit().remove();
        g_sales.exit().remove();
    });
}

/**
 * Cleans the provided data using the given comparator then strips to first numExamples
 * instances
 */
function cleanData(data, comparator, numExamples) {
    // Sort and return the given data with the comparator (extracting the desired number of examples)
    sorted_data = data.sort(comparator);
    return sorted_data.slice(0, numExamples);
}

// On page load, render the barplot with the game data
setData("Global_Sales");