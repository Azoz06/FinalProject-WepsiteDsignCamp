var config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Half Doughnut Chart Example'
            },
            legend: {
                display: false
            }
        },
        cutoutPercentage: 50, // This determines the percentage of the chart that is cut out
        elements: {
            arc: {
                borderWidth: 0, // Remove the border around the arc
                // Customize the size of the arc
                circumference: Math.PI, // Set to Math.PI for half circle
                // Rotate the arc to start from the top
                rotation: -0.5 * Math.PI // Set to -0.5 * Math.PI for top start
            }
        }
    },
};




  