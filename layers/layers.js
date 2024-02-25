var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_sumber_fix_1 = new ol.format.GeoJSON();
var features_sumber_fix_1 = format_sumber_fix_1.readFeatures(json_sumber_fix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumber_fix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumber_fix_1.addFeatures(features_sumber_fix_1);
var lyr_sumber_fix_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sumber_fix_1, 
                style: style_sumber_fix_1,
                interactive: true,
    title: 'sumber_fix<br />\
    <img src="styles/legend/sumber_fix_1_0.png" /> 1/1<br />\
    <img src="styles/legend/sumber_fix_1_1.png" /> 2/1<br />\
    <img src="styles/legend/sumber_fix_1_2.png" /> 3/1<br />\
    <img src="styles/legend/sumber_fix_1_3.png" /> 4/1<br />\
    <img src="styles/legend/sumber_fix_1_4.png" /> 5/1<br />\
    <img src="styles/legend/sumber_fix_1_5.png" /> 5/2<br />\
    <img src="styles/legend/sumber_fix_1_6.png" /> 6/1<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_sumber_fix_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_sumber_fix_1];
lyr_sumber_fix_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nama': 'Nama', 'RT/RW': 'RT/RW', 'Pekerjaan': 'Pekerjaan', 'Sanitasi': 'Sanitasi', 'KIS': 'KIS', 'BPJS': 'BPJS', 'B_Tunai': 'B_Tunai', 'B_Non Tuna': 'B_Non Tuna', 'K_Ekonomi': 'K_Ekonomi', 'Gambar': 'Gambar', });
lyr_sumber_fix_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nama': 'TextEdit', 'RT/RW': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Sanitasi': 'TextEdit', 'KIS': 'TextEdit', 'BPJS': 'TextEdit', 'B_Tunai': 'TextEdit', 'B_Non Tuna': 'TextEdit', 'K_Ekonomi': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_sumber_fix_1.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'RT/RW': 'inline label - visible with data', 'Pekerjaan': 'inline label - visible with data', 'Sanitasi': 'inline label - visible with data', 'KIS': 'inline label - visible with data', 'BPJS': 'inline label - visible with data', 'B_Tunai': 'inline label - visible with data', 'B_Non Tuna': 'inline label - visible with data', 'K_Ekonomi': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_sumber_fix_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});