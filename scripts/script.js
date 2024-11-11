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
            res.innerHTML = ''; 
            
            object.forEach((e) => {
                const img = document.createElement('img');
                img.src = e.url;
                img.alt = 'Cats Images';
                res.appendChild(img); 
            });
        }
    } catch (error) {
        res.innerHTML = 'ERRO!';
    }
};

function FetchData() {
    let audio = new Audio('../assets/meow.m4a');
    audio.play(); 
    const res = document.getElementById('res');
    res.style.display = 'grid'; 
    searchData(); 
}