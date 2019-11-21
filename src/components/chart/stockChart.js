import React, { Component } from 'react';
import XYAxis from './axis/xy-axis';
import Line from './line/line';
import { line } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import * as d3 from 'd3';
import StockList from './stockList';

class StockChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        console.log(this.props)

        const { data } = this.props;

        const parentWidth = 500;

        const margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        };


        const margin = { top: 30, right: 120, bottom: 30, left: 50 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom

        const ticks = 5;
        const t = transition().duration(1000);


        // Set the ranges
        const xScale = d3.scaleTime().domain(extent(data, d => new Date(d.date))).range([0, width]).nice();
        const yScale = d3.scaleLinear().domain(extent(data, d => d.close)).range([height, 0]).nice();

        const lineGenerator = line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.close))


        return (
            <div>
                <div className="sixteen wide column">
                    <div className="ui grid">
                        <div className="eight wide column">
                            <svg
                                className="lineChartSvg"
                                width={width + margin.left + margin.right}
                                height={height + margin.top + margin.bottom}
                            >
                                <g transform={`translate(${margins.left + 30}, ${margins.top})`}>
                                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                                    <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                                </g>
                            </svg>
                        </div>
                        <div className="eight wide column">
                            <StockList chartListData={data}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StockChart;