# 📚 Basit Sözlük Uygulaması (Simple Dictionary App)

Bu proje, kullanıcıların yeni öğrendikleri kelimeleri, teknik terimleri veya mesleki jargonları anlamlarıyla birlikte kaydedebilecekleri, hafif ve hızlı bir web uygulamasıdır. 

Veriler **Local Storage (Yerel Depolama)** kullanılarak tarayıcıda saklanır, bu sayede sayfa yenilense veya tarayıcı kapatılsa bile eklediğiniz kelimeler kaybolmaz.

## 🚀 Özellikler

* **Kelime Ekleme:** Kelime ve anlamını girerek listenize ekleyebilirsiniz.
* **Kalıcı Hafıza:** `Local Storage` teknolojisi sayesinde verileriniz tarayıcı önbelleğinde tutulur.
* **Anlık Listeleme:** Sayfa yenilenmeden eklenen kelimeler listeye düşer.
* **Sade Tasarım:** Odaklanmayı kolaylaştıran minimalist arayüz.

## 🛠️ Kullanılan Teknolojiler

Proje herhangi bir kütüphane veya framework kullanılmadan, saf (vanilla) web teknolojileri ile geliştirilmiştir:

* **HTML5:** Semantik yapı ve form alanları.
* **CSS3:** Görsel tasarım ve düzen (layout).
* **JavaScript (ES6+):** DOM manipülasyonu ve Local Storage yönetimi.

## 📂 Kurulum ve Kullanım

Bu projeyi çalıştırmak için herhangi bir sunucu kurulumuna veya paket yöneticisine (npm vb.) ihtiyacınız yoktur.

1.  Bu projeyi bilgisayarınıza indirin (veya `git clone` ile çekin).
2.  Klasörün içindeki `index.html` dosyasına çift tıklayın.
3.  Uygulama varsayılan tarayıcınızda açılacaktır.
4.  Kelime ve anlam kutucuklarını doldurup **"Ekle"** butonuna basarak test etmeye başlayın!
🔮 Gelecek Planları (To-Do)
[ ] Eklenen kelimeleri silme butonu eklenmesi.

[ ] Kelimeler arasında arama yapma özelliği.

[ ] Karanlık mod (Dark Mode) desteği.

[ ] Kelimeleri JSON olarak dışa aktarma.

🤝 Katkıda Bulunma
Önerileriniz ve katkılarınız memnuniyetle karşılanır. Lütfen önce bir "issue" açarak tartışmayı başlatın veya doğrudan "pull request" gönderin.

## 📝 Kod Yapısı

```text
sozluk-uygulamasi/
├── index.html      # Ana HTML yapısı
├── style.css       # Tasarım dosyası
├── script.js       # Uygulama mantığı ve Local Storage kodları
└── README.md       # Proje dökümantasyonu
