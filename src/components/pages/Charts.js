import React, { Fragment, useRef, useLayoutEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

export const Charts = (props) => {

    //Create Chart
    let chart = am4core.create('chartDiv', am4charts.XYChart);

    //Data
    chart.data = [{
        "country": "Lithuania",
        "litres": 501.9,
        "units": 250
    }, {
        "country": "Czech Republic",
        "litres": 301.9,
        "units": 222
    }, {
        "country": "Ireland",
        "litres": 201.1,
        "units": 170
    }, {
        "country": "Germany",
        "litres": 165.8,
        "units": 122
    }, {
        "country": "Australia",
        "litres": 139.9,
        "units": 99
    }, {
        "country": "Austria",
        "litres": 128.3,
        "units": 85
    }, {
        "country": "UK",
        "litres": 99,
        "units": 93
    }, {
        "country": "Belgium",
        "litres": 60,
        "units": 50
    }, {
        "country": "The Netherlands",
        "litres": 50,
        "units": 42
    }];


    // Creating Axis X & Y
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Local country office";
    categoryAxis.title.fontSize = 'bold';
    //   categoryAxis.renderer.grid.template.location = 0;
    //   categoryAxis.renderer.minGridDistance = 20;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres (M)";
    valueAxis.title.fontSize = 'bold';


    //Creating Series
    //Now we have series bound to data
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'country';
    series.dataFields.valueY = 'litres';
    //series.dataFields.valueYShow = 'totalPercent';
    series.name = 'Sales';
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color('#dbdbdb');
    //series.tooltipText = "{name}: [bold]{valueY}[/]";
    //series.stacked = true;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.categoryX = 'country';
    series2.dataFields.valueY = 'units';
    series2.name = 'Units';
    series2.stroke = am4core.color('#CDA2AB');
    series2.strokeWidth = 3;

    //Add Cursor
    chart.cursor = new am4charts.XYCursor();

    //Add Chart legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.scrollable = true;

    //Add a simple scrollbar X with preview
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    return (
        <div className='chartDiv' style={{ width: "100%", height: "500px" }}></div>
    )
}
