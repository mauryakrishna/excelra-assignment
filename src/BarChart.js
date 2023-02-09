import * as d3 from 'd3'
import { useEffect } from 'react';

export const BarChart = ({ data, width, height }) => {

    useEffect(() => {
        console.log("UseEffect")
        const svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");


    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - (10 * d) - 3)

    return () => svg.remove()
    }, [width, height, data])
    

    console.log("id")
    
    return <div id="bar-chart"></div>
}