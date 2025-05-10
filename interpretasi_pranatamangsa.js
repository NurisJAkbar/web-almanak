// interpretasi_pranatamangsa.js
// Pastikan pranata_mangsa.js (yang mendefinisikan PranataMangsaData) sudah dimuat sebelum file ini.

const InterpretasiPranataMangsa = {};

// Periksa apakah PranataMangsaData dan PranataMangsaData.DETAIL sudah ada
if (typeof PranataMangsaData !== 'undefined' && PranataMangsaData.DETAIL && Array.isArray(PranataMangsaData.DETAIL)) {

    // Contoh pengisian (ANDA HARUS MELENGKAPI SEMUA MANGSA!)
    // Gunakan PranataMangsaData.DETAIL[index].name sebagai kunci

    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[0].name] = { // Kasa (I)
        sifatUmum: "Cenderung praktis, pekerja keras, dan fokus pada hasil. Kadang bisa terlihat sedikit kaku atau kurang ekspresif karena energi terkuras untuk bertahan di musim kering. Memiliki daya tahan yang baik.",
        kelebihan: "Ulet, tabah, mandiri, pandai mengatur sumber daya yang terbatas.",
        kekurangan: "Kurang sabar jika hasil tidak cepat terlihat, bisa jadi terlalu hemat, kadang pesimis.",
        saran: "Belajar menikmati proses, luangkan waktu untuk relaksasi dan bersosialisasi, hargai hal-hal kecil."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[1].name] = { // Karo (II)
        sifatUmum: "Memiliki semangat yang kuat meski dalam kondisi sulit. Cenderung introspektif dan mencari solusi dari dalam. Bisa menjadi agak tertutup atau sulit ditebak.",
        kelebihan: "Kreatif dalam mencari solusi, kuat mental, tidak mudah menyerah, reflektif.",
        kekurangan: "Kadang terlalu keras pada diri sendiri, sulit meminta bantuan, rentan stres jika tekanan berlebih.",
        saran: "Berbagi beban dengan orang terpercaya, jangan ragu meminta bantuan, jaga keseimbangan kerja dan istirahat."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[2].name] = { // Katelu (III)
        sifatUmum: "Penuh harapan baru dan optimisme. Suka belajar hal baru dan mudah beradaptasi. Cenderung ramah dan mudah bergaul.",
        kelebihan: "Adaptif, optimis, antusias, pembelajar cepat, sosial.",
        kekurangan: "Kadang kurang fokus karena banyak minat, mudah terpengaruh, bisa naif.",
        saran: "Tetapkan prioritas, belajar konsisten, jangan mudah percaya pada hal yang terlalu bagus untuk jadi kenyataan."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[3].name] = { // Kapat (IV)
        sifatUmum: "Mulai merasakan kelegaan dan harapan. Cenderung lebih tenang dan stabil. Mulai merencanakan masa depan dengan optimisme yang terkendali. Memiliki kepekaan emosional.",
        kelebihan: "Penuh perhitungan, stabil emosi, visioner, memiliki empati.",
        kekurangan: "Kadang terlalu berhati-hati hingga lambat bertindak, bisa terlalu perasa.",
        saran: "Percaya pada intuisi, jangan takut mengambil langkah pertama, kelola emosi dengan baik."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[4].name] = { // Kalima (V)
        sifatUmum: "Bersemangat tinggi dan penuh energi. Suka memulai hal baru dan berani mengambil risiko. Cenderung ekspresif dan dinamis.",
        kelebihan: "Antusias, energik, pemberani, inovatif, pandai memanfaatkan peluang.",
        kekurangan: "Kadang terburu-buru, kurang sabar, bisa boros energi atau sumber daya.",
        saran: "Buat perencanaan sebelum bertindak, belajar sabar menunggu hasil, kelola energi dengan bijak."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[5].name] = { // Kanem (VI)
        sifatUmum: "Menikmati hasil kerja keras dan cenderung lebih santai. Suka berbagi dan murah hati. Memiliki aura positif dan menarik.",
        kelebihan: "Murah hati, optimis, menikmati hidup, pandai bersyukur, menarik simpati.",
        kekurangan: "Bisa terlena dengan kenyamanan, kurang waspada, kadang terlalu santai hingga menunda pekerjaan.",
        saran: "Tetap jaga produktivitas, jangan lupakan tujuan jangka panjang, waspada terhadap orang yang memanfaatkan kebaikan."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[6].name] = { // Kapitu (VII)
        sifatUmum: "Lebih waspada dan hati-hati. Cenderung introspektif dan memikirkan strategi untuk menghadapi tantangan. Bisa menjadi lebih sensitif atau mudah khawatir.",
        kelebihan: "Analitis, strategis, waspada, pandai mengantisipasi masalah, berhati-hati.",
        kekurangan: "Mudah cemas, kadang pesimis, bisa terlalu curiga, kurang spontan.",
        saran: "Fokus pada solusi bukan masalah, latih pikiran positif, jangan biarkan kekhawatiran menguasai."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[7].name] = { // Kawolu (VIII)
        sifatUmum: "Dorongan untuk berkembang biak atau menciptakan sesuatu yang baru (ide, karya). Penuh gairah dan insting yang kuat. Kadang bisa impulsif.",
        kelebihan: "Kreatif, penuh gairah, produktif, intuitif (insting kuat), berani berekspresi.",
        kekurangan: "Impulsif, mudah terbawa emosi (terutama dalam hubungan), bisa kurang perhitungan.",
        saran: "Salurkan gairah ke hal produktif, pertimbangkan konsekuensi sebelum bertindak, jaga keseimbangan emosi."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[8].name] = { // Kasanga (IX)
        sifatUmum: "Fokus pada pengembangan dan nurturing. Sabar dan penuh perhatian terhadap apa yang sedang 'dibesarkan' (anak, proyek, ide). Cenderung protektif.",
        kelebihan: "Penyayang, sabar, telaten, protektif, bertanggung jawab.",
        kekurangan: "Bisa terlalu khawatir, posesif, kadang lambat dalam mengambil keputusan besar karena terlalu mempertimbangkan.",
        saran: "Berikan kepercayaan, jangan terlalu mengontrol, belajar melepaskan hal yang di luar kendali."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[9].name] = { // Kasepuluh (X)
        sifatUmum: "Mendorong kemandirian dan pelepasan. Waktunya untuk membiarkan 'anak' atau 'karya' berkembang sendiri. Cenderung reflektif dan bijaksana.",
        kelebihan: "Bijaksana, suportif dari jauh, mendorong kemandirian, pemaaf, legawa.",
        kekurangan: "Bisa merasa kesepian atau kehilangan peran, kadang sulit melepaskan sepenuhnya.",
        saran: "Cari peran baru yang bermakna, bangga dengan hasil yang telah dicapai, fokus pada pengembangan diri sendiri."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[10].name] = { // Desta (XI)
        sifatUmum: "Periode persiapan dan pembangunan 'sarang' untuk masa depan. Fokus pada stabilitas dan keamanan jangka panjang. Cenderung pekerja keras dan detail.",
        kelebihan: "Perencana yang baik, pekerja keras, teliti, fokus pada detail, bertanggung jawab terhadap keluarga/komunitas.",
        kekurangan: "Bisa kaku, kurang fleksibel, terlalu khawatir tentang masa depan, kadang mengorbankan kesenangan saat ini.",
        saran: "Nikmati juga prosesnya, jangan terlalu kaku dengan rencana, luangkan waktu untuk bersantai dan rekreasi."
    };
    InterpretasiPranataMangsa[PranataMangsaData.DETAIL[11].name] = { // Saddha (XII)
        sifatUmum: "Cenderung tenang, bijaksana, dan suka merenung. Menikmati kesendirian untuk refleksi. Memiliki intuisi yang kuat dan persiapan matang untuk masa depan.",
        kelebihan: "Intuitif, bijaksana, perencana yang baik, tenang, stabil emosi.",
        kekurangan: "Bisa terlihat dingin atau menjaga jarak, kurang spontan, kadang terlalu banyak berpikir.",
        saran: "Cobalah lebih terbuka secara emosional, nikmati momen saat ini, jangan takut mengambil risiko kecil sesekali."
    };

    // Validasi kelengkapan
    let countPM = 0;
    PranataMangsaData.DETAIL.forEach(mangsa => {
        if (InterpretasiPranataMangsa[mangsa.name] && InterpretasiPranataMangsa[mangsa.name].sifatUmum) {
            countPM++;
        } else {
            console.warn(`InterpretasiPranataMangsa: Data untuk mangsa "${mangsa.name}" belum diisi atau tidak lengkap.`);
            // Inisialisasi dengan objek kosong jika belum ada untuk menghindari error di kesimpulan.js
            if (!InterpretasiPranataMangsa[mangsa.name]) {
                 InterpretasiPranataMangsa[mangsa.name] = {sifatUmum: "Data belum tersedia.", kelebihan:"-", kekurangan:"-", saran:"-"};
            }
        }
    });

    if (countPM !== PranataMangsaData.DETAIL.length) {
        console.warn(`PERHATIAN: InterpretasiPranataMangsa belum lengkap untuk semua mangsa. Saat ini terisi: ${countPM} dari ${PranataMangsaData.DETAIL.length}.`);
    } else {
        console.log("InterpretasiPranataMangsa: Semua data interpretasi mangsa telah terisi.");
    }

} else {
    console.error("InterpretasiPranataMangsa: PranataMangsaData atau PranataMangsaData.DETAIL tidak ditemukan. Pastikan pranata_mangsa.js dimuat terlebih dahulu.");
}