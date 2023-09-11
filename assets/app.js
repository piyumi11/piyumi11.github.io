/*
js function customized for this application
*/

    // Script to open and close sidebar
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }

    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    }

    // Modal Image Gallery
    function openImg(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }
/*
js function customized for this application
*/

$(document).ready(function() {

    // updates the sarees : start of d script

    let table = document.getElementById("sarees");
    let url = "assets/img/sarees/data.csv";

    fetch(url)
      .then(response => response.text())
      .then(data => {
        let rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {

            let cells = rows[i].split(",");

            if(cells[0]!=="") {

            var colDiv = document.createElement('div');
            colDiv.className = 'col-md-3 six-display-container';

            var img = document.createElement("img");
            img.src = "assets/img/sarees/"+(i+1)+".jpg";
            img.style = "width:100%;height:20em;object-fit: cover;";
            img.setAttribute('onClick','openImg(this)');
            img.alt = cells[0];

            var imgText = document.createElement('div');
            imgText.className = 'six-display-bottomright';
            imgText.innerHTML = cells[0];

            colDiv.appendChild(img);
            colDiv.appendChild(imgText);
            table.appendChild(colDiv);
            }
        }
      })
      .catch(error => console.log(error));
    // updates the sarees : end of d script

    });


$(document).ready(function(){

  //google charts
    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'analog stream 25% DC');
    data.addColumn('number', 'average value');

    data.addRows([
      [0,  8, 2],
      [1,  8, 2],
      [1,  0, 2],
      [4,  0, 2],
      [4,  8, 2],
      [5,  8, 2],
      [5,  0, 2],
      [8,  0, 2],
      [8,  8, 2],
      [9,  8, 2],
      [9,  0, 2],
      [12, 0, 2],
      [12, 8, 2],
      [13, 8, 2],
      [13, 0, 2],
      [16, 0, 2],
      [16, 8, 2]
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('duty_cycle_chart01'));

    chart.draw(data, google.charts.Line.convertOptions(options));

    //duty_cycle_chart02
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'analog stream 50% DC');
    data.addColumn('number', 'average value');

    data.addRows([
    	[0,  8, 4],
        [2,  8, 4],
        [2,  0, 4],
        [4,  0, 4],
        [4,  8, 4],
        [6,  8, 4],
        [6,  0, 4],
        [8,  0, 4],
        [8,  8, 4],
        [10, 8, 4],
        [10, 0, 4],
        [12, 0, 4],
        [12, 8, 4],
        [14, 8, 4],
        [14, 0, 4],
        [16, 0, 4],
        [16, 8, 4]
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('duty_cycle_chart02'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  //duty_cycle_chart03
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'analog stream 75% DC');
    data.addColumn('number', 'average value');

    data.addRows([
      [0,  8, 6],
      [3,  8, 6],
      [3,  0, 6],
      [4,  0, 6],
      [4,  8, 6],
      [7,  8, 6],
      [7,  0, 6],
      [8,  0, 6],
      [8,  8, 6],
      [11, 8, 6],
      [11, 0, 6],
      [12, 0, 6],
      [12, 8, 6],
      [15, 8, 6],
      [15, 0, 6],
      [16, 0, 6]
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('duty_cycle_chart03'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  //duty_cycle_chart04
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'analog stream 100% DC');
    data.addColumn('number', 'average value');

    data.addRows([
      [0,  8, 8],
      [16, 8, 8],
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('duty_cycle_chart04'));

    chart.draw(data, google.charts.Line.convertOptions(options));

  //chart05
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'TCNT0');
    data.addColumn('number', 'OCR0');

    data.addRows([
      [0, 0, 4],
      [4, 8, 4],
      [4, 0, 4],
      [8, 8, 4],
      [8, 0, 4],
      [12, 8, 4],
      [12, 0, 4],
      [16, 8, 4],
      [16, 0, 4],
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('chart05'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  //chart06
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'time');
    data.addColumn('number', 'OC0A');

    data.addRows([
      [0, 4],
      [2, 4],
      [2, 0],
      [4, 0],
      [4, 4],
      [6, 4],
      [6, 0],
      [8, 0],
      [8, 4],
      [10, 4],
      [10, 0],
      [12, 0],
      [12, 4],
      [14, 4],
      [14, 0],
      [16, 0],
      [16, 4],
    ]);

    var options = {
      chart: {
      },
      width: 700,
      height: 100
    };

    var chart = new google.charts.Line(document.getElementById('chart06'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }
	});
