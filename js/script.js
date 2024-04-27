var options = {
    series: [
    {
      data: [8, 29, 23, 56, 32, 72, 33]
    },
    {
      data: [22, 11, 34, 28, 47, 13, 23]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#0000FF', '#FF0000'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Invoices',
    align: 'left'
  },
  grid: {
    borderColor: '#a9a9a9',
    row: {
      colors: ['#fff', 'transparent'],
      opacity: 0.5
    },
  },

  xaxis: {
    categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  },
  yaxis: {
    min: 10,
    max: 100
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// second chart

  var options = {
    series: [{
    data: [44, 55, 41, 67, 22, 43]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: false,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: 'end', // 'around', 'end'
      borderRadiusWhenStacked: 'last', // 'all', 'last'
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  },
  
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#charts"), options);
  chart.render();
