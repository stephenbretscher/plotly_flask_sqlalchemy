
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }



d3.json("http://127.0.0.1:5000/data").then((importedData) => {
    console.log(importedData);
    var data = importedData
  


    var title = data[0].imdb;
    var rotten_tomatoes = data[0].rotten_tomatoes;

    console.log(title)
    console.log(rotten_tomatoes)
    console.log(typeof title)
//////////////////////////////////////////////////////////////////////////////
    // data.sort(function(a, b) {
    //   return parseFloat(b.No) - parseFloat(a.No);
    // });
  
    // Reverse the array due to Plotly's defaults
    // data = data.reverse();
  
    // Trace1 for the Greek Data
    var trace1 = {
      y: rotten_tomatoes,
      x: title,
      text: title,
      name: "Emmys",
      type: "bar",
      orientation: "h"
    };

    console.log("checkpoint1")
    // var trace1 = {
    //     x: data.map(row => row.rotten_tomatoes).slice(0,10),
    //     y: data.map(row => row.title).slice(0,10),
    //     text: data.map(row => row.rotten_tomatoes),
    //     name: "Rotten Tomato Score",
    //     type: "bar",
    //     orientation: "h"
    //   };

    //   var trace3 = {
    //     x: data.map(row => row.imdb).slice(0,10),
    //     y: data.map(row => row.title).slice(0,10),
    //     text: data.map(row => row.imdb),
    //     name: "IMDb Score",
    //     type: "bar",
    //     orientation: "h"
    //   };
  
    // data
    var chartData = [trace1]
    
     var layout = {
      title: "Emmy's Won by Rating",
     };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });