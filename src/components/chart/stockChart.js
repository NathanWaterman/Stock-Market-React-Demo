import React, { Component } from 'react';
import XYAxis from './axis/xy-axis';
import Line from './line/line';
import { line } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import * as d3 from 'd3';
import StockList from './StockList';
import './chart.css';

class StockChart extends Component {

    render() {

        const { data, title } = this.props;

        const margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        };


        const margin = { top: 30, right: 120, bottom: 30, left: 50 },
            width = 750,
            height = 500

        const ticks = 5;
        const t = transition().duration(1000);




        // Set the ranges
        const xScale = d3.scaleTime().domain(extent(data, d => new Date(d.date.replace(/-/g, '\/')))).range([0, width]).nice();
        const yScale = d3.scaleLinear().domain(extent(data, d => d.close)).range([height, 0]).nice();

        const lineGenerator = line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.close))

        return (
            <div className="ui stackable one column grid">
                <div className="row">
                    <div className="column">
                        <div className="row">
                            <div id="chartContainer" className="column">
                                <h2>Chart Info for {title} (1 Month)</h2>
                                <svg
                                    id="lineChart"
                                    className="lineChartSvg"
                                    viewBox="0 0 790 500"
                                    preserveAspectRatio="xMinYMin meet"
                                    width={width}
                                    height={height + margin.top + margin.bottom}
                                >
                                    <g transform={`translate(40, ${margins.top})`}>
                                        <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                                        <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                                    </g>
                                </svg>
                            </div>
                            <div className="column">
                                <StockList chartListData={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        // return (
        //     <div>
        //         <div className="sixteen wide column">
        //             <div className="ui grid">
        //                 <div className="eight wide column">
        //                     <svg
        //                         className="lineChartSvg"
        //                         width={width}
        //                         height={height + margin.top + margin.bottom}
        //                     >
        //                         <g transform={`translate(40, ${margins.top})`}>
        //                             <XYAxis {...{ xScale, yScale, height, ticks, t }} />
        //                             <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
        //                         </g>
        //                     </svg>
        //                 </div>
        //                 <div className="eight wide column">
        //                     <StockList chartListData={data} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

export default StockChart;