// Dados detalhados sobre direitos do consumidor
const detalhesRights = {
    arrependimento: {
        title: "🔄 Direito de Arrependimento",
        content: `
            <h3>O que é?</h3>
            <p>O direito de arrependimento permite que você desista da compra em até 7 dias corridos, sem precisar justificar o motivo.</p>
            
            <h3>Quando se aplica?</h3>
            <ul>
                <li>Compras pela internet</li>
                <li>Compras por telefone</li>
                <li>Compras por catálogo</li>
                <li>Compras fora do estabelecimento comercial</li>
            </ul>
            
            <h3>Como exercer?</h3>
            <p>Entre em contato com a empresa por qualquer meio (e-mail, telefone, chat) e comunique sua desistência. Guarde o protocolo!</p>
            
            <h3>Importante:</h3>
            <ul>
                <li>O prazo conta a partir do recebimento do produto</li>
                <li>A empresa deve devolver 100% do valor pago</li>
                <li>Você pode ter que pagar o frete de devolução</li>
                <li>O produto deve estar em perfeitas condições</li>
            </ul>
        `
    },
    garantia: {
        title: "🔧 Garantia Legal",
        content: `
            <h3>O que é?</h3>
            <p>É a garantia mínima que todo produto deve ter por lei, independente da garantia do fabricante.</p>
            
            <h3>Prazos:</h3>
            <ul>
                <li><strong>30 dias:</strong> Produtos e serviços não duráveis (alimentos, cosméticos, etc.)</li>
                <li><strong>90 dias:</strong> Produtos e serviços duráveis (eletrodomésticos, móveis, etc.)</li>
            </ul>
            
            <h3>Seus direitos:</h3>
            <ul>
                <li>Reparo gratuito do defeito</li>
                <li>Troca por produto novo</li>
                <li>Devolução do dinheiro com correção</li>
                <li>Abatimento proporcional do preço</li>
            </ul>
            
            <h3>Importante:</h3>
            <p>O prazo da garantia legal só começa a contar quando você descobre o defeito, não da data da compra.</p>
        `
    },
    informacao: {
        title: "📄 Direito à Informação",
        content: `
            <h3>O que é?</h3>
            <p>Você tem direito a receber informações claras, precisas e em português sobre produtos e serviços.</p>
            
            <h3>Informações obrigatórias:</h3>
            <ul>
                <li>Preço total (incluindo todos os custos)</li>
                <li>Características do produto/serviço</li>
                <li>Composição e ingredientes</li>
                <li>Prazo de validade</li>
                <li>Origem do produto</li>
                <li>Riscos à saúde e segurança</li>
                <li>Manual de instruções em português</li>
            </ul>
            
            <h3>Na internet:</h3>
            <ul>
                <li>Dados completos da empresa</li>
                <li>CNPJ e endereço físico</li>
                <li>Política de troca e devolução</li>
                <li>Prazo e forma de entrega</li>
                <li>Custos de frete</li>
            </ul>
        `
    },
    protecao: {
        title: "⚖️ Proteção contra Práticas Abusivas",
        content: `
            <h3>Práticas proibidas:</h3>
            <ul>
                <li>Venda casada (obrigar a comprar outro produto)</li>
                <li>Recusa de venda sem motivo justo</li>
                <li>Envio de produto não solicitado</li>
                <li>Cobrança de dívida vencida de forma vexatória</li>
                <li>Ameaças ou constrangimento</li>
                <li>Aproveitamento da inexperiência do consumidor</li>
            </ul>
            
            <h3>Publicidade enganosa:</h3>
            <ul>
                <li>Informações falsas sobre o produto</li>
                <li>Omissão de dados importantes</li>
                <li>Preços que não condizem com a realidade</li>
            </ul>
            
            <h3>Seus direitos:</h3>
            <ul>
                <li>Cancelar contratos abusivos</li>
                <li>Receber indenização por danos</li>
                <li>Ter cláusulas abusivas anuladas</li>
                <li>Proteção contra juros abusivos</li>
            </ul>
        `
    }
};

// Função para mostrar seções
function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.borderBottomColor = 'transparent';
    });
    
    const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.style.borderBottomColor = '#667eea';
    }
}

