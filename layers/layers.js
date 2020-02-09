var wms_layers = [];

var format_Cuenca_apurimacGeo_0 = new ol.format.GeoJSON();
var features_Cuenca_apurimacGeo_0 = format_Cuenca_apurimacGeo_0.readFeatures(json_Cuenca_apurimacGeo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuenca_apurimacGeo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuenca_apurimacGeo_0.addFeatures(features_Cuenca_apurimacGeo_0);
var lyr_Cuenca_apurimacGeo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuenca_apurimacGeo_0, 
                style: style_Cuenca_apurimacGeo_0,
                interactive: true,
                title: '<img src="styles/legend/Cuenca_apurimacGeo_0.png" /> Cuenca_apurimacGeo'
            });
var format_Rios_Apurimac_1 = new ol.format.GeoJSON();
var features_Rios_Apurimac_1 = format_Rios_Apurimac_1.readFeatures(json_Rios_Apurimac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_Apurimac_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Apurimac_1.addFeatures(features_Rios_Apurimac_1);
var lyr_Rios_Apurimac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_Apurimac_1, 
                style: style_Rios_Apurimac_1,
                interactive: true,
    title: 'Rios_Apurimac<br />\
    <img src="styles/legend/Rios_Apurimac_1_0.png" /> AC<br />\
    <img src="styles/legend/Rios_Apurimac_1_1.png" /> Q<br />\
    <img src="styles/legend/Rios_Apurimac_1_2.png" /> QI<br />\
    <img src="styles/legend/Rios_Apurimac_1_3.png" /> QN<br />\
    <img src="styles/legend/Rios_Apurimac_1_4.png" /> QQ<br />\
    <img src="styles/legend/Rios_Apurimac_1_5.png" /> QS<br />\
    <img src="styles/legend/Rios_Apurimac_1_6.png" /> R<br />\
    <img src="styles/legend/Rios_Apurimac_1_7.png" /> RI<br />\
    <img src="styles/legend/Rios_Apurimac_1_8.png" /> RN<br />\
    <img src="styles/legend/Rios_Apurimac_1_9.png" /> RS<br />\
    <img src="styles/legend/Rios_Apurimac_1_10.png" /> <br />'
        });
var format_Vias_Geo_2 = new ol.format.GeoJSON();
var features_Vias_Geo_2 = format_Vias_Geo_2.readFeatures(json_Vias_Geo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_Geo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_Geo_2.addFeatures(features_Vias_Geo_2);
var lyr_Vias_Geo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_Geo_2, 
                style: style_Vias_Geo_2,
                interactive: true,
                title: '<img src="styles/legend/Vias_Geo_2.png" /> Vias_Geo'
            });
var format_Vias_Nacional_3 = new ol.format.GeoJSON();
var features_Vias_Nacional_3 = format_Vias_Nacional_3.readFeatures(json_Vias_Nacional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_Nacional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_Nacional_3.addFeatures(features_Vias_Nacional_3);
var lyr_Vias_Nacional_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_Nacional_3, 
                style: style_Vias_Nacional_3,
                interactive: true,
                title: '<img src="styles/legend/Vias_Nacional_3.png" /> Vias_Nacional'
            });
var format_Puentes_Apurimac_4 = new ol.format.GeoJSON();
var features_Puentes_Apurimac_4 = format_Puentes_Apurimac_4.readFeatures(json_Puentes_Apurimac_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puentes_Apurimac_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puentes_Apurimac_4.addFeatures(features_Puentes_Apurimac_4);
var lyr_Puentes_Apurimac_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puentes_Apurimac_4, 
                style: style_Puentes_Apurimac_4,
                interactive: true,
    title: 'Puentes_Apurimac<br />\
    <img src="styles/legend/Puentes_Apurimac_4_0.png" /> Baden<br />\
    <img src="styles/legend/Puentes_Apurimac_4_1.png" /> Puente<br />\
    <img src="styles/legend/Puentes_Apurimac_4_2.png" /> <br />'
        });

