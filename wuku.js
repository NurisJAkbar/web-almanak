// wuku.js

const WukuData = {
    NAMES: [
        "Sinta", "Landep", "Wukir", "Kurantil", "Tolu", "Gumbreg", "Warigalit", "Warigagung", 
        "Julungwangi", "Sungsang", "Galungan", "Kuningan", "Langkir", "Mandasiya", "Julungpujut", 
        "Pahang", "Kuruwelut", "Marakeh", "Tambir", "Madangkungan", "Maktal", "Wuye", 
        "Manahil", "Prangbakat", "Bala", "Wugu", "Wayang", "Kulawu", "Dukut", "Watugunung"
    ],
    DETAILS: [
        { // 0. Sinta
            dewa: "Batara Yamadipati", kayu: "Kendayakan (Pohon Asam Jawa)", burung: "Gagak", gedhong: "Di depan (suka pamer, dermawan)", senjata: "Kapak & Penggala (Bajak)",
            candra: "Kumara tumurun, ngagem songsong agung (Pemuda turun memakai payung kebesaran)", 
            watak: "Baik hati, pemurah, tidak bisa menyimpan uang, suka kemewahan, pandai bicara dan bergaul.\nCepat naik darah tapi juga cepat reda. Suka menolong tanpa pamrih.",
            nasib: "Rejeki baik di awal, namun boros. Perlu hati-hati dalam pengelolaan keuangan.\nSering mendapat pertolongan tak terduga. Cocok berdagang atau pekerjaan yang butuh komunikasi.",
            sengkala: "Terkena senjata tajam, jatuh dari ketinggian, atau masalah karena air.",
            arah: "Barat Laut (menghadap ke Tenggara)", hariSial: "Radite Paing (hari pertama wuku)", 
            anjuran: "Bersedekah untuk menolak bala, terutama kepada fakir miskin dan anak yatim.\nBerhati-hati saat beraktivitas di dekat air atau ketinggian."
        },
        { // 1. Landep
            dewa: "Batara Mahadewa", kayu: "Jenar (Pohon Jati)", burung: "Atat Kembang (Platuk Bawang)", gedhong: "Di depan, tertutup (pandai menyimpan rahasia, cerdas)", senjata: "Panah",
            candra: "Wulan purnama kaworan rahina (Bulan purnama terselubung siang hari)", 
            watak: "Cerdas, tajam pikiran, pemberani, suka menolong, berwibawa, pandai menyimpan rahasia.\nNamun kadang angkuh dan mudah tersinggung jika harga dirinya terusik.",
            nasib: "Rejeki lancar, pandai mencari peluang. Cocok jadi pemimpin, penasihat, atau pekerjaan yang membutuhkan ketajaman analisis.\nHarus bisa mengendalikan keangkuhan agar tidak dijauhi.",
            sengkala: "Difitnah, masalah karena perkataan tajam, atau terluka karena benda runcing.",
            arah: "Utara (menghadap ke Selatan)", hariSial: "Soma Pon (hari kedua wuku)", 
            anjuran: "Menjaga lisan, lebih rendah hati, dan berhati-hati dengan teman yang baru dikenal.\nMelakukan tapa brata atau puasa untuk menajamkan batin."
        },
        { // 2. Wukir
            dewa: "Batara Mahayekti (Sang Hyang Giri Nata)", kayu: "Nagasari", burung: "Manyar (Burung Pipit)", gedhong: "Di belakang (rendah hati, tapi kurang berani tampil, pemalu)", senjata: "Keris",
            candra: "Gunung guntur ketug lindu (Gunung bergemuruh, petir menyambar, gempa bumi)", 
            watak: "Pendiam, tekun, kuat pendirian, jujur, dan setia. Namun agak lamban, kurang inisiatif, dan pemalu.\nSuka menyendiri dan merenung. Jika marah bisa berbahaya.",
            nasib: "Rejeki stabil tapi tidak melimpah, datangnya perlahan tapi pasti. Perlu keberanian lebih untuk maju.\nCocok untuk pekerjaan yang butuh ketekunan dan ketelitian.",
            sengkala: "Tertimpa benda keras, masalah dengan tanah/bangunan, atau terjatuh.",
            arah: "Timur Laut (menghadap ke Barat Daya)", hariSial: "Anggara Wage (hari ketiga wuku)", 
            anjuran: "Lebih proaktif, jangan takut mengambil risiko yang terukur.\nBerdoa di tempat tinggi atau tempat yang dianggap keramat untuk ketenangan batin."
        },
        { // 3. Kurantil
            dewa: "Batara Langsur", kayu: "Ingas", burung: "Sriti (Walet)", gedhong: "Di kiri (kurang beruntung, sering merugi)", senjata: "Payung",
            candra: "Kombang angajap ing tawang (Kumbang mengharap ke angkasa)",
            watak: "Mudah tersinggung, pendendam, kurang percaya diri, sering merasa was-was.\nNamun jika sudah percaya, akan sangat setia. Cermat dalam pengeluaran.",
            nasib: "Rejeki agak seret, sering mengalami kerugian atau kegagalan. Perlu kerja keras dan kesabaran ekstra.\nHarus pandai memilih teman dan lingkungan.",
            sengkala: "Tertipu, kehilangan barang, atau sakit karena pikiran.",
            arah: "Timur (menghadap ke Barat)", hariSial: "Buda Kliwon (hari keempat wuku)",
            anjuran: "Banyak bersabar, beramal, dan mendekatkan diri pada Tuhan.\nMenghindari perdebatan dan perselisihan."
        },
        { // 4. Tolu
            dewa: "Batara Bayu", kayu: "Waru doyong (Waru miring)", burung: "Bido (Elang Ular)", gedhong: "Di kanan (beruntung, suka menolong)", senjata: "Angin (Kipas)",
            candra: "Satriya lelungan ananggapi sangkepan (Kesatria bepergian menghadiri pertemuan)",
            watak: "Kuat, gesit, suka bepergian, pandai berdiplomasi, mudah bergaul, dan suka menolong.\nNamun kadang plin-plan dan tidak tetap pendirian.",
            nasib: "Rejeki datang dari berbagai arah, sering mendapat kemudahan. Cocok untuk pekerjaan yang dinamis dan berhubungan dengan banyak orang.",
            sengkala: "Kecelakaan di perjalanan, masalah karena angin (masuk angin, dll).",
            arah: "Tenggara (menghadap ke Barat Laut)", hariSial: "Respati Legi (hari kelima wuku)",
            anjuran: "Lebih fokus dan konsisten dalam bertindak.\nMemberi selamatan berupa makanan yang diolah dengan cara dikukus."
        },
        { // 5. Gumbreg
            dewa: "Batara Candra", kayu: "Beringin", burung: "Ayam Alas (Ayam Hutan)", gedhong: "Di atas (berbudi luhur, dihormati)", senjata: "Kembang (Bunga)",
            candra: "Wanita yu membatik (Wanita cantik membatik)",
            watak: "Baik hati, penyayang, sabar, suka kedamaian, dan dihormati banyak orang.\nNamun cenderung pasif dan kurang berani mengambil keputusan besar.",
            nasib: "Rejeki cukup, hidup tenteram dan damai. Disukai atasan dan bawahan.\nCocok untuk pekerjaan sosial atau yang berkaitan dengan seni dan keindahan.",
            sengkala: "Masalah dengan wanita, atau sakit karena terlalu banyak pikiran.",
            arah: "Selatan (menghadap ke Utara)", hariSial: "Sukra Paing (hari keenam wuku)",
            anjuran: "Lebih berani mengungkapkan pendapat dan mengambil inisiatif.\nMenanam pohon atau merawat tanaman."
        },
        { // 6. Warigalit
            dewa: "Batara Asmara", kayu: "Sulastri (Pohon Cempaka)", burung: "Kepodang", gedhong: "Di depan, terbuka sebagian (menarik, tapi suka memilih teman)", senjata: "Cupu (Wadah kecil)",
            candra: "Resi angliga padma (Pendeta duduk di atas teratai)",
            watak: "Menarik, pandai merayu, romantis, artistik, dan suka keindahan.\nNamun cenderung pemilih, mudah bosan, dan kadang kurang setia.",
            nasib: "Rejeki mudah datang, terutama dari lawan jenis atau bidang seni.\nPerlu menjaga komitmen agar hubungan langgeng.",
            sengkala: "Masalah asmara, perselingkuhan, atau keracunan makanan/minuman.",
            arah: "Barat Daya (menghadap ke Timur Laut)", hariSial: "Saniscara Pon (hari ketujuh wuku)",
            anjuran: "Menjaga kesetiaan dan komitmen.\nMemberikan persembahan berupa bunga-bunga harum."
        },
        { // 7. Warigagung
            dewa: "Batara Maharesi", kayu: "Cemara", burung: "Betet", gedhong: "Di belakang, tinggi (bijaksana, berwibawa, tapi sulit didekati)", senjata: "Pustaka (Buku)",
            candra: "Pandita putus ing ngelmi (Pendeta yang sempurna ilmunya)",
            watak: "Bijaksana, cerdas, berwibawa, pendiam, dan suka belajar.\nNamun kadang kaku, sulit bergaul, dan merasa lebih unggul.",
            nasib: "Rejeki baik, dihormati karena ilmu dan kebijaksanaannya. Cocok menjadi guru, ilmuwan, atau rohaniwan.",
            sengkala: "Jatuh sakit karena terlalu banyak belajar/berpikir, atau kesepian.",
            arah: "Barat (menghadap ke Timur)", hariSial: "Radite Wage (hari pertama wuku ini)",
            anjuran: "Lebih membuka diri untuk bersosialisasi.\nBerbagi ilmu dan pengetahuan kepada orang lain."
        },
        { // 8. Julungwangi
            dewa: "Batara Sambu", kayu: "Kemuning", burung: "Keker (Ayam pegar)", gedhong: "Di kiri, menghadap ke luar (suka berdebat, ingin menang sendiri)", senjata: "Gada",
            candra: "Watu item munggwing sela (Batu hitam di atas batu)",
            watak: "Keras kepala, suka berdebat, ingin menang sendiri, pemberani, dan kuat fisik.\nNamun setia kawan dan bertanggung jawab.",
            nasib: "Rejeki harus dicari dengan kerja keras dan persaingan. Cocok di bidang militer, hukum, atau olahraga.",
            sengkala: "Terluka dalam perkelahian, masalah hukum, atau cedera karena olahraga.",
            arah: "Barat Laut (menghadap ke Tenggara)", hariSial: "Soma Kliwon (hari kedua wuku ini)",
            anjuran: "Belajar mengendalikan emosi dan lebih mau mengalah.\nMenghindari pertengkaran yang tidak perlu."
        },
        { // 9. Sungsang
            dewa: "Batara Gana (Ganesha)", kayu: "Pisang", burung: "Kutut (Perkutut)", gedhong: "Terbalik (sering sial, hidup terbalik dari harapan)", senjata: "Tumbak",
            candra: "Gajah meta anempuh jurang (Gajah marah menyerbu jurang)",
            watak: "Sering mengalami kesulitan, hidup penuh perjuangan, mudah putus asa.\nNamun jika tekun dan sabar, bisa mencapai kesuksesan di usia tua.",
            nasib: "Rejeki sering terhambat, banyak rintangan. Perlu ketabahan dan spiritualitas yang kuat.",
            sengkala: "Kecelakaan, tertimpa musibah beruntun, atau sakit parah.",
            arah: "Utara (menghadap ke Selatan)", hariSial: "Anggara Legi (hari ketiga wuku ini)",
            anjuran: "Banyak berdoa, bersedekah, dan melakukan perbuatan baik.\nSelalu waspada dan berhati-hati dalam segala hal."
        },
        { // 10. Galungan
            dewa: "Batara Kamajaya", kayu: "Timbul (Pohon Randu Alas)", burung: "Merak", gedhong: "Di kanan, megah (suka kemewahan, berwibawa)", senjata: "Panah Asmara",
            candra: "Raden Arjuna anenggih semadi (Raden Arjuna sedang bersemedi)",
            watak: "Tampan/cantik, menarik, berwibawa, suka keindahan dan kemewahan.\nCerdas, pandai berdiplomasi, namun kadang sombong dan suka pamer.",
            nasib: "Rejeki melimpah, banyak dikagumi orang. Cocok menjadi seniman, diplomat, atau public figure.",
            sengkala: "Terlena oleh pujian, masalah karena kesombongan, atau pengeluaran boros.",
            arah: "Timur Laut (menghadap ke Barat Daya)", hariSial: "Buda Paing (hari keempat wuku ini)",
            anjuran: "Tetap rendah hati dan tidak boros.\nMengasah kepekaan sosial dan spiritual."
        },
        { // 11. Kuningan
            dewa: "Batara Indra", kayu: "Wijayakusuma", burung: "Garuda", gedhong: "Di atas, menghadap ke bawah (pemimpin yang mengayomi)", senjata: "Bajra (Petir)",
            candra: "Begawan eca ing pasanggrahan (Pertapa senang di pesanggrahan)",
            watak: "Berjiwa pemimpin, adil, bijaksana, suka mengayomi, dan berwibawa tinggi.\nNamun kadang keras dan tidak mau dibantah.",
            nasib: "Menjadi pemimpin besar, dihormati dan disegani. Rejeki berlimpah dan kekuasaan besar.",
            sengkala: "Kehilangan kekuasaan karena kelengahan, atau dikhianati orang kepercayaan.",
            arah: "Timur (menghadap ke Barat)", hariSial: "Respati Pon (hari kelima wuku ini)",
            anjuran: "Tetap waspada dan jangan mudah percaya pada orang lain.\nSelalu berpegang pada keadilan dan kebenaran."
        },
        { // 12. Langkir
            dewa: "Batara Kala", kayu: "Wungu", burung: "Prenjak", gedhong: "Di kiri, kosong (sering kekurangan, hidup prihatin)", senjata: "Pedang",
            candra: "Buta ngamuk sima katawan (Raksasa mengamuk, singa tertawan)",
            watak: "Sering marah, emosional, mudah tersulut, dan pendendam.\nNamun pemberani dan tidak takut menghadapi bahaya.",
            nasib: "Hidup penuh tantangan dan kesulitan. Rejeki harus diperjuangkan dengan keras.\nPerlu mengendalikan emosi agar tidak merugikan diri sendiri.",
            sengkala: "Terlibat perkelahian, terluka parah, atau dipenjara.",
            arah: "Tenggara (menghadap ke Barat Laut)", hariSial: "Sukra Wage (hari keenam wuku ini)",
            anjuran: "Banyak berpuasa untuk mengendalikan hawa nafsu.\nMenghindari tempat-tempat berbahaya dan orang-orang yang memancing emosi."
        },
        { // 13. Mandasiya
            dewa: "Batara Brahma", kayu: "Kamal (Asam)", burung: "Pelikan", gedhong: "Di kanan, menghadap ke dalam (tekun bekerja, hemat)", senjata: "Api",
            candra: "Pedagang layar ing samodra (Pedagang berlayar di samudra)",
            watak: "Rajin, tekun, ulet, hemat, dan pandai mengatur keuangan.\nNamun kadang pelit dan kurang peduli dengan orang lain.",
            nasib: "Sukses dalam usaha dan perdagangan. Rejeki terkumpul banyak karena keuletan dan hemat.",
            sengkala: "Kebakaran, kerugian besar karena salah perhitungan, atau masalah dengan mitra bisnis.",
            arah: "Selatan (menghadap ke Utara)", hariSial: "Saniscara Kliwon (hari ketujuh wuku ini)",
            anjuran: "Lebih dermawan dan peduli terhadap sesama.\nBerhati-hati dengan api dan investasi berisiko."
        },
        { // 14. Julungpujut
            dewa: "Batara Guritna", kayu: "Rembuyung", burung: "Putih (Merpati)", gedhong: "Di atas, tertutup awan (mulia tapi tersembunyi)", senjata: "Pena Emas",
            candra: "Sekar arum ngambar ing jagad (Bunga harum semerbak di dunia)",
            watak: "Cerdas, berbakat sastra, halus budi, suka kedamaian, dan berjiwa seni tinggi.\nNamun cenderung pemalu dan kurang berani menonjolkan diri.",
            nasib: "Dihargai karena karya dan kehalusan budinya. Rejeki cukup dan hidup tenang.\nCocok menjadi penulis, seniman, atau peneliti.",
            sengkala: "Karyanya diplagiat, atau difitnah karena kebaikannya.",
            arah: "Barat Daya (menghadap ke Timur Laut)", hariSial: "Radite Legi (hari pertama wuku ini)",
            anjuran: "Lebih percaya diri dan berani menunjukkan bakat.\nTerus berkarya dan menyebarkan kebaikan."
        },
        { // 15. Pahang
            dewa: "Batara Tantra", kayu: "Gayam", burung: "Gagak Rimang (sejenis Gagak besar)", gedhong: "Di belakang, kokoh (kuat, pendirian teguh, tapi keras kepala)", senjata: "Tameng (Perisai)",
            candra: "Banyu mili ngidul ngetan (Air mengalir ke selatan lalu ke timur)",
            watak: "Kuat, pendirian teguh, pekerja keras, tidak mudah menyerah, dan bertanggung jawab.\nNamun keras kepala, sulit menerima nasihat, dan kurang fleksibel.",
            nasib: "Mencapai kesuksesan melalui kerja keras dan keteguhan. Rejeki stabil dan terjamin.",
            sengkala: "Konflik karena kekerasan kepala, atau cedera karena terlalu memaksakan diri.",
            arah: "Barat (menghadap ke Timur)", hariSial: "Soma Paing (hari kedua wuku ini)",
            anjuran: "Belajar lebih fleksibel dan mau mendengarkan pendapat orang lain.\nMenjaga kesehatan dengan tidak bekerja terlalu keras."
        },
        { // 16. Kuruwelut
            dewa: "Batara Wisnu", kayu: "Pule", burung: "Cocak Rawun (Kutilang)", gedhong: "Di depan, indah (menarik, pandai bergaul, tapi suka dipuji)", senjata: "Cakra",
            candra: "Lintang karainan (Bintang kesiangan)",
            watak: "Menarik, pandai bergaul, ramah, suka menolong, dan banyak teman.\nNamun suka dipuji, mudah terpengaruh, dan kadang kurang pendirian.",
            nasib: "Rejeki lancar karena pergaulan luas dan banyak yang menyukai. Sering mendapat bantuan.",
            sengkala: "Tertipu oleh teman, atau masalah karena terlalu mudah percaya.",
            arah: "Barat Laut (menghadap ke Tenggara)", hariSial: "Anggara Pon (hari ketiga wuku ini)",
            anjuran: "Lebih berhati-hati dalam memilih teman dan jangan mudah terbuai pujian.\nMeningkatkan kemandirian dan keteguhan pendirian."
        },
        { // 17. Marakeh
            dewa: "Batara Surya", kayu: "Trengguli", burung: "Jalak Suren", gedhong: "Di kanan, terang benderang (jujur, terbuka, bersemangat)", senjata: "Panas (Sinar Matahari)",
            candra: "Srengenge kembar (Matahari kembar)",
            watak: "Jujur, terbuka, bersemangat, optimis, dan berjiwa pemimpin.\nNamun kadang terlalu terus terang sehingga menyinggung, dan tidak sabaran.",
            nasib: "Menjadi orang terpandang, bersinar, dan berpengaruh. Rejeki cerah dan melimpah.",
            sengkala: "Masalah karena perkataan yang terlalu jujur, atau sakit karena terlalu banyak aktivitas.",
            arah: "Utara (menghadap ke Selatan)", hariSial: "Buda Wage (hari keempat wuku ini)",
            anjuran: "Belajar menyampaikan sesuatu dengan lebih bijaksana.\nMenjaga keseimbangan antara kerja dan istirahat."
        },
        { // 18. Tambir
            dewa: "Batara Siwa", kayu: "Upas (Ipuh)", burung: "Prenjak Gunung", gedhong: "Di kiri, gelap (misterius, pendiam, tapi berbahaya jika marah)", senjata: "Trisula",
            candra: "Kala anjrah ing plataran (Kala merajalela di halaman)",
            watak: "Pendiam, misterius, punya kekuatan batin, dan tidak suka diganggu.\nJika marah bisa sangat berbahaya dan merusak.",
            nasib: "Memiliki kekuatan atau kemampuan khusus. Rejeki datang dari hal-hal yang tidak terduga.\nPerlu mengendalikan kekuatan batin agar tidak disalahgunakan.",
            sengkala: "Terlibat masalah gaib, atau celaka karena amarah yang tak terkendali.",
            arah: "Timur Laut (menghadap ke Barat Daya)", hariSial: "Respati Kliwon (hari kelima wuku ini)",
            anjuran: "Menggunakan kekuatan untuk kebaikan dan menolong sesama.\nBanyak berzikir atau meditasi untuk menenangkan diri."
        },
        { // 19. Madangkungan
            dewa: "Batara Basuki", kayu: "Plasa", burung: "Pelung (Ayam Pelung)", gedhong: "Di atas, menghadap ke timur (bijaksana, berorientasi masa depan)", senjata: "Pustaka Lontar",
            candra: "Udan salah mangsa (Hujan salah musim)",
            watak: "Bijaksana, berpandangan jauh ke depan, tenang, sabar, dan suka menolong.\nNamun kadang terlalu idealis dan sulit dipahami orang awam.",
            nasib: "Menjadi penasihat atau orang bijak yang dihormati. Rejeki cukup dan hidup damai.",
            sengkala: "Idenya tidak diterima atau disalahpahami, atau kesepian karena berbeda pandangan.",
            arah: "Timur (menghadap ke Barat)", hariSial: "Sukra Legi (hari keenam wuku ini)",
            anjuran: "Berusaha menyampaikan ide dengan cara yang lebih mudah dimengerti.\nTetap teguh pada prinsip kebaikan."
        },
        { // 20. Maktal
            dewa: "Batara Sakri", kayu: "Nagakusuma (Cempaka Putih)", burung: "Emprit Kaji (Pipit Haji)", gedhong: "Di depan, sederhana tapi rapi (bersih hati, tertib)", senjata: "Pacul",
            candra: "Bumi kapetak (Bumi terbelah/retak)",
            watak: "Jujur, bersih hati, tertib, disiplin, dan pekerja keras.\nNamun kadang kaku dan kurang bisa bersantai.",
            nasib: "Sukses karena kejujuran dan kedisiplinan. Rejeki stabil dari hasil kerja keras.",
            sengkala: "Kelelahan karena terlalu disiplin, atau masalah dengan aturan/birokrasi.",
            arah: "Tenggara (menghadap ke Barat Laut)", hariSial: "Saniscara Paing (hari ketujuh wuku ini)",
            anjuran: "Belajar lebih fleksibel dan menikmati hidup.\nMenjaga keseimbangan antara kerja dan rekreasi."
        },
        { // 21. Wuye
            dewa: "Batara Kuwera", kayu: "Wuni", burung: "Kepinis (Burung Layang-layang)", gedhong: "Di belakang, penuh harta (kaya raya, tapi pelit)", senjata: "Peti Harta",
            candra: "Siti bangsah (Tanah longsor)",
            watak: "Pandai mencari uang, hemat hingga cenderung pelit, suka menumpuk harta.\nNamun ulet dan tidak mudah menyerah dalam berusaha.",
            nasib: "Menjadi kaya raya karena keuletan dan hematnya. Harta melimpah.",
            sengkala: "Kehilangan harta karena bencana atau pencurian, atau dijauhi karena sifat pelit.",
            arah: "Selatan (menghadap ke Utara)", hariSial: "Radite Pon (hari pertama wuku ini)",
            anjuran: "Belajar lebih dermawan dan menggunakan harta untuk kebaikan.\nBerhati-hati dalam menjaga harta benda."
        },
        { // 22. Manahil
            dewa: "Batara Citragotra", kayu: "Kelapa Gading", burung: "Podang (Kepodang)", gedhong: "Di kanan, artistik (berbakat seni, menarik)", senjata: "Kecapi",
            candra: "Satriya anom nginum degan (Kesatria muda minum kelapa muda)",
            watak: "Berbakat seni, kreatif, menarik, pandai berbicara, dan suka keindahan.\nNamun kadang moody dan kurang konsisten.",
            nasib: "Sukses di bidang seni atau pekerjaan kreatif. Rejeki datang dari bakatnya.",
            sengkala: "Bakatnya tidak berkembang karena kurang disiplin, atau masalah karena sifat moody.",
            arah: "Barat Daya (menghadap ke Timur Laut)", hariSial: "Soma Wage (hari kedua wuku ini)",
            anjuran: "Lebih disiplin dalam mengembangkan bakat.\nMenjaga kestabilan emosi."
        },
        { // 23. Prangbakat
            dewa: "Batara Bisma", kayu: "Kluwih", burung: "Elang", gedhong: "Di atas, menghadap ke barat (berwibawa, tegas, tapi suka berperang)", senjata: "Tombak Pusaka",
            candra: "Menjangan katunu (Kijang terbakar)",
            watak: "Berwibawa, tegas, pemberani, berjiwa ksatria, dan pantang menyerah.\nNamun suka berkonflik, keras, dan sulit mengalah.",
            nasib: "Menjadi pemimpin perang atau tokoh yang disegani karena ketegasannya. Rejeki dari perjuangan.",
            sengkala: "Terluka parah dalam pertempuran atau konflik, atau banyak musuh.",
            arah: "Barat (menghadap ke Timur)", hariSial: "Anggara Kliwon (hari ketiga wuku ini)",
            anjuran: "Menggunakan ketegasan untuk keadilan, bukan untuk mencari musuh.\nBelajar lebih bijaksana dalam menghadapi konflik."
        },
        { // 24. Bala
            dewa: "Batari Durga", kayu: "Maja", burung: "Gagak Hitam", gedhong: "Di kiri, angker (ditakuti, punya kekuatan gaib, tapi pemarah)", senjata: "Pedang Beracun",
            candra: "Surya tinutup mega (Matahari tertutup awan)",
            watak: "Pemarah, pendendam, ditakuti, punya kekuatan gaib atau ilmu hitam.\nNamun jika baik, bisa menjadi pelindung yang kuat.",
            nasib: "Hidup penuh liku-liku, sering berurusan dengan hal gaib. Rejeki tidak menentu.",
            sengkala: "Celaka karena ilmu gaib, atau menjadi korban kemarahan sendiri.",
            arah: "Barat Laut (menghadap ke Tenggara)", hariSial: "Buda Legi (hari keempat wuku ini)",
            anjuran: "Menggunakan kekuatan untuk kebaikan, bukan untuk mencelakai.\nBanyak beribadah dan mengendalikan amarah."
        },
        { // 25. Wugu
            dewa: "Batara Singajalma", kayu: "Wuni Pahit", burung: "Betet Elang", gedhong: "Di belakang, tersembunyi (pandai strategi, licin)", senjata: "Jaring",
            candra: "Bulan kena rahunya (Bulan dimakan Rahu/gerhana bulan)",
            watak: "Cerdik, pandai strategi, licin, sulit ditebak, dan pandai berkelit.\nNamun bisa menjadi penasihat yang ulung jika berada di pihak yang benar.",
            nasib: "Sering terlibat dalam intrik dan strategi. Rejeki datang dari kecerdikannya.",
            sengkala: "Terjebak dalam siasat sendiri, atau dikhianati oleh orang yang diperalat.",
            arah: "Utara (menghadap ke Selatan)", hariSial: "Respati Paing (hari kelima wuku ini)",
            anjuran: "Menggunakan kecerdikan untuk tujuan yang baik dan adil.\nBerhati-hati agar tidak terjebak dalam permainan sendiri."
        },
        { // 26. Wayang
            dewa: "Batari Sri", kayu: "Cendana", burung: "Gelatik", gedhong: "Di depan, indah dan ramai (disukai banyak orang, makmur)", senjata: "Padi dan Kapas",
            candra: "Dewi Sri tumurun (Dewi Sri turun ke bumi)",
            watak: "Baik hati, pemurah, disukai banyak orang, membawa kemakmuran dan kesuburan.\nNamun kadang terlalu baik sehingga mudah dimanfaatkan.",
            nasib: "Hidup makmur, rejeki melimpah, banyak teman dan dicintai.\nCocok di bidang pertanian, perdagangan, atau sosial.",
            sengkala: "Kebaikan dimanfaatkan orang, atau kerugian karena terlalu percaya.",
            arah: "Timur Laut (menghadap ke Barat Daya)", hariSial: "Sukra Pon (hari keenam wuku ini)",
            anjuran: "Tetap berbuat baik namun juga waspada agar tidak dimanfaatkan.\nBersyukur atas segala nikmat yang diterima."
        },
        { // 27. Kulawu
            dewa: "Batara Sadana", kayu: "Tal (Siwalan)", burung: "Nuri", gedhong: "Di kanan, sederhana tapi berisi (kaya tapi tidak pamer)", senjata: "Uang Kepeng",
            candra: "Satriya sugih arta (Kesatria kaya harta)",
            watak: "Pandai mencari rejeki, hemat, kaya raya namun tidak suka pamer, dan dermawan secara diam-diam.\nNamun kadang terlalu perhitungan.",
            nasib: "Menjadi orang kaya yang disegani karena kedermawanannya yang tersembunyi. Rejeki berlimpah.",
            sengkala: "Kehilangan harta karena kurang waspada, atau masalah karena terlalu perhitungan.",
            arah: "Timur (menghadap ke Barat)", hariSial: "Saniscara Wage (hari ketujuh wuku ini)",
            anjuran: "Terus berbuat baik dan berbagi dengan sesama.\nMenjaga harta dengan baik namun tidak kikir."
        },
        { // 28. Dukut
            dewa: "Batara Sakri (versi lain: Batara Guru)", 
            kayu: "Randu Alas (Kapuk Hutan)", 
            burung: "Kutut Manggung (Perkutut bersuara)", 
            gedhong: "Di atas, menghadap ke selatan (bijaksana, suka memberi nasihat)", 
            senjata: "Kitab Suci",
            candra: "Wiku memulang ngaji (Pendeta mengajar mengaji)", 
            watak: "Bijaksana, alim, suka memberi nasihat, tenang, dan berwibawa.\nNamun kadang merasa paling benar dan kurang mau mendengar.",
            nasib: "Menjadi guru, rohaniwan, atau penasihat yang dihormati. Rejeki cukup dan hidup terhormat.",
            sengkala: "Nasihatnya tidak didengar, atau kesepian karena merasa berbeda.",
            arah: "Tenggara (menghadap ke Barat Laut)", 
            hariSial: "Radite Kliwon (hari pertama wuku ini)", 
            anjuran: "Lebih terbuka terhadap pandangan orang lain.\nTerus menyebarkan ilmu dan kebajikan."
        },
        { // 29. Watugunung
            dewa: "Batara Anantaboga & Batari Nagagini (versi lain: Batara Watugunung sendiri)", 
            kayu: "Pohon Dewadaru (Kayu Sakti)", 
            burung: "Tidak ada (atau semua jenis burung tunduk)", 
            gedhong: "Runtuh/Kosong (akhir dari siklus, penuh keprihatinan)", 
            senjata: "Semua senjata tidak mempan (atau tidak bersenjata)",
            candra: "Brahmana numbak candala (Pendeta menombak orang jahat/hina)", 
            watak: "Sering mengalami nasib buruk, hidup penuh cobaan dan keprihatinan, merasa terbuang.\nNamun memiliki potensi spiritual yang besar jika mampu melewati ujian.",
            nasib: "Wuku terakhir, dianggap sebagai wuku 'apes' atau berat. Rejeki sulit, banyak rintangan.\nPerlu kesabaran, ketabahan, dan pasrah kepada Tuhan.",
            sengkala: "Musibah besar, kecelakaan fatal, atau kematian tragis. Sengkala paling berat.",
            arah: "Selatan (menghadap ke Utara)", 
            hariSial: "Soma Legi (hari kedua wuku ini)", 
            anjuran: "Banyak melakukan ritual tolak bala, bersedekah, berpuasa, dan mendekatkan diri kepada Tuhan.\nSelalu waspada dan mawas diri. Ini adalah wuku untuk introspeksi mendalam."
        }
    ]
};

if (WukuData.DETAILS.length !== 30) {
    console.error("KRITIS: Array WukuData.DETAILS tidak memiliki 30 elemen! Panjangnya adalah:", WukuData.DETAILS.length);
}