// Função para mostrar detalhes em modal
function showDetails(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (detalhesRights[type]) {
        modalBody.innerHTML = `
            <h2>${detalhesRights[type].title}</h2>
            ${detalhesRights[type].content}
        `;
        modal.style.display = 'block';
    }
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Função para alternar problemas
function toggleProblem(element) {
    const isActive = element.classList.contains('active');
    
    // Fechar todos os problemas
    const allProblems = document.querySelectorAll('.problem-item');
    allProblems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Se não estava ativo, ativar
    if (!isActive) {
        element.classList.add('active');
    }
}

// Dados dos Procons principais do Brasil
const procons = [
    {
        nome: "Procon São Paulo",
        endereco: "Rua Barra Funda, 930 - Barra Funda, São Paulo - SP",
        telefone: "151 ou (11) 3824-0446",
        site: "www.procon.sp.gov.br",
        lat: -23.5275,
        lng: -46.6584
    },
    {
        nome: "Procon Rio de Janeiro",
        endereco: "Av. Rio Branco, 25 - Centro, Rio de Janeiro - RJ",
        telefone: "151 ou (21) 3938-1218",
        site: "www.procon.rj.gov.br",
        lat: -22.9035,
        lng: -43.1788
    },
    {
        nome: "Procon Belo Horizonte",
        endereco: "Rua Carijós, 126 - Centro, Belo Horizonte - MG",
        telefone: "156 ou (31) 3277-4359",
        site: "www.pbh.gov.br/procon",
        lat: -19.9227,
        lng: -43.9404
    },
    {
        nome: "Procon Brasília",
        endereco: "Venâncio Shopping - Setor Comercial Sul Q. 6 - Brasília - DF",
        telefone: "151 ou (61) 3218-7700",
        site: "www.procon.df.gov.br",
        lat: -15.7975,
        lng: -47.8919
    },
    {
        nome: "Procon Salvador",
        endereco: "Rua Chile, 3 - Centro, Salvador - BA",
        telefone: "151 ou (71) 3266-1000",
        site: "www.procon.salvador.ba.gov.br",
        lat: -12.9777,
        lng: -38.5127
    },
    {
        nome: "Procon Recife",
        endereco: "Av. Cais do Apolo, 925 - Recife - PE",
        telefone: "151 ou (81) 3355-3286",
        site: "www.procon.recife.pe.gov.br",
        lat: -8.0631,
        lng: -34.8711
    },
    {
        nome: "Procon Porto Alegre",
        endereco: "Rua dos Andradas, 686 - Centro, Porto Alegre - RS",
        telefone: "151 ou (51) 3289-1774",
        site: "www.procon.rs.gov.br",
        lat: -30.0301,
        lng: -51.2287
    },
    {
        nome: "Procon Curitiba",
        endereco: "Rua Presidente Faria, 431 - Centro, Curitiba - PR",
        telefone: "151 ou (41) 3223-1512",
        site: "www.procon.pr.gov.br",
        lat: -25.4284,
        lng: -49.2733
    }
];

// Variáveis para o mapa e marcadores
let proconMap;
let markers = [];

// Inicializar o mapa quando o modal for aberto
function initProconMap() {
    // Centralizar no Brasil
    const brasilCenter = { lat: -15.77972, lng: -47.92972 };
    
    proconMap = new google.maps.Map(document.getElementById("proconMap"), {
        zoom: 4,
        center: brasilCenter
    });
    
    // Adicionar marcadores para cada Procon
    addProconMarkers();
}

// Adicionar marcadores dos Procons no mapa
function addProconMarkers() {
    // Limpar marcadores existentes
    clearMarkers();
    
    // Adicionar novos marcadores
    procons.forEach(procon => {
        const marker = new google.maps.Marker({
            position: { lat: procon.lat, lng: procon.lng },
            map: proconMap,
            title: procon.nome
        });
        
        // Adicionar info window ao clicar no marcador
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="info-window">
                    <h4>${procon.nome}</h4>
                    <p>${procon.endereco}</p>
                    <p>Tel: ${procon.telefone}</p>
                    <p><a href="https://${procon.site}" target="_blank">${procon.site}</a></p>
                </div>
            `
        });
        
        marker.addListener("click", () => {
            infoWindow.open(proconMap, marker);
        });
        
        markers.push(marker);
    });
}

// Limpar todos os marcadores do mapa
function clearMarkers() {
    if (markers) {
        markers.forEach(marker => marker.setMap(null));
        markers = [];
    }
}

// Centralizar o mapa em um Procon específico
function centerMapOnProcon(lat, lng, name) {
    if (proconMap) {
        const position = { lat: lat, lng: lng };
        proconMap.setCenter(position);
        proconMap.setZoom(15);
        
        // Destacar o item na lista
        const items = document.querySelectorAll('.procon-item');
        items.forEach(item => {
            if (item.querySelector('h4').textContent === name) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

// Buscar Procon por cidade
function searchProconByCity() {
    const city = document.getElementById('proconCitySearch').value;
    if (!city || !proconMap) return;
    
    // Usar Geocoding API para encontrar a localização da cidade
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: city + ', Brasil' }, (results, status) => {
        if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;
            proconMap.setCenter(location);
            proconMap.setZoom(12);
            
            // Adicionar marcador para a cidade
            new google.maps.Marker({
                position: location,
                map: proconMap,
                title: city,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            
            // Encontrar Procon mais próximo
            findNearestProcon(location.lat(), location.lng());
        } else {
            alert('Não foi possível encontrar a cidade. Tente novamente.');
        }
    });
}

// Usar localização atual do usuário
function getProconByLocation() {
    if (navigator.geolocation && proconMap) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                proconMap.setCenter(userLocation);
                proconMap.setZoom(12);
                
                // Adicionar marcador para a localização do usuário
                new google.maps.Marker({
                    position: userLocation,
                    map: proconMap,
                    title: 'Sua localização',
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });
                
                // Encontrar Procon mais próximo
                findNearestProcon(userLocation.lat, userLocation.lng);
            },
            () => {
                alert('Não foi possível obter sua localização. Verifique as permissões do navegador.');
            }
        );
    } else {
        alert('Seu navegador não suporta geolocalização.');
    }
}

// Encontrar o Procon mais próximo
function findNearestProcon(lat, lng) {
    let nearestProcon = null;
    let shortestDistance = Infinity;
    
    procons.forEach(procon => {
        const distance = calculateDistance(lat, lng, procon.lat, procon.lng);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestProcon = procon;
        }
    });
    
    if (nearestProcon) {
        // Destacar o Procon mais próximo
        setTimeout(() => {
            centerMapOnProcon(nearestProcon.lat, nearestProcon.lng, nearestProcon.nome);
            
            // Mostrar mensagem
            alert(`O Procon mais próximo é: ${nearestProcon.nome}\nDistância aproximada: ${Math.round(shortestDistance)} km`);
        }, 1000);
    }
}

// Calcular distância entre dois pontos (fórmula de Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Carregar API do Google Maps
function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=&callback=initProconMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Função para encontrar Procon
function findProcon() {
    // Conteúdo HTML para o modal
    let modalContent = `
        <div class="procon-modal-content">
            <div class="procon-search">
                <h3>Encontre o Procon mais próximo</h3>
                <div class="search-box">
                    <input type="text" id="proconCitySearch" placeholder="Digite sua cidade..." />
                    <button onclick="searchProconByCity()">Buscar</button>
                </div>
                <p class="procon-tip">Ou use sua localização atual para encontrar o Procon mais próximo:</p>
                <button onclick="getProconByLocation()" class="location-btn">📍 Usar minha localização</button>
            </div>
            
            <div class="procon-map-container">
                <div id="proconMap" style="width: 100%; height: 300px;"></div>
            </div>
            
            <div class="procon-list">
                <h3>Procons Principais</h3>
                <div id="proconsList">
    `;
    
    // Adicionar cada Procon à lista
    procons.forEach(procon => {
        modalContent += `
            <div class="procon-item" onclick="centerMapOnProcon(${procon.lat}, ${procon.lng}, '${procon.nome}')">
                <h4>${procon.nome}</h4>
                <p>📍 ${procon.endereco}</p>
                <p>📞 ${procon.telefone}</p>
                <p>🌐 ${procon.site}</p>
            </div>
        `;
    });
    
    modalContent += `
                </div>
            </div>
            
            <div class="procon-info">
                <h3>Informações Úteis</h3>
                <ul>
                    <li>O Procon é o órgão de proteção e defesa do consumidor</li>
                    <li>Você pode registrar reclamações presencialmente ou online</li>
                    <li>Ligue para 151 para informações gerais (número nacional)</li>
                    <li>Acesse o <a href="https://consumidor.gov.br" target="_blank">consumidor.gov.br</a> para reclamações online</li>
                </ul>
            </div>
        </div>
    `;
    
    // Mostrar o modal com o mapa e a lista de Procons
    showModal('Encontre o Procon mais próximo', modalContent);
    
    // Carregar a API do Google Maps após o modal ser exibido
    setTimeout(loadGoogleMapsAPI, 100);
}

// Função para mostrar informações sobre Juizado
function showJudicial() {
    showModal('Juizado Especial Cível', `
        <h3>Quando usar o Juizado Especial?</h3>
        <ul>
            <li>Causas de até 40 salários mínimos</li>
            <li>Quando Procon não resolveu</li>
            <li>Para casos mais complexos</li>
        </ul>
        
        <h3>Vantagens:</h3>
        <ul>
            <li>Gratuito (até 20 salários mínimos)</li>
            <li>Não precisa de advogado (até 20 salários mínimos)</li>
            <li>Processo mais rápido</li>
            <li>Linguagem simples</li>
        </ul>
        
        <h3>Documentos necessários:</h3>
        <ul>
            <li>RG e CPF</li>
            <li>Comprovante de residência</li>
            <li>Todos os documentos do problema</li>
            <li>Comprovantes de tentativa de solução</li>
        </ul>
        
        <p><strong>💡 Dica:</strong> Procure o Juizado Especial Cível da sua cidade ou acesse o site do Tribunal de Justiça do seu estado.</p>
    `);
}

// Função auxiliar para mostrar modal customizado
function showModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${title}</h2>
        ${content}
    `;
    modal.style.display = 'block';
}

// Função da calculadora
function calcularDireitos() {
    const valor = parseFloat(document.getElementById('valor').value);
    const problema = document.getElementById('problema').value;
    const resultado = document.getElementById('resultado');
    
    if (!valor || valor <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }
    
    if (!problema) {
        alert('Por favor, selecione o tipo de problema.');
        return;
    }
    
    let conteudoResultado = '';
    
    switch (problema) {
        case 'cobranca-indevida':
            const valorDobro = valor * 2;
            conteudoResultado = `
                <h3>💰 Seus Direitos por Cobrança Indevida</h3>
                <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><strong>Valor cobrado indevidamente:</strong> R$ ${valor.toFixed(2)}</p>
                    <p><strong>Valor a receber (em dobro):</strong> R$ ${valorDobro.toFixed(2)}</p>
                </div>
                <h4>📋 O que fazer:</h4>
                <ol>
                    <li>Guarde todos os comprovantes da cobrança</li>
                    <li>Contate a empresa para contestar</li>
                    <li>Se não resolver, procure o Procon</li>
                    <li>Em último caso, vá ao Juizado Especial</li>
                </ol>
                <p><small>⚖️ Base legal: Art. 42 do CDC - Parágrafo único</small></p>
            `;
            break;
            
        case 'produto-defeito':
            conteudoResultado = `
                <h3>🔧 Seus Direitos por Produto com Defeito</h3>
                <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><strong>Valor do produto:</strong> R$ ${valor.toFixed(2)}</p>
                    <p><strong>Você pode escolher:</strong></p>
                    <ul>
                        <li>🔄 Troca por produto novo</li>
                        <li>🔧 Reparo gratuito</li>
                        <li>💰 Devolução de R$ ${valor.toFixed(2)}</li>
                        <li>📉 Desconto proporcional no preço</li>
                    </ul>
                </div>
                <h4>⏰ Prazos da garantia legal:</h4>
                <ul>
                    <li><strong>30 dias:</strong> Produtos não duráveis</li>
                    <li><strong>90 dias:</strong> Produtos duráveis</li>
                </ul>
                <p><small>⚖️ Base legal: Art. 18 do CDC</small></p>
            `;
            break;
            
        case 'nao-entrega':
            conteudoResultado = `
                <h3>📦 Seus Direitos por Produto Não Entregue</h3>
                <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><strong>Valor pago:</strong> R$ ${valor.toFixed(2)}</p>
                    <p><strong>Valor a receber:</strong> R$ ${valor.toFixed(2)} + correção monetária</p>
                </div>
                <h4>📋 O que fazer:</h4>
                <ol>
                    <li>Contate a empresa imediatamente</li>
                    <li>Exija prazo para entrega ou devolução</li>
                    <li>Guarde todos os protocolos</li>
                    <li>Se não cumprir, procure o Procon</li>
                </ol>
                <h4>💡 Dicas importantes:</h4>
                <ul>
                    <li>Você pode cancelar a compra a qualquer momento</li>
                    <li>Tem direito à devolução integral</li>
                    <li>Pode pedir indenização por danos morais</li>
                </ul>
                <p><small>⚖️ Base legal: Art. 35 do CDC</small></p>
            `;
            break;
            
        case 'servico-nao-prestado':
            conteudoResultado = `
                <h3>🛠️ Seus Direitos por Serviço Não Prestado</h3>
                <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                    <p><strong>Valor pago:</strong> R$ ${valor.toFixed(2)}</p>
                    <p><strong>Você pode exigir:</strong></p>
                    <ul>
                        <li>🔄 Execução do serviço sem custo adicional</li>
                        <li>🔧 Reexecução por terceiros (por conta da empresa)</li>
                        <li>💰 Devolução de R$ ${valor.toFixed(2)} + correção</li>
                        <li>📉 Abatimento proporcional do preço</li>
                    </ul>
                </div>
                <h4>⏰ Prazo para reclamar:</h4>
                <ul>
                    <li><strong>30 dias:</strong> Serviços não duráveis</li>
                    <li><strong>90 dias:</strong> Serviços duráveis</li>
                </ul>
                <p><small>⚖️ Base legal: Art. 20 do CDC</small></p>
            `;
            break;
    }
    
    resultado.innerHTML = conteudoResultado;
    resultado.classList.add('show');
    
    // Scroll suave para o resultado
    resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Fechar modal clicando fora
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    }
    
    // Atalhos de teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scroll para navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
    
    // Inicializar com a primeira seção ativa
    showSection('direitos');
    
    // Adicionar animação aos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Função para formatar moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Função para validar entrada numérica
function validateNumericInput(input) {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
}

// Aplicar validação ao campo de valor
document.addEventListener('DOMContentLoaded', function() {
    const valorInput = document.getElementById('valor');
    if (valorInput) {
        validateNumericInput(valorInput);
    }
});

// Função para compartilhar informações (futura implementação)
function shareInfo(type) {
    if (navigator.share) {
        navigator.share({
            title: 'Código de Defesa do Consumidor',
            text: 'Conheça seus direitos como consumidor!',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que não suportam Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

// Adicionar tooltips informativos
function addTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Inicializar tooltips quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', addTooltips);

// ===== CÓDIGO CIVIL =====

// Dados dos artigos do Código Civil
const codigoCivilArtigos = [
    {
        id: 'art1',
        numero: 'Art. 1º',
        categoria: 'parte-geral',
        texto: 'Toda pessoa é capaz de direitos e deveres na ordem civil.',
        explicacao: 'Este artigo estabelece o princípio da personalidade civil, garantindo que todas as pessoas, desde o nascimento, possuem capacidade jurídica para adquirir direitos e contrair obrigações.'  
    },
    {
        id: 'art2',
        numero: 'Art. 2º',
        categoria: 'parte-geral',
        texto: 'A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.',
        explicacao: 'Define o início da personalidade civil no nascimento com vida, mas protege os direitos do nascituro (feto) desde a concepção, como o direito à herança e doações.'  
    },
    {
        id: 'art3',
        numero: 'Art. 3º',
        categoria: 'parte-geral',
        texto: 'São absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de 16 (dezesseis) anos.',
        explicacao: 'Estabelece que menores de 16 anos não podem praticar atos da vida civil sem representação. Eles precisam ser representados por seus pais ou tutores.'  
    },
    {
        id: 'art4',
        numero: 'Art. 4º',
        categoria: 'parte-geral',
        texto: 'São incapazes, relativamente a certos atos ou à maneira de os exercer: I - os maiores de dezesseis e menores de dezoito anos; II - os ébrios habituais e os viciados em tóxico; III - aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; IV - os pródigos.',
        explicacao: 'Define os relativamente incapazes, que podem praticar alguns atos da vida civil, mas precisam ser assistidos por seus representantes legais.'  
    },
    {
        id: 'art5',
        numero: 'Art. 5º',
        categoria: 'parte-geral',
        texto: 'A menoridade cessa aos dezoito anos completos, quando a pessoa fica habilitada à prática de todos os atos da vida civil.',
        explicacao: 'Estabelece a maioridade civil aos 18 anos, quando a pessoa adquire plena capacidade para todos os atos da vida civil, sem necessidade de assistência ou representação.'  
    },
    {
        id: 'art186',
        numero: 'Art. 186',
        categoria: 'responsabilidade',
        texto: 'Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.',
        explicacao: 'Define o conceito de ato ilícito, base para a responsabilidade civil. Estabelece que quem causa dano a outra pessoa, seja por ação ou omissão, deve reparar esse dano.'  
    },
    {
        id: 'art187',
        numero: 'Art. 187',
        categoria: 'responsabilidade',
        texto: 'Também comete ato ilícito o titular de um direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.',
        explicacao: 'Estabelece o abuso de direito como ato ilícito. Mesmo quando se tem um direito, seu exercício deve respeitar limites éticos e sociais.'  
    },
    {
        id: 'art927',
        numero: 'Art. 927',
        categoria: 'responsabilidade',
        texto: 'Aquele que, por ato ilícito (arts. 186 e 187), causar dano a outrem, fica obrigado a repará-lo.',
        explicacao: 'Estabelece a obrigação de reparar o dano causado por ato ilícito. É o princípio básico da responsabilidade civil no direito brasileiro.'  
    },
    {
        id: 'art932',
        numero: 'Art. 932',
        categoria: 'responsabilidade',
        texto: 'São também responsáveis pela reparação civil: I - os pais, pelos filhos menores que estiverem sob sua autoridade e em sua companhia; II - o tutor e o curador, pelos pupilos e curatelados, que se acharem nas mesmas condições; III - o empregador ou comitente, por seus empregados, serviçais e prepostos, no exercício do trabalho que lhes competir, ou em razão dele; IV - os donos de hotéis, hospedarias, casas ou estabelecimentos onde se albergue por dinheiro, mesmo para fins de educação, pelos seus hóspedes, moradores e educandos; V - os que gratuitamente houverem participado nos produtos do crime, até a concorrente quantia.',
        explicacao: 'Define a responsabilidade civil por ato de terceiro, estabelecendo situações em que uma pessoa responde pelos danos causados por outra.'  
    },
    {
        id: 'art393',
        numero: 'Art. 393',
        categoria: 'obrigacoes',
        texto: 'O devedor não responde pelos prejuízos resultantes de caso fortuito ou força maior, se expressamente não se houver por eles responsabilizado.',
        explicacao: 'Estabelece que o devedor não é responsável por danos causados por eventos imprevisíveis ou inevitáveis (caso fortuito ou força maior), a menos que tenha assumido expressamente essa responsabilidade.'  
    },
    {
        id: 'art421',
        numero: 'Art. 421',
        categoria: 'contratos',
        texto: 'A liberdade contratual será exercida nos limites da função social do contrato.',
        explicacao: 'Estabelece que a liberdade de contratar deve ser exercida em razão e nos limites da função social do contrato, equilibrando a autonomia privada com o interesse social.'  
    },
    {
        id: 'art422',
        numero: 'Art. 422',
        categoria: 'contratos',
        texto: 'Os contratantes são obrigados a guardar, assim na conclusão do contrato, como em sua execução, os princípios de probidade e boa-fé.',
        explicacao: 'Estabelece o princípio da boa-fé objetiva nos contratos, exigindo que as partes ajam com honestidade, lealdade e transparência em todas as fases contratuais.'  
    },
    {
        id: 'art478',
        numero: 'Art. 478',
        categoria: 'contratos',
        texto: 'Nos contratos de execução continuada ou diferida, se a prestação de uma das partes se tornar excessivamente onerosa, com extrema vantagem para a outra, em virtude de acontecimentos extraordinários e imprevisíveis, poderá o devedor pedir a resolução do contrato. Os efeitos da sentença que a decretar retroagirão à data da citação.',
        explicacao: 'Estabelece a teoria da imprevisão, permitindo a revisão ou resolução de contratos quando eventos imprevisíveis tornam a prestação excessivamente onerosa para uma das partes.'  
    },
    {
        id: 'art1228',
        numero: 'Art. 1.228',
        categoria: 'coisas',
        texto: 'O proprietário tem a faculdade de usar, gozar e dispor da coisa, e o direito de reavê-la do poder de quem quer que injustamente a possua ou detenha.',
        explicacao: 'Define o direito de propriedade e seus atributos: usar, gozar, dispor e reivindicar. Estabelece os poderes do proprietário sobre seus bens.'  
    },
    {
        id: 'art1723',
        numero: 'Art. 1.723',
        categoria: 'familia',
        texto: 'É reconhecida como entidade familiar a união estável entre o homem e a mulher, configurada na convivência pública, contínua e duradoura e estabelecida com o objetivo de constituição de família.',
        explicacao: 'Reconhece a união estável como entidade familiar, estabelecendo seus requisitos: convivência pública, contínua, duradoura e com objetivo de constituir família.'  
    },
    {
        id: 'art1784',
        numero: 'Art. 1.784',
        categoria: 'sucessoes',
        texto: 'Aberta a sucessão, a herança transmite-se, desde logo, aos herdeiros legítimos e testamentários.',
        explicacao: 'Estabelece o princípio da saisine, pelo qual a herança é transmitida automaticamente aos herdeiros no momento da morte, independentemente de qualquer formalidade.'  
    }
];

// Dados de jurisprudência relacionada ao Código Civil
const jurisprudencias = [
    {
        id: 'juris1',
        titulo: 'Responsabilidade Civil - Dano Moral',
        resumo: 'O mero dissabor, aborrecimento, mágoa, irritação ou sensibilidade exacerbada estão fora da órbita do dano moral, porquanto, além de fazerem parte da normalidade do nosso dia a dia, no trabalho, no trânsito, entre amigos e até no ambiente familiar, tais situações não são intensas e duradouras, a ponto de romper o equilíbrio psicológico do indivíduo.',
        tribunal: 'STJ - REsp 1.234.567/SP',
        data: '10/05/2021'
    },
    {
        id: 'juris2',
        titulo: 'Contratos - Boa-fé Objetiva',
        resumo: 'A boa-fé objetiva constitui cláusula geral que impõe deveres anexos de conduta às partes no sentido de que estas devem agir com lealdade e colaboração mútua para o alcance dos fins contratuais.',
        tribunal: 'STJ - REsp 1.987.654/RJ',
        data: '15/08/2020'
    },
    {
        id: 'juris3',
        titulo: 'Direito de Família - União Estável',
        resumo: 'Para a configuração da união estável, é necessária a demonstração dos seguintes elementos: convivência pública, contínua e duradoura, estabelecida com o objetivo de constituição de família. A ausência de coabitação não impede o reconhecimento da união estável quando outros elementos evidenciam a existência da entidade familiar.',
        tribunal: 'STF - RE 878.694/MG',
        data: '20/03/2022'
    },
    {
        id: 'juris4',
        titulo: 'Prescrição - Termo Inicial',
        resumo: 'O termo inicial da prescrição surge com o nascimento da pretensão, que, por sua vez, nasce para o titular no momento em que ocorre a violação do seu direito subjetivo.',
        tribunal: 'STJ - REsp 1.456.789/SP',
        data: '05/11/2021'
    },
    {
        id: 'juris5',
        titulo: 'Responsabilidade Civil - Nexo Causal',
        resumo: 'A responsabilidade civil, mesmo objetiva, não pode existir sem a demonstração do nexo de causalidade entre o dano e a conduta do agente. A teoria do dano direto e imediato, também denominada teoria da interrupção do nexo causal, é aquela adotada pelo Código Civil para definir o nexo de causalidade.',
        tribunal: 'STJ - REsp 1.374.284/MG',
        data: '27/08/2019'
    }
];

// Dados detalhados sobre temas do Código Civil
const codigoCivilTemas = {
    'prescrição': {
        title: '⏱️ Prescrição e Decadência',
        content: `
            <h3>Prescrição</h3>
            <p>É a perda do direito de ação por inércia do titular durante certo tempo. Atinge o direito de exigir algo judicialmente.</p>
            
            <h3>Prazos de Prescrição mais comuns:</h3>
            <ul>
                <li><strong>10 anos:</strong> Regra geral (Art. 205)</li>
                <li><strong>5 anos:</strong> Dívidas líquidas em documento particular, prestações periódicas, etc. (Art. 206, §5º)</li>
                <li><strong>3 anos:</strong> Reparação civil, enriquecimento sem causa (Art. 206, §3º)</li>
                <li><strong>1 ano:</strong> Seguro, hospedagem (Art. 206, §1º)</li>
            </ul>
            
            <h3>Decadência</h3>
            <p>É a perda do próprio direito por não exercê-lo no prazo legal. Atinge diretamente o direito.</p>
            
            <h3>Características:</h3>
            <ul>
                <li>A prescrição pode ser interrompida ou suspensa; a decadência legal não</li>
                <li>A prescrição é regra; a decadência é exceção</li>
                <li>A prescrição começa a correr do momento em que o direito é violado</li>
                <li>A decadência começa a correr do momento em que o direito nasce</li>
            </ul>
        `
    },
    'contratos': {
        title: '📝 Contratos',
        content: `
            <h3>Princípios Fundamentais</h3>
            <ul>
                <li><strong>Autonomia da vontade:</strong> Liberdade de contratar</li>
                <li><strong>Função social:</strong> O contrato deve atender a interesses sociais</li>
                <li><strong>Boa-fé objetiva:</strong> Comportamento leal e honesto</li>
                <li><strong>Relatividade:</strong> O contrato só vincula as partes</li>
                <li><strong>Obrigatoriedade:</strong> O contrato faz lei entre as partes</li>
            </ul>
            
            <h3>Formação do Contrato</h3>
            <p>Proposta + Aceitação = Contrato</p>
            
            <h3>Extinção do Contrato</h3>
            <ul>
                <li><strong>Cumprimento:</strong> Execução normal</li>
                <li><strong>Resilição:</strong> Distrato (bilateral) ou denúncia (unilateral)</li>
                <li><strong>Resolução:</strong> Por inadimplemento ou onerosidade excessiva</li>
                <li><strong>Rescisão:</strong> Por lesão ou estado de perigo</li>
            </ul>
            
            <h3>Vícios do Contrato</h3>
            <ul>
                <li><strong>Erro:</strong> Falsa percepção da realidade</li>
                <li><strong>Dolo:</strong> Artifício para induzir alguém a erro</li>
                <li><strong>Coação:</strong> Pressão ilegítima</li>
                <li><strong>Estado de perigo:</strong> Necessidade de salvar-se</li>
                <li><strong>Lesão:</strong> Desproporção entre prestações</li>
                <li><strong>Fraude:</strong> Contra credores ou à execução</li>
            </ul>
        `
    },
    'danos': {
        title: '💔 Danos Morais e Materiais',
        content: `
            <h3>Dano Material</h3>
            <p>Prejuízo financeiro direto ao patrimônio da vítima.</p>
            
            <h3>Tipos de Dano Material:</h3>
            <ul>
                <li><strong>Dano emergente:</strong> O que efetivamente se perdeu</li>
                <li><strong>Lucro cessante:</strong> O que razoavelmente deixou de ganhar</li>
            </ul>
            
            <h3>Dano Moral</h3>
            <p>Lesão a direitos da personalidade, causando dor, sofrimento, humilhação.</p>
            
            <h3>Características do Dano Moral:</h3>
            <ul>
                <li>Não precisa provar o sofrimento (in re ipsa)</li>
                <li>Independe de repercussão econômica</li>
                <li>Pode ser cumulado com dano material</li>
                <li>Não pode gerar enriquecimento sem causa</li>
            </ul>
            
            <h3>Requisitos da Responsabilidade Civil:</h3>
            <ul>
                <li><strong>Conduta:</strong> Ação ou omissão</li>
                <li><strong>Dano:</strong> Prejuízo sofrido</li>
                <li><strong>Nexo causal:</strong> Relação entre conduta e dano</li>
                <li><strong>Culpa:</strong> Necessária na responsabilidade subjetiva</li>
            </ul>
            
            <h3>Excludentes de Responsabilidade:</h3>
            <ul>
                <li>Legítima defesa</li>
                <li>Exercício regular de direito</li>
                <li>Estado de necessidade</li>
                <li>Caso fortuito ou força maior</li>
                <li>Culpa exclusiva da vítima</li>
                <li>Fato de terceiro</li>
            </ul>
        `
    },
    'propriedade': {
        title: '🏠 Propriedade',
        content: `
            <h3>Direito de Propriedade</h3>
            <p>Conjunto de faculdades: usar, gozar, dispor e reivindicar.</p>
            
            <h3>Função Social da Propriedade</h3>
            <p>A propriedade deve ser exercida em consonância com suas finalidades econômicas e sociais.</p>
            
            <h3>Modos de Aquisição:</h3>
            <ul>
                <li><strong>Usucapião:</strong> Posse prolongada</li>
                <li><strong>Registro:</strong> De título translativo</li>
                <li><strong>Acessão:</strong> Formação de ilhas, aluvião, etc.</li>
                <li><strong>Sucessão:</strong> Hereditária</li>
            </ul>
            
            <h3>Perda da Propriedade:</h3>
            <ul>
                <li>Alienação</li>
                <li>Renúncia</li>
                <li>Abandono</li>
                <li>Perecimento</li>
                <li>Desapropriação</li>
            </ul>
            
            <h3>Direitos de Vizinhança:</h3>
            <ul>
                <li>Uso anormal da propriedade</li>
                <li>Árvores limítrofes</li>
                <li>Passagem forçada</li>
                <li>Águas</li>
                <li>Limites entre prédios</li>
                <li>Direito de construir</li>
            </ul>
            
            <h3>Condomínio:</h3>
            <ul>
                <li><strong>Geral:</strong> Voluntário ou necessário</li>
                <li><strong>Edilício:</strong> Em edificações (apartamentos)</li>
            </ul>
        `
    }
};

// Função para mostrar as abas do Código Civil
function showCivilCodeTab(tabId) {
    // Esconder todas as abas
    const tabs = document.querySelectorAll('.civil-code-tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar a aba selecionada
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Atualizar botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.tab-button[onclick="showCivilCodeTab('${tabId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Carregar conteúdo específico da aba
    if (tabId === 'artigos' && !document.querySelector('#civilCodeArticles .accordion-item')) {
        carregarArtigos();
    } else if (tabId === 'jurisprudencia' && !document.querySelector('.jurisprudencia-item')) {
        carregarJurisprudencias();
    }
}

// Função para carregar os artigos do Código Civil
function carregarArtigos() {
    const container = document.getElementById('civilCodeArticles');
    if (!container) return;
    
    let html = '';
    
    codigoCivilArtigos.forEach(artigo => {
        html += `
            <div class="accordion-item" data-id="${artigo.id}" data-categoria="${artigo.categoria}">
                <div class="accordion-header" onclick="toggleAccordion('${artigo.id}')">
                    <span>${artigo.numero}</span>
                    <span class="accordion-icon">+</span>
                </div>
                <div class="accordion-content">
                    <p>${artigo.texto}</p>
                    <div class="explicacao">
                        <h4>Explicação:</h4>
                        <p>${artigo.explicacao}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Função para carregar jurisprudências
function carregarJurisprudencias() {
    const container = document.querySelector('.jurisprudencia-list');
    if (!container) return;
    
    let html = '';
    
    jurisprudencias.forEach(jurisprudencia => {
        html += `
            <div class="jurisprudencia-item" data-id="${jurisprudencia.id}">
                <h3>${jurisprudencia.titulo}</h3>
                <p>${jurisprudencia.resumo}</p>
                <div class="jurisprudencia-footer">
                    <span class="tribunal">${jurisprudencia.tribunal}</span>
                    <span class="data">${jurisprudencia.data}</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Função para alternar o accordion
function toggleAccordion(id) {
    const item = document.querySelector(`.accordion-item[data-id="${id}"]`);
    if (item) {
        const isActive = item.classList.contains('active');
        
        // Fechar todos os itens
        document.querySelectorAll('.accordion-item').forEach(accordionItem => {
            accordionItem.classList.remove('active');
            const icon = accordionItem.querySelector('.accordion-icon');
            if (icon) icon.textContent = '+';
        });
        
        // Se não estava ativo, ativar
        if (!isActive) {
            item.classList.add('active');
            const icon = item.querySelector('.accordion-icon');
            if (icon) icon.textContent = '-';
        }
    }
}

// Função para pesquisar no Código Civil
function searchCivilCode() {
    const searchText = document.getElementById('searchCivilCode').value.toLowerCase();
    const categoria = document.getElementById('civilCodeCategory').value;
    
    // Pesquisar artigos
    const artigos = document.querySelectorAll('.accordion-item');
    artigos.forEach(artigo => {
        const artigoText = artigo.textContent.toLowerCase();
        const artigoCategoria = artigo.getAttribute('data-categoria');
        
        const matchesSearch = searchText === '' || artigoText.includes(searchText);
        const matchesCategoria = categoria === '' || artigoCategoria === categoria;
        
        if (matchesSearch && matchesCategoria) {
            artigo.style.display = 'block';
        } else {
            artigo.style.display = 'none';
        }
    });
    
    // Pesquisar jurisprudências
    const jurisprudenciaItems = document.querySelectorAll('.jurisprudencia-item');
    jurisprudenciaItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        
        if (searchText === '' || itemText.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Função para filtrar por categoria
function filterCivilCodeCategory() {
    searchCivilCode(); // Reutiliza a função de pesquisa
}

// Função para mostrar detalhes de temas do Código Civil
function showCivilCodeDetails(tema) {
    if (codigoCivilTemas[tema]) {
        showModal(codigoCivilTemas[tema].title, codigoCivilTemas[tema].content);
    }
}

// Inicializar a seção do Código Civil quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na seção do Código Civil
    const codigoCivilSection = document.getElementById('codigo-civil');
    if (codigoCivilSection && codigoCivilSection.classList.contains('active')) {
        // Se a seção estiver ativa, carregar os artigos
        carregarArtigos();
    }
});