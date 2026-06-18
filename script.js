// Simulação de banco de dados de veículos populares e usados
const veiculos = [
    {
        id: 1,
        modelo: "Chevrolet Onix 1.0 LT",
        tipo: "carro",
        ano: "2019 / 2019",
        km: "45.000 km",
        preco: "R$ 54.900",
        imagem: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        modelo: "Honda Biz 125 Flex",
        tipo: "moto",
        ano: "2021 / 2021",
        km: "12.000 km",
        preco: "R$ 14.200",
        imagem: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        modelo: "Volkswagen Gol 1.6 MSI",
        tipo: "carro",
        ano: "2020 / 2021",
        km: "58.000 km",
        preco: "R$ 49.900",
        imagem: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        modelo: "Honda CG 160 Titan",
        tipo: "moto",
        ano: "2022 / 2022",
        km: "8.500 km",
        preco: "R$ 16.800",
        imagem: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        modelo: "Fiat Uno 1.0 Way",
        tipo: "carro",
        ano: "2016 / 2017",
        km: "82.000 km",
        preco: "R$ 36.500",
        imagem: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        modelo: "Yamaha Fazer 250 ABS",
        tipo: "moto",
        ano: "2020 / 2020",
        km: "22.000 km",
        preco: "R$ 19.400",
        imagem: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
    }
];

const vehiclesGrid = document.getElementById('vehiclesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para exibir os veículos na tela
function renderVeiculos(lista) {
    vehiclesGrid.innerHTML = "";
    
    if(lista.length === 0) {
        vehiclesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum veículo encontrado.</p>`;
        return;
    }

    lista.forEach(veiculo => {
        // Mensagem padrão para o botão de WhatsApp
        const textoWhatsapp = encodeURIComponent(`Olá! Vi o anúncio do ${veiculo.modelo} (${veiculo.ano}) por ${veiculo.preco} no site e gostaria de mais informações.`);
        const linkWhatsapp = `https://wa.me/5500999999999?text=${textoWhatsapp}`; // Substitua o número fictício aqui

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${veiculo.imagem}" alt="${veiculo.modelo}" class="card-img">
            <div class="card-body">
                <h4 class="card-title">${veiculo.modelo}</h4>
                <p class="card-info">${veiculo.ano} • ${veiculo.km}</p>
                <div class="card-price">${veiculo.preco}</div>
                <a href="${linkWhatsapp}" target="_blank" class="btn-card">
                    <i class="fa-brands fa-whatsapp"></i> Tenho Interesse
                </a>
            </div>
        `;
        vehiclesGrid.appendChild(card);
    });
}

// Filtro de Busca por Digitação
function filtrarVeiculos() {
    const termoBusca = searchInput.value.toLowerCase();
    const botaoAtivo = document.querySelector('.filter-btn.active').dataset.filter;

    const veiculosFiltrados = veiculos.filter(veiculo => {
        const matchesBusca = veiculo.modelo.toLowerCase().includes(termoBusca);
        const matchesCategoria = botaoAtivo === 'todos' || veiculo.tipo === botaoAtivo;
        return matchesBusca && matchesCategoria;
    });

    renderVeiculos(veiculosFiltrados);
}

// Evento de clique nos botões de categoria (Todos, Carros, Motos)
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        filtrarVeiculos();
    });
});

// Evento de digitação na busca
searchInput.addEventListener('input', filtrarVeiculos);

// Inicializar a página carregando todos os veículos
window.addEventListener('DOMContentLoaded', () => {
    renderVeiculos(veiculos);
});