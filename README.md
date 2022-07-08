# Corona-Case-Plotter-
Took a Json file with latest corona cases and plotted them on world scale and also used colour clustering to show details
Updated the json file with the recent data as on 2nd July, 2022.
Map updates itself after every 10 sec so temporary changes can be made in data file itself.
Popup shows the whole stats of total cases, present cases, recovered, deaths etc. of that country.
Color Legend mentioned in the JavaScript file at the end. Mentioned here as well for reference :
Colour legend :
// Cases > 100000 : rgb(102, 0, 0)  Maroon
// 10000 < cases < 100000 : rgb(230, 0, 0) Red
// 5000 < cases < 10000 : rgb(255, 102, 102)  Light Pink
// 1000 < cases < 5000 : rgb(255,255,102)  Light yellow
// 100 < cases < 1000 : rgb(170,255,153)  Light Green
// cases < 100 : rgb(21,128,0)    Green 
