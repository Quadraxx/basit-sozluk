document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elementlerini seçme
    const kelimeInput = document.getElementById('kelimeInput');
    const anlamInput = document.getElementById('anlamInput');
    const ekleBtn = document.getElementById('ekleBtn');
    const kelimeListesi = document.getElementById('kelimeListesi');

    // Uygulama yüklendiğinde Local Storage'dan kelimeleri al ve listeye ekle
    loadWords();

    // Ekle butonuna tıklanınca kelime ekleme fonksiyonunu çağır
    ekleBtn.addEventListener('click', addWord);

    // Enter tuşuyla da kelime ekleyebilmek için
    kelimeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addWord();
        }
    });

    anlamInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addWord();
        }
    });

    // Kelime ekleme fonksiyonu
    function addWord() {
        const kelime = kelimeInput.value.trim();
        const anlam = anlamInput.value.trim();

        if (kelime === '' || anlam === '') {
            alert('Lütfen hem kelimeyi hem de anlamını girin.');
            return;
        }

        const newWord = { kelime: kelime, anlam: anlam };

        // Kelimeleri Local Storage'a kaydet
        saveWord(newWord);

        // Listeye yeni kelimeyi ekle
        displayWord(newWord);

        // Giriş alanlarını temizle
        kelimeInput.value = '';
        anlamInput.value = '';
        kelimeInput.focus();
    }

    // Kelimeyi Local Storage'a kaydeden fonksiyon
    function saveWord(word) {
        // Mevcut kelimeleri al, yoksa boş bir array oluştur
        let words = JSON.parse(localStorage.getItem('words')) || [];
        
        // Yeni kelimeyi ekle
        words.push(word);
        
        // Güncel listeyi Local Storage'a kaydet
        localStorage.setItem('words', JSON.stringify(words));
    }

    // Local Storage'dan kelimeleri alıp ekrana yazdıran fonksiyon
    function loadWords() {
        let words = JSON.parse(localStorage.getItem('words')) || [];
        words.forEach(displayWord);
    }

    // Kelimeyi HTML listesine ekleyen fonksiyon
    function displayWord(word) {
        const listItem = document.createElement('li');
        
        // Kelime ve anlamı gösterecek HTML yapısı
        listItem.innerHTML = `
            <span>${word.kelime}</span>
            <span class="anlam">(${word.anlam})</span>
        `;
        
        kelimeListesi.appendChild(listItem);
    }
});