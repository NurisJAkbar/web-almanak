// karir_wuku.js
// Pastikan wuku.js (yang mendefinisikan WukuData) sudah dimuat sebelum file ini.

const KarirWukuData = {};

// Periksa apakah WukuData dan WukuData.NAMES sudah ada
if (typeof WukuData !== 'undefined' && WukuData.NAMES && Array.isArray(WukuData.NAMES)) {

    KarirWukuData[WukuData.NAMES[0]] = [ // Sinta
        "Pedagang barang mewah", "Seniman panggung", "Humas/Public Relations", "Event Organizer",
        "Diplomat", "Pekerja sosial (fokus pada bantuan langsung)", "Entertainer",
        "Desainer interior", "Konsultan fashion", "Manajer restoran/hotel"
    ];
    KarirWukuData[WukuData.NAMES[1]] = [ // Landep
        "Pemimpin (politik, perusahaan)", "Penasihat strategis", "Analis data", "Peneliti",
        "Insinyur", "Arsitek", "Ahli hukum/Pengacara", "Detektif/Investigator",
        "Pengembang software", "Dosen/Guru (bidang eksak)"
    ];
    KarirWukuData[WukuData.NAMES[2]] = [ // Wukir
        "Petani/Ahli agrikultur", "Pegawai negeri (administrasi)", "Arsiparis/Pustakawan",
        "Peneliti (bidang sejarah/budaya)", "Pengrajin tangan", "Tukang kayu/Konstruksi bangunan",
        "Konservator alam", "Penjaga hutan", "Geolog", "Staf pendukung teknis"
    ];
    KarirWukuData[WukuData.NAMES[3]] = [ // Kurantil
        "Akuntan/Auditor", "Analis keuangan", "Bendahara", "Staf administrasi (keuangan)",
        "Penilai risiko", "Quality Control", "Pengelola investasi (hati-hati)", "Perencana anggaran",
        "Petugas pajak", "Wirausaha (dengan perencanaan matang)"
    ];
    KarirWukuData[WukuData.NAMES[4]] = [ // Tolu
        "Wartawan/Reporter", "Marketing/Sales", "Pemandu wisata", "Agen perjalanan",
        "Sopir/Pilot/Nahkoda", "Logistik/Distributor", "Kurir/Ekspedisi",
        "Network Engineer", "Penerjemah/Interpreter", "Atlet (olahraga perjalanan/tim)"
    ];
    KarirWukuData[WukuData.NAMES[5]] = [ // Gumbreg
        "Seniman (lukis, musik, tari)", "Desainer grafis", "Pekerja sosial (konseling, perawatan)",
        "Perawat/Tenaga medis pendukung", "Guru TK/SD", "Dekorator", "Florist",
        "Chef/Pâtissier", "Konsultan kecantikan", "Mediator/Juru damai"
    ];
    KarirWukuData[WukuData.NAMES[6]] = [ // Warigalit
        "Aktor/Aktris", "Model", "Penyanyi", "Musisi (instrumen romantis)",
        "Penulis (novel romantis, puisi)", "Relationship Counselor", "Wedding Planner",
        "Pekerja di industri hiburan/malam", "Bartender/Mixologist", "Influencer (lifestyle, beauty)"
    ];
    KarirWukuData[WukuData.NAMES[7]] = [ // Warigagung
        "Guru Besar/Profesor", "Ilmuwan senior", "Hakim/Jaksa", "Rohaniwan tingkat tinggi",
        "Penulis buku referensi/ilmiah", "Pustakawan ahli", "Arsiparis negara",
        "Kurator museum", "Filsuf", "Penasihat spiritual"
    ];
    KarirWukuData[WukuData.NAMES[8]] = [ // Julungwangi
        "Pengacara/Advokat (suka berdebat)", "Atlet bela diri/Petarung", "Militer/Polisi (bidang operasional)",
        "Debater profesional", "Negosiator ulung", "Manajer proyek (tegas)",
        "Pemimpin serikat pekerja", "Pengusaha (suka tantangan)", "Bodyguard", "Jurnalis investigasi (berani)"
    ];
    KarirWukuData[WukuData.NAMES[9]] = [ // Sungsang
        "Pekerja di bidang pemulihan (rehabilitasi)", "Konselor krisis", "Motivator (setelah melewati kesulitan)",
        "Peneliti ketahanan (resilience)", "Pekerja sosial (daerah terpencil/sulit)", "Seniman (mengungkapkan penderitaan/harapan)",
        "Pengembang teknologi adaptif", "Petugas SAR", "Relawan bencana alam", "Rohaniwan (memberi penghiburan)"
    ];
    KarirWukuData[WukuData.NAMES[10]] = [ // Galungan
        "Seniman ternama (lukis, patung, musik)", "Desainer fashion kelas atas", "Arsitek (proyek prestisius)",
        "Public Figure/Selebriti", "Diplomat senior", "Pemimpin perusahaan besar (CEO)",
        "Kolektor barang seni/antik", "Sutradara film/teater", "Event Organizer (acara mewah)", "Konsultan branding (merek mewah)"
    ];
    KarirWukuData[WukuData.NAMES[11]] = [ // Kuningan
        "Pemimpin negara/Daerah", "Jenderal militer", "Direktur utama BUMN/Korporasi besar",
        "Hakim agung", "Rektor universitas", "Ketua organisasi besar (nasional/internasional)",
        "Filantropis/Pendiri yayasan besar", "Negarawan", "Tokoh masyarakat yang disegani", "Pelindung/Konservator cagar budaya"
    ];
    KarirWukuData[WukuData.NAMES[12]] = [ // Langkir (BARU DILENGKAPI)
        "Petugas keamanan/Penjaga", "Pekerja konstruksi (kasar)", "Atlet (kekuatan fisik)", "Pemadam kebakaran",
        "Tukang las/Pandai besi", "Mekanik alat berat", "Petugas penertiban",
        "Pengusaha barang bekas/daur ulang", "Jagal/Pekerja rumah potong hewan", "Pekerja tambang"
    ];
    KarirWukuData[WukuData.NAMES[13]] = [ // Mandasiya (BARU DILENGKAPI)
        "Pedagang/Wirausahawan (ulet)", "Pengrajin (tekun)", "Akuntan/Auditor (teliti)", "Manajer Keuangan",
        "Petani/Peternak (sabar)", "Programmer/Developer (fokus)", "Analis pasar",
        "Surveyor", "Peneliti (membutuhkan ketekunan)", "Chef (membutuhkan presisi)"
    ];
    KarirWukuData[WukuData.NAMES[14]] = [ // Julungpujut (BARU DILENGKAPI)
        "Penulis/Penyair", "Guru Bahasa/Sastra", "Seniman (lukis, musik halus)", "Desainer (grafis, mode halus)",
        "Pustakawan/Arsiparis", "Penerjemah", "Peneliti (humaniora)", "Editor buku/naskah",
        "Konselor/Terapis (pendekatan lembut)", "Pekerja sosial (pendampingan)"
    ];
    KarirWukuData[WukuData.NAMES[15]] = [ // Pahang (BARU DILENGKAPI)
        "Manajer Konstruksi", "Insinyur Sipil", "Pemimpin Proyek (skala besar)", "Atlet (daya tahan)",
        "Petani/Pengusaha Agribisnis (skala besar)", "Militer (strategi pertahanan)", "Pengusaha properti",
        "Pembuat kebijakan (infrastruktur)", "Arsitek (struktur kuat)", "Pengawas lapangan"
    ];
    KarirWukuData[WukuData.NAMES[16]] = [ // Kuruwelut (BARU DILENGKAPI)
        "Humas/Public Relations (ramah)", "Marketing/Sales (persuasif)", "Customer Service Representative",
        "Host/Pembawa Acara", "Event Organizer (sosial)", "Pekerja di industri pariwisata/hotel",
        "Politisi (pandai bergaul)", "Networker profesional", "Agen Asuransi/Properti", "Entertainer/Komedian"
    ];
    KarirWukuData[WukuData.NAMES[17]] = [ // Marakeh (BARU DILENGKAPI)
        "Motivator/Pembicara Publik", "Pemimpin Organisasi/Perusahaan (visioner)", "Jurnalis/Reporter (bersemangat)",
        "Atlet (berenergi tinggi)", "Pengusaha (inovatif)", "Pelatih Olahraga/Kebugaran",
        "Agen Perubahan Sosial", "Peneliti (penemuan baru)", "Guru/Dosen (inspiratif)", "Sales Executive"
    ];
    KarirWukuData[WukuData.NAMES[18]] = [ // Tambir (BARU DILENGKAPI)
        "Detektif/Investigator (misterius)", "Psikolog/Psikiater (memahami kedalaman jiwa)", "Peneliti (bidang gaib/spiritual)",
        "Penulis cerita misteri/horor", "Seniman (karya simbolik/abstrak)", "Ahli Forensik",
        "Agen Intelijen", "Terapis Alternatif/Holistik", "Arkeolog (situs kuno)", "Konsultan Keamanan (siber)"
    ];
    KarirWukuData[WukuData.NAMES[19]] = [ // Madangkungan (BARU DILENGKAPI)
        "Perencana Kota/Wilayah", "Penasihat Kebijakan Publik", "Futurolog/Trend Analyst", "Guru/Dosen (filsafat, etika)",
        "Penulis (non-fiksi, ilmiah populer)", "Arsitek (desain berkelanjutan)", "Konsultan Manajemen Strategis",
        "Peneliti (jangka panjang)", "Diplomat (visi global)", "Pengembang Kurikulum Pendidikan"
    ];
    KarirWukuData[WukuData.NAMES[20]] = [ // Maktal (BARU DILENGKAPI)
        "Administrator/Staf Tata Usaha (rapi)", "Quality Assurance/Control (teliti)", "Auditor Internal/Eksternal",
        "Manajer Operasional (efisien)", "Perpustakawan/Arsiparis (terstruktur)", "Programmer (kode bersih)",
        "Ahli Statistik", "Petugas Pajak/Bea Cukai", "Pengelola Gudang/Logistik (presisi)", "Sekretaris Eksekutif"
    ];
    KarirWukuData[WukuData.NAMES[21]] = [ // Wuye (BARU DILENGKAPI)
        "Pengusaha/Investor (pandai cari uang)", "Manajer Keuangan/Akuntan (hemat)", "Bankir/Analis Kredit",
        "Kolektor Barang Antik/Bernilai", "Pengelola Aset", "Pedagang Emas/Valas",
        "Notaris/PPAT (terkait harta)", "Konsultan Pajak/Keuangan Pribadi", "Wirausaha (fokus profit)", "Makelar/Broker Properti"
    ];
    KarirWukuData[WukuData.NAMES[22]] = [ // Manahil (BARU DILENGKAPI)
        "Seniman (lukis, musik, patung)", "Desainer (grafis, interior, fashion)", "Penulis Kreatif (fiksi, puisi)",
        "Arsitek (estetika tinggi)", "Aktor/Aktris/Model", "Fotografer/Videografer Artistik",
        "Chef (presentasi menarik)", "Kurator Seni", "Pekerja di industri kreatif", "Pengembang Game (aspek visual)"
    ];
    KarirWukuData[WukuData.NAMES[23]] = [ // Prangbakat (BARU DILENGKAPI)
        "Militer/Perwira Tinggi", "Atlet Profesional (kompetitif)", "Pengacara Litigasi (pejuang di pengadilan)",
        "Pemimpin Tim Olahraga/Ekspedisi", "Manajer Proyek (tantangan tinggi)", "Pengusaha (suka persaingan)",
        "Strategi Keamanan/Pertahanan", "Petugas Penegak Hukum (lapangan)", "Jurnalis Perang/Investigasi", "Pemimpin Oposisi Politik"
    ];
    KarirWukuData[WukuData.NAMES[24]] = [ // Bala (BARU DILENGKAPI)
        "Terapis/Penyembuh Alternatif (energi)", "Peneliti Paranormal", "Mediator Konflik (jika energi diarahkan positif)",
        "Ahli Keamanan/Pengawal Pribadi (jika melindungi)", "Seniman (karya kuat/gelap)", "Pekerja di bidang forensik (sisi gelap kehidupan)",
        "Penulis genre horor/thriller psikologis", "Psikolog (memahami sisi gelap manusia)", "Petugas Pemadam Kebakaran (melawan bahaya)", "Pengusir Hama/Binatang Buas"
    ];
    KarirWukuData[WukuData.NAMES[25]] = [ // Wugu (BARU DILENGKAPI)
        "Ahli Strategi Bisnis/Politik", "Konsultan Manajemen", "Agen Intelijen/Mata-mata", "Negosiator/Diplomat (licin)",
        "Pemain Catur/Game Strategi Profesional", "Penulis Skenario (plot twist)", "Sutradara Film (cerita kompleks)",
        "Pesulap/Ilusionis", "Perencana Keuangan (strategi investasi)", "Detektif Swasta"
    ];
    KarirWukuData[WukuData.NAMES[26]] = [ // Wayang (BARU DILENGKAPI)
        "Petani/Pengusaha Agribisnis (subur)", "Pedagang (barang kebutuhan pokok)", "Pekerja Sosial/Relawan (pemurah)",
        "Guru/Pengajar (disukai)", "Pemimpin Komunitas Lokal", "Chef/Pemilik Restoran (ramai)",
        "Seniman (karya yang menyenangkan)", "Pekerja di bidang perhotelan/pariwisata (pelayanan baik)", "Tabib/Herbalis", "Pengelola Koperasi"
    ];
    KarirWukuData[WukuData.NAMES[27]] = [ // Kulawu (BARU DILENGKAPI)
        "Investor/Pengusaha Sukses (tidak pamer)", "Bendahara/Manajer Keuangan (pandai menyimpan)", "Bankir (divisi investasi)",
        "Kolektor (barang berharga, disimpan)", "Filantropis (diam-diam)", "Konsultan Keuangan Pribadi (fokus menabung)",
        "Notaris (mengurus aset)", "Pengelola Dana Pensiun/Investasi", "Pemilik Toko Emas/Barang Berharga", "Akuntan Senior"
    ];
    KarirWukuData[WukuData.NAMES[28]] = [ // Dukut
        "Guru/Dosen (khususnya agama/filsafat)", "Rohaniwan/Pendeta/Ulama", "Peneliti spiritual",
        "Penulis buku motivasi/spiritual", "Konselor spiritual", "Pustakawan (koleksi langka)",
        "Arkeolog (fokus pada artefak religius)", "Sejarawan (pemikiran/agama)", "Penerbit buku keagamaan", "Pembicara publik (tema kebijaksanaan)"
    ];
    KarirWukuData[WukuData.NAMES[29]] = [ // Watugunung
        "Pekerja sosial di daerah bencana", "Relawan kemanusiaan", "Terapis (deep trauma)",
        "Peneliti fenomena alam/sosial ekstrem", "Filosofer", "Penulis (tema eksistensial)",
        "Bhikkhu/Pertapa", "Perawat paliatif", "Penggali kubur (simbolis akhir siklus)", "Pekerja di tempat ziarah/keramat"
    ];

    // Validasi kelengkapan
    let count = 0;
    WukuData.NAMES.forEach(namaWuku => {
        if (KarirWukuData[namaWuku] && KarirWukuData[namaWuku].length >= 1) {
            count++;
        } else {
            console.warn(`KarirWukuData: Data karir untuk wuku "${namaWuku}" belum diisi atau kosong.`);
            if (!KarirWukuData[namaWuku]) KarirWukuData[namaWuku] = ['Data karir belum tersedia.'];
        }
    });

    if (count !== 30) {
        console.warn(`PERHATIAN: KarirWukuData belum lengkap untuk 30 wuku. Saat ini terisi: ${count} dari 30 wuku.`);
    } else {
        console.log("KarirWukuData: Semua data karir wuku telah terisi (minimal 1 per wuku).");
    }

} else {
    console.error("KarirWukuData: WukuData atau WukuData.NAMES tidak ditemukan. Pastikan wuku.js dimuat terlebih dahulu.");
}