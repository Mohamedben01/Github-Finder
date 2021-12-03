import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";

// Importing themes
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

// Importing translations
import am4lang_lt_LT from "@amcharts/amcharts4/lang/lt_LT";

// Importing geodata (map data)
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldMoroccoHigh";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

export const Maps = () => {

    let map = am4core.create('chartDiv', am4maps.MapChart);

    //Set map definition
    map.geodata = am4geodata_worldLow;

    //Set projection
    map.projection = new am4maps.projections.Miller();


    // Create map polygon series
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

    //Add Some Data
    polygonSeries.data = [{
        "id": "MA",
        "name": "Morocco",
        "value": 50,
        "fill": am4core.color("#F05C5C")
    }];
    polygonTemplate.propertyFields.fill = "fill";

    return (
        <div className='chartDiv' style={{ width: '100%', height: '500px' }}></div>
    )
}
