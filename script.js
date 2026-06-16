// Banco de dados simulado dos carros à venda
const carros = [
    {
        id: 1,
        nome: "Porsche 911 Carrera",
        preco: "R$ 820.000",
        ano: "2022/2022",
        km: "12.000 km",
        cambio: "Automático PDK",
        combustivel: "Gasolina",
        imagem: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nome: "BMW M4 Competition",
        preco: "R$ 650.000",
        ano: "2023/2023",
        km: "5.500 km",
        cambio: "Automático",
        combustivel: "Gasolina",
        imagem: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nome: "Audi RS6 Avant",
        preco: "R$ 790.000",
        ano: "2021/2022",
        km: "18.500 km",
        cambio: "Automático Tiptronic",
        combustivel: "Gasolina",
        imagem: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        nome: "Mustang Mach 1",
        preco: "R$ 490.000",
        ano: "2022/2022",
        km: "8.000 km",
        cambio: "Automático",
        combustivel: "Gasolina",
        imagem: "https://images.unsplash.com/photo-1584345604482-14023737e937?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        nome: "Mercedes-Benz C63 AMG",
        preco: "R$ 520.000",
        ano: "2021/2021",
        km: "22.000 km",
        cambio: "Automático",
        combustivel: "Gasolina",
        imagem: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
    }
];

// Carregar os carros dinamicamente no HTML
const gridCarros = document.getElementById('grid-carros');

function renderizarCarros() {
    carros.forEach(carro => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between";
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome}" class="w-full h-48 object-cover">
            <div class="p-5 flex-grow">
                <h3 class="text-xl font-bold mb-2">${carro.nome}</h3>
                <p class="text-gray-500 text-sm mb-4"><i class="fa-solid fa-calendar-days mr-1"></i> Ano: ${carro.ano} | <i class="fa-solid fa-gauge-high mr-1"></i> ${carro.km}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-2xl font-extrabold text-red-600">${carro.preco}</span>
                </div>
            </div>
            <div class="px-5 pb-5">
                <button onclick="abrirModal(${carro.id})" class="w-full bg-gray-900 hover:bg-gray-800 text-white text-center font-semibold py-2 px-4 rounded transition">
                    Ver Detalhes
                </button>
            </div>
        `;
        gridCarros.appendChild(card);
    });
}

// Controle do Modal
let carroSelecionado = null;

function abrirModal(id) {
    carroSelecionado = carros.find(c => c.id === id);
    if (!carroSelecionado) return;

    document.getElementById('modal-img').src = carroSelecionado.imagem;
    document.getElementById('modal-nome').innerText = carroSelecionado.nome;
    document.getElementById('modal-preco').innerText = carroSelecionado.preco;
    document.getElementById('modal-ano').innerText = carroSelecionado.ano;
    document.getElementById('modal-km').innerText = carroSelecionado.km;
    document.getElementById('modal-cambio').innerText = carroSelecionado.cambio;
    document.getElementById('modal-combustivel').innerText = carroSelecionado.combustivel;

    document.getElementById('modal').classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        fecharModal();
    }
}

// Redirecionamento para o WhatsApp
function interesseWpp() {
    if (!carroSelecionado) return;
    const telefone = "5511999999999"; // COLOQUE SEU TELEFONE AQUI (com DDD)
    const texto = `Olá! Vi no site o veículo *${carroSelecionado.nome}* no valor de ${carroSelecionado.preco} e gostaria de receber mais informações.`;
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

// Envio de formulário de contato falso (alerta simples)
function enviarFormulario(event) {
    event.preventDefault();
    alert("Obrigado pelo contato! Nossa equipe responderá em breve.");
    event.target.reset();
}

// Iniciar a renderização quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarCarros);