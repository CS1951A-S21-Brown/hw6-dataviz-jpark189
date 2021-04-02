let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
legend_rect_size = 20;
legend_spacing = 4;
legend_height = graph_2_height;

radius = Math.min(graph_2_width, graph_2_height) / 2;

var svg_pie_1 = d3.select("#graph2")
    .append("svg")
    .attr("width", graph_2_width * 1.5)     
    .attr("height", graph_2_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_2_width / 2 + "," + graph_2_height / 1.2 + ")");

var svg_pie_2 = d3.select("#graph2")
    .append("svg")
    .attr("width", graph_2_width * 1.5)     
    .attr("height", graph_2_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_2_width / 2 + "," + graph_2_height / 1.2 + ")");

var svg_pie_3 = d3.select("#graph2")
    .append("svg")
    .attr("width", graph_2_width * 1.5)     
    .attr("height", graph_2_height * 1.5)
    .append("g")
    .attr("transform", "translate(" + graph_2_width / 2 + "," + graph_2_height / 1.2 + ")");

// Set up reference to tooltip
let tooltip_q2 = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var g_1 = svg_pie_1.append("g")
var g_2 = svg_pie_2.append("g")
var g_3 = svg_pie_3.append("g")

var path_q2 = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

var label = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - 80);

// Country/Region: North America
d3.csv("./data/video_games_q2_modified.csv").then(function(data) {

    var pie_1 = d3.pie().value(function(d) { return parseFloat(d["NA_Sales"]); });

    var arc = g_1.selectAll(".arc")
            .data(pie_1(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");

    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeSet3)

    // Mouseover function to display the tooltip on hover
    let mouseover_q2 = function(d) {
        let html = `${d.data.Genre}<br/>
                NA Sales: ${parseFloat(d.data.NA_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip_q2.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Genre)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout_q2 = function(d) {
        // Set opacity back to 0 to hide
        tooltip_q2.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_1.selectAll(".legend")
            .data(pie_1(data))
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
    .attr("fill", function(d) { return color(d.data.Genre); })

    legend.append("text") // add the text
    .text(function(d){ return d.data.Genre; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);

    arc.append("path")
        .attr("d", path_q2)
        .attr("fill", function(d) { return color(d.data.Genre); })
        .on("mouseover", mouseover_q2)
        .on("mouseout", mouseout_q2);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .text(function(d) { return d["Genre"]; });
});

// Country/Region: Europe
d3.csv("./data/video_games_q2_modified.csv").then(function(data) {
    
    var pie_2 = d3.pie().value(function(d) { return parseFloat(d["EU_Sales"]); });

    var arc = g_2.selectAll(".arc")
            .data(pie_2(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");
    
    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeSet3)

    // Mouseover function to display the tooltip on hover
    let mouseover_q2 = function(d) {
        let html = `${d.data.Genre}<br/>
                EU Sales: ${parseFloat(d.data.EU_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip_q2.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Genre)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout_q2 = function(d) {
        // Set opacity back to 0 to hide
        tooltip_q2.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_2.selectAll(".legend")
            .data(pie_2(data))
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
    .attr("fill", function(d) { return color(d.data.Genre); })

    legend.append("text") // add the text
    .text(function(d){ return d.data.Genre; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);
    
    arc.append("path")
        .attr("d", path_q2)
        .attr("fill", function(d) { return color(d.data.Genre); })
        .on("mouseover", mouseover_q2)
        .on("mouseout", mouseout_q2);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .text(function(d) { return d["Genre"]; });
});

// Country/Region: Japan
d3.csv("./data/video_games_q2_modified.csv").then(function(data) {
    
    var pie_3 = d3.pie().value(function(d) { return parseFloat(d["JP_Sales"]); });

    var arc = g_3.selectAll(".arc")
            .data(pie_3(data))
            .enter().append("g")
            .attr("class", "arc")
            .attr("stroke", "white")
            .style("stroke-width", "2px");

    var color = d3.scaleOrdinal()
                .domain(data)
                .range(d3.schemeSet3)

    // Mouseover function to display the tooltip on hover
    let mouseover_q2 = function(d) {
        let html = `${d.data.Genre}<br/>
                JP Sales: ${parseFloat(d.data.JP_Sales)}</span>`;

        // Show the tooltip and set the position relative to the event X and Y location
        tooltip_q2.html(html)
            .style("left", `${(d3.event.pageX) + 10}px`)
            .style("top", `${(d3.event.pageY) + 10}px`)
            .style("box-shadow", `2px 2px 5px ${color(d.data.Genre)}`)
            .transition()
            .duration(200)
            .style("opacity", 0.9)
            .style("display", "block")
    };

    // Mouseout function to hide the tool on exit
    let mouseout_q2 = function(d) {
        // Set opacity back to 0 to hide
        tooltip_q2.transition()
            .duration(200)
            .style("opacity", 0);
    };

    var legend = svg_pie_3.selectAll(".legend")
            .data(pie_3(data))
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
    .attr("fill", function(d) { return color(d.data.Genre); })

    legend.append("text") // add the text
    .text(function(d){ return d.data.Genre; })
    .style("font-size", 12)
    .style("font-family", 'Lato')
    .attr("y", legend_rect_size - legend_spacing * 2)
    .attr("x", legend_rect_size + legend_spacing);

    arc.append("path")
        .attr("d", path_q2)
        .attr("fill", function(d) { return color(d.data.Genre); })
        .on("mouseover", mouseover_q2)
        .on("mouseout", mouseout_q2);

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .text(function(d) { return d["Genre"]; });

});

let title_1 = svg_pie_1.append("text")
    .text("Top Genres in North America")
    .attr("transform", "translate(" + (graph_2_width / 4 - legend_rect_size * 9) + "," + (graph_2_height / 20 - 180) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');

let title_2 = svg_pie_2.append("text")
    .text("Top Genres in Europe")
    .attr("transform", "translate(" + (graph_2_width / 4 - legend_rect_size * 9) + "," + (graph_2_height / 20 - 180) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');

let title_3 = svg_pie_3.append("text")
    .text("Top Genres in Japan")
    .attr("transform", "translate(" + (graph_2_width / 4 - legend_rect_size * 9) + "," + (graph_2_height / 20 - 180) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 18)
    .style("font-family", 'Lora')
    .style("font-weight", 'bold');