lyr_Cuenca_apurimacGeo_0.setVisible(true);lyr_Rios_Apurimac_1.setVisible(true);lyr_Vias_Geo_2.setVisible(true);lyr_Vias_Nacional_3.setVisible(true);lyr_Puentes_Apurimac_4.setVisible(true);
var layersList = [lyr_Cuenca_apurimacGeo_0,lyr_Rios_Apurimac_1,lyr_Vias_Geo_2,lyr_Vias_Nacional_3,lyr_Puentes_Apurimac_4];
lyr_Cuenca_apurimacGeo_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GCUENCAS_': 'GCUENCAS_', 'GCUENCAS_I': 'GCUENCAS_I', 'UWPERU_ID': 'UWPERU_ID', 'CODECUEN': 'CODECUEN', 'NOMCUEN': 'NOMCUEN', 'VERTIENTE': 'VERTIENTE', 'ESCALA': 'ESCALA', 'COLOR': 'COLOR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'area_ha': 'area_ha', 'km2': 'km2', });
lyr_Rios_Apurimac_1.set('fieldAliases', {'TIPO': 'TIPO', 'Shape_Leng': 'Shape_Leng', 'ROTULO': 'ROTULO', 'BORRA': 'BORRA', });
lyr_Vias_Geo_2.set('fieldAliases', {'Id': 'Id', 'RUTA': 'RUTA', 'LONG_KM': 'LONG_KM', 'SUP_VIA': 'SUP_VIA', 'Estado': 'Estado', 'Shape_Leng': 'Shape_Leng', });
lyr_Vias_Nacional_3.set('fieldAliases', {'Id': 'Id', 'RUTA': 'RUTA', 'SUPERFICIE': 'SUPERFICIE', 'LONG_KM': 'LONG_KM', 'Shape_Leng': 'Shape_Leng', });
lyr_Puentes_Apurimac_4.set('fieldAliases', {'cod_carre': 'cod_carre', 'Evento': 'Evento', 'Descripcio': 'Descripcio', 'Km': 'Km', 'latitud': 'latitud', 'longitud': 'longitud', 'norte': 'norte', 'este': 'este', 'altitud': 'altitud', });
lyr_Cuenca_apurimacGeo_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GCUENCAS_': 'TextEdit', 'GCUENCAS_I': 'TextEdit', 'UWPERU_ID': 'TextEdit', 'CODECUEN': 'TextEdit', 'NOMCUEN': 'TextEdit', 'VERTIENTE': 'TextEdit', 'ESCALA': 'TextEdit', 'COLOR': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'area_ha': 'TextEdit', 'km2': 'TextEdit', });
lyr_Rios_Apurimac_1.set('fieldImages', {'TIPO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ROTULO': 'TextEdit', 'BORRA': 'TextEdit', });
lyr_Vias_Geo_2.set('fieldImages', {'Id': 'TextEdit', 'RUTA': 'TextEdit', 'LONG_KM': 'TextEdit', 'SUP_VIA': 'TextEdit', 'Estado': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Vias_Nacional_3.set('fieldImages', {'Id': 'TextEdit', 'RUTA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'LONG_KM': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Puentes_Apurimac_4.set('fieldImages', {'cod_carre': 'TextEdit', 'Evento': 'TextEdit', 'Descripcio': 'TextEdit', 'Km': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'norte': 'TextEdit', 'este': 'TextEdit', 'altitud': 'TextEdit', });
lyr_Cuenca_apurimacGeo_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'inline label', 'GCUENCAS_': 'no label', 'GCUENCAS_I': 'no label', 'UWPERU_ID': 'no label', 'CODECUEN': 'inline label', 'NOMCUEN': 'no label', 'VERTIENTE': 'no label', 'ESCALA': 'no label', 'COLOR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'area_ha': 'no label', 'km2': 'no label', });
lyr_Rios_Apurimac_1.set('fieldLabels', {'TIPO': 'no label', 'Shape_Leng': 'no label', 'ROTULO': 'inline label', 'BORRA': 'no label', });
lyr_Vias_Geo_2.set('fieldLabels', {'Id': 'no label', 'RUTA': 'inline label', 'LONG_KM': 'no label', 'SUP_VIA': 'no label', 'Estado': 'no label', 'Shape_Leng': 'no label', });
lyr_Vias_Nacional_3.set('fieldLabels', {'Id': 'no label', 'RUTA': 'inline label', 'SUPERFICIE': 'no label', 'LONG_KM': 'no label', 'Shape_Leng': 'no label', });
lyr_Puentes_Apurimac_4.set('fieldLabels', {'cod_carre': 'no label', 'Evento': 'no label', 'Descripcio': 'no label', 'Km': 'no label', 'latitud': 'no label', 'longitud': 'header label', 'norte': 'no label', 'este': 'no label', 'altitud': 'no label', });
lyr_Puentes_Apurimac_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});