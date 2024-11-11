const API_KEY = `live_bewFyXoIDW5hEUkiaPjfNJ4zuq5ViN4C2zGSKRpaeWhgasQ7BQHdDnvcavZggXPI`;
const URL = `https://api.thecatapi.com/v1/images/search?limit=9&api_key=${API_KEY}`;

// Busca as imagens na API
const searchData = async () => {
    const res = document.getElementById('res');
    
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            res.innerHTML = 'Erro ao buscar imagens!';
        } else {
            const object = await response.json();
            res.innerHTML = ''; // Limpa o contêiner antes de adicionar novas imagens
            
            object.forEach((e) => {
                const img = document.createElement('img');
                img.src = e.url;
                img.alt = 'Cats Images';
                res.appendChild(img); // Adiciona a imagem ao contêiner
            });
        }
    } catch (error) {
        res.innerHTML = 'ERROR!';
    }
};

// Função para tocar o áudio e buscar as imagens
function FetchData() {
    let audio = new Audio('../assets/meow.m4a');
    audio.play(); // Toca o áudio

    // Torna o contêiner de imagens visível
    const res = document.getElementById('res');
    res.style.display = 'grid'; // Exibe o contêiner de imagens como grid

    searchData(); // Chama a função que busca as imagens da API
}