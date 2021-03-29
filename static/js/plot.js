
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }



d3.json("http://127.0.0.1:5000/data").then((importedData) => {
    console.log(importedData);
    var data1 = importedData
  


    var title = data1.title;
    var rotten_tomatoes = data1.rotten_tomatoes;

    console.log(title)
    console.log(rotten_tomatoes)
//////////////////////////////////////////////////////////////////////////////
    // data.sort(function(a, b) {
    //   return parseFloat(b.No) - parseFloat(a.No);
    // });
  
    // Reverse the array due to Plotly's defaults
    // data = data.reverse();
  
    // Trace1 for the Greek Data
    var trace1 = {
      y: rotten_tomatoes.map,
      x: title.map,
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
    
    //   , trace2, trace3];
  

///////////////////////////////////////////////////////////////////////////////////////
    // Apply the group bar mode to the layout
     var layout = {
      title: "Emmy's Won by Rating",
      // autosize: false,
      // width: 1000,
      // height: 1000,
      // margin: {
      //   l: 150,
      //   r: 50,
      //   b: 50,
      //   t: 50,
      //   pad: 4
      //}
     };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });