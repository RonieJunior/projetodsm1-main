    const materias = [
      "Algoritmos e Lógica",
      "Modelagem de Banco de Dados",
      "Engenharia de Software I",
      "Sistemas Operacionais e Redes",
      "Desenvolvimento Web I",
      "Design Digital"
    ];

    const notas = [7, 9.5, 7, 10, 9, 8];

    const cores = [
      '#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
    ];

    new Chart(document.getElementById('graficoBarras'), {
      type: 'bar',
      data: {
        labels: materias,
        datasets: [{
          label: 'Notas',
          data: notas,
          backgroundColor: cores
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById('graficoLinhas'), {
      type: 'line',
      data: {
        labels: materias,
        datasets: [{
          label: 'Notas',
          data: notas,
          fill: false,
          borderColor: '#36A2EB',
          tension: 0.2
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById('graficoPizza'), {
      type: 'pie',
      data: {
        labels: materias,
        datasets: [{
          label: 'Notas',
          data: notas,
          backgroundColor: cores
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById('graficoRosca'), {
      type: 'doughnut',
      data: {
        labels: materias,
        datasets: [{
          data: notas,
          backgroundColor: cores
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById('graficoRadar'), {
      type: 'radar',
      data: {
        labels: materias,
        datasets: [{
          label: 'Notas',
          data: notas,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: '#36A2EB',
          pointBackgroundColor: '#36A2EB'
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById('graficoPolar'), {
      type: 'polarArea',
      data: {
        labels: materias,
        datasets: [{
          data: notas,
          backgroundColor: cores
        }]
      },
      options: { responsive: true }
    });