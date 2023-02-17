let mid = document.querySelector('.mid')
let chart =  document.querySelector('.chart')

// window.onload = e => {
//     console.log('oui')
//     chart.style.width = mid.offsetWidth + 'px'
// }

let graph = document.querySelector('#chart').getContext('2d')

new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov','6Nov','7Nov','8Nov','9Nov','10Nov','11Nov','12Nov','13Nov','14Nov','15Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [100, 120, 140, 130, 310, 400, 280, 210, 150, 130, 100, 110],
                borderColor: 'rgba(25, 25, 25, 1)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        layout: {
            padding: 30
        },
    }
})