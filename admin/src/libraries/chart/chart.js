import * as Chart from 'chart.js';

export function drawChart() {

    let data = [];
    let data2 = [];
    let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var ctx1 = document.getElementsByClassName("revenue-chart");
    var ctx2 = document.getElementsByClassName("expense-chart");

    renderChart(data, labels, ctx1, 'rgba(53, 253, 13, 1)');
    renderChart(data2, labels, ctx2, 'rgba(46, 137, 255, 1)');

}


export function renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: color,
                borderColor: color,
            }]
        },
    })
}