const ctx = document.querySelector('#chart').getContext('2d');

new Chart(ctx, {
    type: 'line',
data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'New Hires',
        data: [5, 8, 6, 10, 12, 7, 9, 11, 6, 5, 4, 7],
        borderColor: '#064e4a',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Terminations',
        data: [2, 3, 1, 4, 2, 5, 3, 2, 4, 3, 2, 1],
        borderColor: '#fad470',
        borderWidth: 2,
        fill: false
      }

        ]

    },
    options: {
    responsive: true
}
})