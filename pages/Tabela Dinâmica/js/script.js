// script.js

// Função para preencher a tabela com os dados do JSON
function preencherTabela(vinhos) {
  const corpoTabela = document.querySelector('#tabela-vinhos tbody');
  corpoTabela.innerHTML = '';

  vinhos.forEach(vinho => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${vinho.id}</td>
      <td>${vinho.tipo}</td>
      <td>${vinho.uva}</td>
    `;
    corpoTabela.appendChild(linha);
  });
}

// Carregar dados do JSON
fetch('vinhos.json')
  .then(response => {
    if (!response.ok) throw new Error('Erro ao carregar vinhos.json');
    return response.json();
  })
  .then(data => {
    preencherTabela(data);

    // Filtro dinâmico
    const inputFiltro = document.getElementById('filtro');
    inputFiltro.addEventListener('input', () => {
      const termo = inputFiltro.value.toLowerCase();
      const filtrados = data.filter(vinho =>
        vinho.tipo.toLowerCase().includes(termo) ||
        vinho.uva.toLowerCase().includes(termo)
      );
      preencherTabela(filtrados);
    });
  })
  .catch(error => {
    console.error(error);
    document.querySelector('#tabela-vinhos tbody').innerHTML =
      '<tr><td colspan="3">Erro ao carregar os dados.</td></tr>';
  });
