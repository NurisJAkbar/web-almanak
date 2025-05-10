// kesimpulan.js
// const { jsPDF } = window.jspdf; // Hapus atau komentari ini

document.addEventListener('DOMContentLoaded', () => {
    const summaryDataString = localStorage.getItem('summaryData');
    let summaryData = null; 

    if (summaryDataString) {
        summaryData = JSON.parse(summaryDataString);
        console.log("Data diterima di halaman kesimpulan:", summaryData);

        document.getElementById('displayGregorianDate').textContent = summaryData.gregorian || '-';
        document.getElementById('displaySakaDate').textContent = summaryData.saka || '-';

        const pmSifatKarakterSection = document.getElementById('pmSifatKarakterSection');
        const pmSifatNamaPlaceholderEl = document.getElementById('pmSifatNamaPlaceholder');
        const pmSifatUmumEl = document.getElementById('pmSifatUmum');
        const pmKelebihanEl = document.getElementById('pmKelebihan');
        const pmKekuranganEl = document.getElementById('pmKekurangan');
        const pmSaranEl = document.getElementById('pmSaran');

        if (summaryData.pranataMangsa) {
            document.getElementById('pmSummaryNama').textContent = summaryData.pranataMangsa.nama || '-';
            document.getElementById('pmSummaryCandra').textContent = summaryData.pranataMangsa.candra || '-';
            document.getElementById('pmSummaryArti').textContent = summaryData.pranataMangsa.arti || '-';
            let pmInterp = `Mangsa ${summaryData.pranataMangsa.nama} menandakan periode alam tertentu. `;
            if (summaryData.pranataMangsa.nama.includes("Kasa")) {
                pmInterp += "Ini adalah awal musim kemarau, di mana alam mulai mengering. Cocok untuk kegiatan yang berhubungan dengan persiapan lahan atau hal yang membutuhkan cuaca kering.";
            } else if (summaryData.pranataMangsa.nama.includes("Kalima") || summaryData.pranataMangsa.nama.includes("Kanem")) {
                pmInterp += "Ini adalah puncak musim hujan, di mana alam subur dan air melimpah. Baik untuk menanam dan memulai hal baru yang membutuhkan pertumbuhan.";
            } else {
                pmInterp += "Setiap mangsa memiliki karakteristiknya sendiri yang mempengaruhi alam dan aktivitas manusia.";
            }
            document.getElementById('pmInterpretation').textContent = pmInterp;

            if (typeof InterpretasiPranataMangsa !== 'undefined' && InterpretasiPranataMangsa[summaryData.pranataMangsa.nama]) {
                const interpretasiPM = InterpretasiPranataMangsa[summaryData.pranataMangsa.nama];
                if (pmSifatNamaPlaceholderEl) pmSifatNamaPlaceholderEl.textContent = summaryData.pranataMangsa.nama;
                if (pmSifatUmumEl) pmSifatUmumEl.textContent = interpretasiPM.sifatUmum || '-';
                if (pmKelebihanEl) pmKelebihanEl.textContent = interpretasiPM.kelebihan || '-';
                if (pmKekuranganEl) pmKekuranganEl.textContent = interpretasiPM.kekurangan || '-';
                if (pmSaranEl) pmSaranEl.textContent = interpretasiPM.saran || '-';
                if (pmSifatKarakterSection) pmSifatKarakterSection.style.display = 'block';
            } else {
                if (pmSifatKarakterSection) pmSifatKarakterSection.style.display = 'none';
                console.warn(`Interpretasi untuk Pranata Mangsa "${summaryData.pranataMangsa.nama}" tidak ditemukan.`);
            }
        } else {
            document.getElementById('pranataMangsaSummary').innerHTML = "<p>Data Pranata Mangsa tidak tersedia.</p>";
            if (pmSifatKarakterSection) pmSifatKarakterSection.style.display = 'none';
        }

        const wukuKarirSection = document.getElementById('wukuKarirSection');
        const wukuKarirListEl = document.getElementById('wukuKarirList');

        if (summaryData.pawukon && summaryData.pawukon.wuku && summaryData.pawukon.wuku.details) {
            document.getElementById('wetonSummary').textContent = summaryData.pawukon.weton || '-';
            document.getElementById('neptuSummary').textContent = summaryData.pawukon.totalNeptu || '-';
            document.getElementById('wukuSummaryName').textContent = summaryData.pawukon.wuku.name || '-';
            
            const wukuPlaceholders = document.querySelectorAll('.wukuNamePlaceholder');
            wukuPlaceholders.forEach(el => el.textContent = summaryData.pawukon.wuku.name || '');

            document.getElementById('wukuWatakSummary').innerHTML = (summaryData.pawukon.wuku.details.watak || 'Tidak ada data watak.').replace(/\n/g, '<br>');
            document.getElementById('wukuNasibSummary').innerHTML = (summaryData.pawukon.wuku.details.nasib || 'Tidak ada data nasib.').replace(/\n/g, '<br>');
            document.getElementById('wukuSengkalaSummary').innerHTML = (summaryData.pawukon.wuku.details.sengkala || 'Tidak ada data sengkala.').replace(/\n/g, '<br>');
            document.getElementById('wukuAnjuranSummary').innerHTML = (summaryData.pawukon.wuku.details.anjuran || 'Tidak ada data anjuran.').replace(/\n/g, '<br>');
            document.getElementById('wukuArahSummary').textContent = summaryData.pawukon.wuku.details.arah || '-';
            document.getElementById('nogoDinoSummary').textContent = summaryData.pawukon.nogoDino || '-';

            if (wukuKarirListEl && typeof KarirWukuData !== 'undefined' && KarirWukuData[summaryData.pawukon.wuku.name]) {
                const karirList = KarirWukuData[summaryData.pawukon.wuku.name];
                wukuKarirListEl.innerHTML = '';
                if (karirList && karirList.length > 0 && karirList[0] !== 'Data karir belum tersedia.') {
                    karirList.forEach(karir => {
                        const li = document.createElement('li');
                        li.textContent = karir;
                        wukuKarirListEl.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.textContent = 'Data karir belum tersedia untuk wuku ini.';
                    wukuKarirListEl.appendChild(li);
                }
                if(wukuKarirSection) wukuKarirSection.style.display = 'block';
            } else {
                if(wukuKarirListEl) {
                     wukuKarirListEl.innerHTML = '<li>Data karir tidak ditemukan atau belum lengkap.</li>';
                }
                if(wukuKarirSection) wukuKarirSection.style.display = 'block';
                console.warn(`Data karir untuk Wuku "${summaryData.pawukon.wuku.name}" tidak ditemukan atau KarirWukuData undefined.`);
            }
        } else {
            document.getElementById('pawukonSummary').innerHTML = "<p>Data Pawukon tidak tersedia atau tidak lengkap.</p>";
            if (wukuKarirSection) wukuKarirSection.style.display = 'none';
        }
    } else {
        document.querySelector('.summary-card').innerHTML = "<h2>Data Kesimpulan Tidak Ditemukan</h2><p>Silakan kembali ke halaman utama dan lakukan konversi terlebih dahulu.</p>";
    }

    const backButton = document.getElementById('backToIndexButton');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // --- PERUBAHAN UTAMA: DOWNLOAD SEBAGAI TXT ---
    const downloadButton = document.getElementById('downloadPdfButton'); // ID tombol tetap, tapi fungsinya berubah
    if (downloadButton) {
        downloadButton.textContent = "Download Kesimpulan (TXT)"; // Ubah teks tombol
        downloadButton.addEventListener('click', () => { 
            if (!summaryData) {
                alert("Data kesimpulan tidak tersedia untuk di-download.");
                return;
            }
            downloadButton.textContent = "Membuat TXT...";
            downloadButton.disabled = true;

            let textContent = "Ringkasan Almanak Jawa\n";
            textContent += "=======================\n\n";
            textContent += `Tanggal Masehi: ${summaryData.gregorian || '-'}\n`;
            textContent += `Tanggal Saka Jawa: ${summaryData.saka || '-'}\n\n`;

            textContent += "--- Pranata Mangsa ---\n";
            if (summaryData.pranataMangsa) {
                textContent += `Mangsa: ${summaryData.pranataMangsa.nama || '-'}\n`;
                textContent += `Candra: ${summaryData.pranataMangsa.candra || '-'}\n`;
                textContent += `Artinya: ${summaryData.pranataMangsa.arti || '-'}\n`;
                
                const pmInterpElement = document.getElementById('pmInterpretation');
                if(pmInterpElement) textContent += `Interpretasi: ${pmInterpElement.textContent}\n`;

                if (typeof InterpretasiPranataMangsa !== 'undefined' && InterpretasiPranataMangsa[summaryData.pranataMangsa.nama]) {
                    const interpretasiPM = InterpretasiPranataMangsa[summaryData.pranataMangsa.nama];
                    textContent += `\nSifat & Karakter Umum Mangsa ${summaryData.pranataMangsa.nama}:\n`;
                    textContent += `  Sifat Umum: ${interpretasiPM.sifatUmum || '-'}\n`;
                    textContent += `  Kelebihan: ${interpretasiPM.kelebihan || '-'}\n`;
                    textContent += `  Kekurangan: ${interpretasiPM.kekurangan || '-'}\n`;
                    textContent += `  Saran Pengembangan Diri: ${interpretasiPM.saran || '-'}\n`;
                }
            } else {
                textContent += "Data Pranata Mangsa tidak tersedia.\n";
            }
            textContent += "\n";

            textContent += "--- Pawukon ---\n";
            if (summaryData.pawukon) {
                textContent += `Weton: ${summaryData.pawukon.weton || '-'} (Total Neptu: ${summaryData.pawukon.totalNeptu || '-'})\n`;
                textContent += `Paringkelan: ${summaryData.pawukon.paringkelan || '-'}\n`;
                textContent += `Padangon: ${summaryData.pawukon.padangon || '-'}\n`;
                textContent += `Padewan: ${summaryData.pawukon.padewan || '-'}\n`;
                textContent += `Naga Dina: Menghadap ${summaryData.pawukon.nogoDino || '-'}\n`;
                textContent += `Wuku: ${summaryData.pawukon.wuku ? summaryData.pawukon.wuku.name : '-'}\n`;

                if (summaryData.pawukon.wuku && summaryData.pawukon.wuku.details) {
                    const wDetail = summaryData.pawukon.wuku.details;
                    textContent += `\nDetail Wuku: ${summaryData.pawukon.wuku.name}\n`;
                    textContent += `  Dewa/Batara: ${wDetail.dewa || '-'}\n`;
                    textContent += `  Pohon (Kayu): ${wDetail.kayu || '-'}\n`;
                    textContent += `  Burung (Manuk): ${wDetail.burung || '-'}\n`;
                    textContent += `  Gedhong: ${wDetail.gedhong || '-'}\n`;
                    textContent += `  Senjata: ${wDetail.senjata || '-'}\n`;
                    textContent += `  Candra Wuku: ${wDetail.candra || '-'}\n`;
                    textContent += `  Watak/Sifat:\n${(wDetail.watak || '-').replace(/<br\s*\/?>/gi, "\n    ")}\n`; // Ganti <br> dengan newline dan indentasi
                    textContent += `  Keberuntungan (Nasib):\n${(wDetail.nasib || '-').replace(/<br\s*\/?>/gi, "\n    ")}\n`;
                    textContent += `  Bencana/Sengkala:\n${(wDetail.sengkala || '-').replace(/<br\s*\/?>/gi, "\n    ")}\n`;
                    textContent += `  Arah Rejeki/Keselamatan: ${wDetail.arah || '-'}\n`;
                    textContent += `  Hari Naas/Sial Wuku: ${wDetail.hariSial || '-'}\n`;
                    textContent += `  Anjuran/Pantangan:\n${(wDetail.anjuran || '-').replace(/<br\s*\/?>/gi, "\n    ")}\n`;
                }

                if (typeof KarirWukuData !== 'undefined' && KarirWukuData[summaryData.pawukon.wuku.name]) {
                    const karirList = KarirWukuData[summaryData.pawukon.wuku.name];
                    textContent += `\nContoh Bidang Karir yang Cocok untuk Wuku ${summaryData.pawukon.wuku.name}:\n`;
                    if (karirList && karirList.length > 0 && karirList[0] !== 'Data karir belum tersedia.') {
                        karirList.forEach(karir => {
                            textContent += `  - ${karir}\n`;
                        });
                    } else {
                        textContent += `  - Data karir belum tersedia untuk wuku ini.\n`;
                    }
                }
            } else {
                textContent += "Data Pawukon tidak tersedia.\n";
            }
            textContent += "\n";

            textContent += "--- Catatan Tambahan ---\n";
            textContent += "Interpretasi ini bersifat umum berdasarkan tradisi primbon Jawa. Kebijaksanaan dan usaha pribadi tetap menjadi faktor utama dalam menjalani kehidupan. Gunakan informasi ini sebagai panduan reflektif, bukan sebagai patokan mutlak.\n";

            try {
                const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                
                // Buat nama file yang dinamis berdasarkan tanggal
                const dateForFilename = summaryData.gregorian.replace(/-/g, '') || 'tanggal_tidak_diketahui';
                link.download = `Ringkasan_Almanak_Jawa_${dateForFilename}.txt`;
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href); // Bebaskan memori

                console.log("File TXT berhasil dibuat dan di-download.");

            } catch (err) {
                console.error("Error saat membuat atau men-download file TXT:", err);
                alert("Gagal membuat file TXT. Cek console untuk detail.");
            } finally {
                downloadButton.textContent = "Download Kesimpulan (TXT)";
                downloadButton.disabled = false;
            }
        });
    }
});