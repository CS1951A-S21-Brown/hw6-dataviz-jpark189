let filenames = ["data/video_games_q3_action.csv", "data/video_games_q3_adventure.csv",
                "data/video_games_q3_fighting.csv", "data/video_games_q3_misc.csv",
                "data/video_games_q3_platform.csv", "data/video_games_q3_puzzle.csv",
                "data/video_games_q3_racing.csv", "data/video_games_q3_role_playing.csv",
                "data/video_games_q3_shooter.csv", "data/video_games_q3_simulation.csv",
                "data/video_games_q3_sports.csv", "data/video_games_q3_strategy.csv"];

let graph_3_width = MAX_WIDTH / 2, graph_3_height = 350;

radius = Math.min(graph_3_width, graph_3_height) / 2;
legend_rect_size = 20;
legend_spacing = 4;
legend_height = graph_3_height;
     
var svg_pie_A = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_B = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

var svg_pie_C = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_D = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_E = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_F = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_G = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2  + ")");

var svg_pie_H = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

var svg_pie_I = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

var svg_pie_J = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

var svg_pie_K = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

var svg_pie_L = d3.select("#graph3")
    .append("svg")
    .attr("width", graph_3_width * 1.5)     
    .attr("height", graph_3_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_3_width / 3 + "," + graph_3_height / 1.2 + ")");

// Set up reference to tooltip
let tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var g_A = svg_pie_A.append("g")
var g_B = svg_pie_B.append("g")
var g_C = svg_pie_C.append("g")
var g_D = svg_pie_D.append("g")
var g_E = svg_pie_E.append("g")
var g_F = svg_pie_F.append("g")
var g_G = svg_pie_G.append("g")
var g_H = svg_pie_H.append("g")
var g_I = svg_pie_I.append("g")
var g_J = svg_pie_J.append("g")
var g_K = svg_pie_K.append("g")
var g_L = svg_pie_L.append("g")

var path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius * 0.5);

var label = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - 80);

// Genre A: Action
d3.csv(filenames[0]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_A = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_A.selectAll(".arc")
            .data(pie_A(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_A.selectAll(".legend")
            .data(pie_A(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    

    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);

    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })
});

// Genre B: Adventure
d3.csv(filenames[1]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_B = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_B.selectAll(".arc")
            .data(pie_B(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_B.selectAll(".legend")
            .data(pie_B(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    

    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);

    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })
});

// Genre C: Fighting
d3.csv(filenames[2]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_C = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_C.selectAll(".arc")
            .data(pie_C(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_C.selectAll(".legend")
            .data(pie_C(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre D: Miscellaneous
d3.csv(filenames[3]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_D = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_D.selectAll(".arc")
            .data(pie_D(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_D.selectAll(".legend")
            .data(pie_D(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre E: Platform
d3.csv(filenames[4]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_E = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_E.selectAll(".arc")
            .data(pie_E(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_E.selectAll(".legend")
            .data(pie_E(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre F: Puzzle
d3.csv(filenames[5]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_F = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_F.selectAll(".arc")
            .data(pie_F(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_F.selectAll(".legend")
            .data(pie_F(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre G: Racing
d3.csv(filenames[6]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_G = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_G.selectAll(".arc")
            .data(pie_G(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_G.selectAll(".legend")
            .data(pie_G(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre H: Role-Playing
d3.csv(filenames[7]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_H = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_H.selectAll(".arc")
            .data(pie_H(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_H.selectAll(".legend")
            .data(pie_H(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre I: Shooter
d3.csv(filenames[8]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_I = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_I.selectAll(".arc")
            .data(pie_I(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_I.selectAll(".legend")
            .data(pie_I(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre: Simulation
d3.csv(filenames[9]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_J = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_J.selectAll(".arc")
            .data(pie_J(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_J.selectAll(".legend")
            .data(pie_J(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre: Sports
d3.csv(filenames[10]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_K = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_K.selectAll(".arc")
            .data(pie_K(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_K.selectAll(".legend")
            .data(pie_K(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

});

// Genre: Strategy
d3.csv(filenames[11]).then(function(data) {

    data = cleanData(data, function(a, b) { return parseFloat(b["Global_Sales"]) - parseFloat(a["Global_Sales"]) }, NUM_EXAMPLES);
    
    var pie_L = d3.pie().value(function(d) { return parseFloat(d["Global_Sales"]); });

    var arc = g_L.selectAll(".arc")
            .data(pie_L(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeTableau10)

    // Mouseover function to display the tooltip on hover
    let mouseover = function(d) {
        let html = `${d.data.Publisher}<br/>
                Global Sales: ${parseFloat(d.data.Global_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Publisher)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout = function(d) {
        // Set opacity back to 0 to hide
        tooltip.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_L.selectAll(".legend")
            .data(pie_L(data))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var legend_height = legend_rect_size + legend_spacing;
                var offset =  legend_height * color.domain().length / 2;
                var horizontal = legend_rect_size * 10;
                var vertical = i * legend_height - offset * 10;
                return 'translate(' + horizontal + ',' + vertical + ')';
            });

    legend.append("rect")
    .attr("width", legend_rect_size)
    .attr("height", legend_rect_size)                                   
    .attr("fill", function(d) { return color(d.data.Publisher); })
    
    legend.append("text") // add the text
    .text(function(d){ return d.data.Publisher; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.Publisher); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")" })
        .text(function(d) { return d["Publisher"]; })

}); 

let title_A = svg_pie_A.append("text")
    .text("Top Publishers of Action Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_A.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_B = svg_pie_B.append("text")
    .text("Top Publishers of Adventure Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_B.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_C = svg_pie_C.append("text")
    .text("Top Publishers of Fighting Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_C.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_D = svg_pie_D.append("text")
    .text("Top Publishers of Miscellaneous Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_D.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_E = svg_pie_E.append("text")
    .text("Top Publishers of Platform Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_E.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_F = svg_pie_F.append("text")
    .text("Top Publishers of Puzzle Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_F.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_G = svg_pie_G.append("text")
    .text("Top Publishers of Racing Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_G.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_H = svg_pie_H.append("text")
    .text("Top Publishers of Role-Playing Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_H.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_I = svg_pie_I.append("text")
    .text("Top Publishers of Shooter Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_I.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_J = svg_pie_J.append("text")
    .text("Top Publishers of Simulation Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_J.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_K = svg_pie_K.append("text")
    .text("Top Publishers of Sports Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_K.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

let title_L = svg_pie_L.append("text")
    .text("Top Publishers of Strategy Games")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 9) + "," + (graph_3_height / 20 - 220) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');
comment = svg_pie_L.append("text")
    .text("Please hover over each part to view its global sales.")
    .attr("transform", "translate(" + (graph_3_width / 4 - legend_rect_size * 15) + "," + (graph_3_height / 20 + 200) + ")")
    .style("font-size", 12)
    .style("font-family", 'Lato');

function cleanData(data, comparator, numExamples) {
    // Sort and return the given data with the comparator (extracting the desired number of examples)
    sorted_data = data.sort(comparator);
    return sorted_data.slice(0, numExamples);
}