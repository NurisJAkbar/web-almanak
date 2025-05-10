// script.js (Main Orchestrator)
// Dependencies:
// - TanggalData, PranataMangsaData, WukuData (akan tersedia global dari file masing-masing)
// - isGregorianLeap, getJulianDayNumber (akan tersedia global dari tanggal.js)
// - convertToSakaJawa, getPranataMangsaInfo, getPawukonInfo (akan tersedia global dari konversi.js)

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMEN DOM ---
    const gregorianDateInput = document.getElementById('gregorianDate');
    const convertButton = document.getElementById('convertButton');
    const summarizeButton = document.getElementById('summarizeButton'); 

    // Saka Jawa Murni
    const resultSakaJawaEl = document.querySelector('#resultSakaJawa .date-output');
    // Pranata Mangsa
    const pmNamaEl = document.getElementById('pmNama');
    const pmMulaiEl = document.getElementById('pmMulai');
    const pmDurasiEl = document.getElementById('pmDurasi');
    const pmCandraEl = document.getElementById('pmCandra');
    const pmArtiCandraEl = document.getElementById('pmArtiCandra');
    // Pawukon Summary
    const pwDinaEl = document.getElementById('pwDina');
    const pwDinaNeptuEl = document.getElementById('pwDinaNeptu');
    const pwPasaranEl = document.getElementById('pwPasaran');
    const pwPasaranNeptuEl = document.getElementById('pwPasaranNeptu');
    const pwWetonEl = document.getElementById('pwWeton');
    const pwWetonNeptuEl = document.getElementById('pwWetonNeptu');
    const pwParingkelanEl = document.getElementById('pwParingkelan');
    const pwPadangonEl = document.getElementById('pwPadangon');
    const pwPadewanEl = document.getElementById('pwPadewan');
    const pwNogoDinoEl = document.getElementById('pwNogoDino');
    const pwWukuNameMainEl = document.getElementById('pwWukuName');
    // Wuku Detail
    const wukuDetailSectionEl = document.getElementById('wukuDetailSection');
    const wukuDetailNameEl = document.getElementById('wukuDetailName');
    const wukuDewaEl = document.getElementById('wukuDewa');
    const wukuPohonEl = document.getElementById('wukuPohon');
    const wukuBurungEl = document.getElementById('wukuBurung');
    const wukuGedhongEl = document.getElementById('wukuGedhong');
    const wukuSenjataEl = document.getElementById('wukuSenjata');
    const wukuCandraEl = document.getElementById('wukuCandra');
    const wukuWatakEl = document.getElementById('wukuWatak');
    const wukuNasibEl = document.getElementById('wukuNasib');
    const wukuSengkalaEl = document.getElementById('wukuSengkala');
    const wukuArahEl = document.getElementById('wukuArah');
    const wukuHariSialEl = document.getElementById('wukuHariSial');
    const wukuAnjuranEl = document.getElementById('wukuAnjuran');

    let currentConversionData = null; 

    // --- SET DEFAULT DATE ---
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    if (gregorianDateInput) {
        gregorianDateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // --- MAIN CONVERSION ORCHESTRATION ---
    function convertAll(gregorianDateStr) {
        console.log("convertAll called with date:", gregorianDateStr);
        currentConversionData = null; 
        if (summarizeButton) summarizeButton.style.display = 'none';

        if (!gregorianDateStr) {
            clearAllOutputs();
            console.log("No date string provided to convertAll.");
            return;
        }
        
        const dateParts = gregorianDateStr.split('-');
        if (dateParts.length !== 3) {
            clearAllOutputs();
            console.error("Invalid date format:", gregorianDateStr);
            return;
        }
        const gYear = parseInt(dateParts[0]);
        const gMonth = parseInt(dateParts[1]); 
        const gDay = parseInt(dateParts[2]);   

        if (isNaN(gYear) || isNaN(gMonth) || isNaN(gDay) || gMonth < 1 || gMonth > 12 || gDay < 1 || gDay > 31) {
            clearAllOutputs();
            console.error("Invalid date components (NaN or out of range):", gYear, gMonth, gDay);
            return;
        }
        const gregorianDate = new Date(gYear, gMonth - 1, gDay); // Ini adalah objek Date Masehi
        if (gregorianDate.getFullYear() !== gYear || gregorianDate.getMonth() !== gMonth - 1 || gregorianDate.getDate() !== gDay) {
            clearAllOutputs();
            console.error("Invalid date (e.g., Feb 30):", gregorianDateStr);
            return;
        }
        console.log("Parsed Gregorian Date:", gregorianDate);

        let displayData = {
            gregorian: `${gDay}-${gMonth}-${gYear}`,
            saka: null,
            pranataMangsa: null,
            pawukon: null
        };

        // 1. Saka Jawa Murni (using function from konversi.js)
        try {
            const sakaData = convertToSakaJawa(gYear, gMonth, gDay, gregorianDate);
            console.log("Saka Data:", sakaData);
            if (sakaData && resultSakaJawaEl) {
                const sakaString = `${sakaData.day} ${sakaData.monthJawa} (${sakaData.mangsaAssociated}) ${sakaData.year} Śaka`;
                resultSakaJawaEl.textContent = sakaString;
                displayData.saka = sakaString;
            } else if (resultSakaJawaEl) { 
                resultSakaJawaEl.textContent = "Error Konversi Saka";
                console.error("convertToSakaJawa returned null or undefined.");
            }
        } catch (e) {
            console.error("Error in convertToSakaJawa or display:", e);
            if (resultSakaJawaEl) resultSakaJawaEl.textContent = "Error";
        }

        // 2. Pranata Mangsa (using function from konversi.js)
        try {
            const pranataMangsa = getPranataMangsaInfo(gYear, gMonth, gDay, gregorianDate);
            console.log("Pranata Mangsa Data:", pranataMangsa);
            if (pranataMangsa && pranataMangsa.name && pmNamaEl) {
                pmNamaEl.textContent = pranataMangsa.name;
                
                let mangsaStartDate = new Date(gYear, pranataMangsa.startMonth, pranataMangsa.startDay);
                if (pranataMangsa.originalIndex === 0 && ( (gMonth -1) < pranataMangsa.startMonth || ((gMonth -1) === pranataMangsa.startMonth && gDay < pranataMangsa.startDay) ) ) {
                    mangsaStartDate.setFullYear(gYear - 1);
                } 
                else if (pranataMangsa.originalIndex > 0 && pranataMangsa.startMonth > (gMonth -1) && pranataMangsa.startMonth >= 5 && (gMonth-1) < 5) {
                     mangsaStartDate.setFullYear(gYear -1);
                }

                if(pmMulaiEl) pmMulaiEl.textContent = `${mangsaStartDate.getDate()} ${mangsaStartDate.toLocaleString('id-ID', { month: 'long' })} ${mangsaStartDate.getFullYear()}`;
                if(pmDurasiEl) pmDurasiEl.textContent = pranataMangsa.duration;
                if(pmCandraEl) pmCandraEl.textContent = pranataMangsa.candra;
                if(pmArtiCandraEl) pmArtiCandraEl.textContent = pranataMangsa.arti;
                displayData.pranataMangsa = {
                    nama: pranataMangsa.name,
                    candra: pranataMangsa.candra,
                    arti: pranataMangsa.arti
                    // Jika perlu, tambahkan tanggal mulai yang sudah diformat ke displayData
                };
            } else { 
                clearPranataMangsaOutput();
                console.error("getPranataMangsaInfo returned null, undefined, or malformed data, or DOM elements missing.");
            }
        } catch (e) {
            console.error("Error in getPranataMangsaInfo or display:", e);
            clearPranataMangsaOutput();
        }

        // 3. Pawukon (using function from konversi.js)
        try {
            const pawukon = getPawukonInfo(gYear, gMonth, gDay, gregorianDate);
            console.log("convertAll - HASIL DARI getPawukonInfo:", JSON.stringify(pawukon, null, 2));

            if (pawukon && pawukon.saptawara && pawukon.pancawara && pawukon.wuku) {
                console.log("convertAll - Ringkasan Pawukon akan ditampilkan.");
                
                const masehiDayIndex = gregorianDate.getDay(); // 0 (Minggu) - 6 (Sabtu)
                const masehiDayName = TanggalData.MASEHI_DAY_NAMES_ID[masehiDayIndex];
                const saptawaraFullName = `${pawukon.saptawara.name} (${masehiDayName})`;
                const wetonFullName = `${saptawaraFullName} ${pawukon.pancawara.name}`;

                if(pwDinaEl) pwDinaEl.textContent = saptawaraFullName; else console.warn("pwDinaEl not found");
                if(pwDinaNeptuEl) pwDinaNeptuEl.textContent = pawukon.saptawara.neptu; else console.warn("pwDinaNeptuEl not found");
                if(pwPasaranEl) pwPasaranEl.textContent = pawukon.pancawara.name; else console.warn("pwPasaranEl not found");
                if(pwPasaranNeptuEl) pwPasaranNeptuEl.textContent = pawukon.pancawara.neptu; else console.warn("pwPasaranNeptuEl not found");
                if(pwWetonEl) pwWetonEl.textContent = wetonFullName; else console.warn("pwWetonEl not found");
                if(pwWetonNeptuEl) pwWetonNeptuEl.textContent = pawukon.totalNeptu; else console.warn("pwWetonNeptuEl not found");
                if(pwParingkelanEl) pwParingkelanEl.textContent = pawukon.paringkelan; else console.warn("pwParingkelanEl not found");
                if(pwPadangonEl) pwPadangonEl.textContent = pawukon.padangon; else console.warn("pwPadangonEl not found");
                if(pwPadewanEl) pwPadewanEl.textContent = pawukon.padewan; else console.warn("pwPadewanEl not found");
                if(pwNogoDinoEl) pwNogoDinoEl.textContent = pawukon.nogoDino; else console.warn("pwNogoDinoEl not found");
                if(pwWukuNameMainEl) pwWukuNameMainEl.textContent = pawukon.wuku.name; else console.warn("pwWukuNameMainEl not found");

                displayData.pawukon = {
                    dina: saptawaraFullName, // Sudah termasuk nama hari Masehi
                    neptuDina: pawukon.saptawara.neptu,
                    pasaran: pawukon.pancawara.name,
                    neptuPasaran: pawukon.pancawara.neptu,
                    weton: wetonFullName, // Sudah termasuk nama hari Masehi
                    totalNeptu: pawukon.totalNeptu,
                    paringkelan: pawukon.paringkelan,
                    padangon: pawukon.padangon,
                    padewan: pawukon.padewan,
                    nogoDino: pawukon.nogoDino,
                    wuku: pawukon.wuku 
                };

                if (pawukon.wuku.details) {
                    console.log("convertAll - Detail Wuku akan ditampilkan. Data wuku.details:", JSON.stringify(pawukon.wuku.details, null, 2));
                    
                    if(wukuDetailNameEl) wukuDetailNameEl.textContent = pawukon.wuku.name; else console.warn("wukuDetailNameEl not found");
                    if(wukuDewaEl) wukuDewaEl.textContent = pawukon.wuku.details.dewa || "-"; else console.warn("wukuDewaEl not found");
                    if(wukuPohonEl) wukuPohonEl.textContent = pawukon.wuku.details.kayu || "-"; else console.warn("wukuPohonEl not found");
                    if(wukuBurungEl) wukuBurungEl.textContent = pawukon.wuku.details.burung || "-"; else console.warn("wukuBurungEl not found");
                    if(wukuGedhongEl) wukuGedhongEl.textContent = pawukon.wuku.details.gedhong || "-"; else console.warn("wukuGedhongEl not found");
                    if(wukuSenjataEl) wukuSenjataEl.textContent = pawukon.wuku.details.senjata || "-"; else console.warn("wukuSenjataEl not found");
                    if(wukuCandraEl) wukuCandraEl.textContent = pawukon.wuku.details.candra || "-"; else console.warn("wukuCandraEl not found");
                    if(wukuWatakEl) wukuWatakEl.innerHTML = (pawukon.wuku.details.watak || "-").replace(/\n/g, '<br>'); else console.warn("wukuWatakEl not found");
                    if(wukuNasibEl) wukuNasibEl.innerHTML = (pawukon.wuku.details.nasib || "-").replace(/\n/g, '<br>'); else console.warn("wukuNasibEl not found");
                    if(wukuSengkalaEl) wukuSengkalaEl.innerHTML = (pawukon.wuku.details.sengkala || "-").replace(/\n/g, '<br>'); else console.warn("wukuSengkalaEl not found");
                    if(wukuArahEl) wukuArahEl.textContent = pawukon.wuku.details.arah || "-"; else console.warn("wukuArahEl not found");
                    if(wukuHariSialEl) wukuHariSialEl.textContent = pawukon.wuku.details.hariSial || "-"; else console.warn("wukuHariSialEl not found"); // Hari sial wuku tidak diubah otomatis, karena formatnya dari data Wuku.js
                    if(wukuAnjuranEl) wukuAnjuranEl.innerHTML = (pawukon.wuku.details.anjuran || "-").replace(/\n/g, '<br>'); else console.warn("wukuAnjuranEl not found");
                    
                    if(wukuDetailSectionEl) wukuDetailSectionEl.style.display = 'block'; else console.warn("wukuDetailSectionEl not found");
                    console.log("convertAll - Data Detail Wuku selesai ditampilkan ke DOM.");
                } else {
                    console.error("convertAll - pawukon.wuku.details TIDAK ADA atau undefined. Tidak bisa menampilkan detail wuku.");
                    if (wukuDetailSectionEl) wukuDetailSectionEl.style.display = 'none';
                    clearWukuDetailsDOM();
                }
            } else {
                clearPawukonOutput();
                if (wukuDetailSectionEl) wukuDetailSectionEl.style.display = 'none';
                console.error("convertAll - getPawukonInfo mengembalikan data yang tidak lengkap atau null (pawukon/saptawara/pancawara/wuku missing).", pawukon);
            }
        } catch (e) {
            console.error("convertAll - ERROR BESAR di blok Pawukon:", e);
            clearPawukonOutput();
            if (wukuDetailSectionEl) wukuDetailSectionEl.style.display = 'none';
        }
        currentConversionData = displayData;
        if (summarizeButton) summarizeButton.style.display = 'inline-block';
    }
    
    // --- FUNGSI CLEAR OUTPUT ---
    function clearAllOutputs() {
        if(resultSakaJawaEl) resultSakaJawaEl.textContent = "-";
        clearPranataMangsaOutput();
        clearPawukonOutput();
        if (summarizeButton) summarizeButton.style.display = 'none';
    }

    function clearPranataMangsaOutput() {
        if(pmNamaEl) pmNamaEl.textContent = "-"; 
        if(pmMulaiEl) pmMulaiEl.textContent = "-";
        if(pmDurasiEl) pmDurasiEl.textContent = "-"; 
        if(pmCandraEl) pmCandraEl.textContent = "-";
        if(pmArtiCandraEl) pmArtiCandraEl.textContent = "-";
    }

    function clearPawukonOutput() {
        if(pwDinaEl) pwDinaEl.textContent = "-"; 
        if(pwDinaNeptuEl) pwDinaNeptuEl.textContent = "-";
        if(pwPasaranEl) pwPasaranEl.textContent = "-"; 
        if(pwPasaranNeptuEl) pwPasaranNeptuEl.textContent = "-";
        if(pwWetonEl) pwWetonEl.textContent = "-"; 
        if(pwWetonNeptuEl) pwWetonNeptuEl.textContent = "-";
        if(pwParingkelanEl) pwParingkelanEl.textContent = "-"; 
        if(pwPadangonEl) pwPadangonEl.textContent = "-";
        if(pwPadewanEl) pwPadewanEl.textContent = "-"; 
        if(pwNogoDinoEl) pwNogoDinoEl.textContent = "-";
        if(pwWukuNameMainEl) pwWukuNameMainEl.textContent = "-";
        
        clearWukuDetailsDOM();
        if (wukuDetailSectionEl) wukuDetailSectionEl.style.display = 'none';
    }

    function clearWukuDetailsDOM() {
        if(wukuDetailNameEl) wukuDetailNameEl.textContent = "-";
        if(wukuDewaEl) wukuDewaEl.textContent = "-"; 
        if(wukuPohonEl) wukuPohonEl.textContent = "-"; 
        if(wukuBurungEl) wukuBurungEl.textContent = "-";
        if(wukuGedhongEl) wukuGedhongEl.textContent = "-"; 
        if(wukuSenjataEl) wukuSenjataEl.textContent = "-"; 
        if(wukuCandraEl) wukuCandraEl.textContent = "-";
        if(wukuWatakEl) wukuWatakEl.innerHTML = "-";
        if(wukuNasibEl) wukuNasibEl.innerHTML = "-"; 
        if(wukuSengkalaEl) wukuSengkalaEl.innerHTML = "-";
        if(wukuArahEl) wukuArahEl.textContent = "-"; 
        if(wukuHariSialEl) wukuHariSialEl.textContent = "-"; 
        if(wukuAnjuranEl) wukuAnjuranEl.innerHTML = "-";
    }

    // --- EVENT LISTENER & INITIAL CALL ---
    if (convertButton) {
        convertButton.addEventListener('click', () => {
            if (gregorianDateInput) {
                convertAll(gregorianDateInput.value);
            } else {
                console.error("Gregorian date input element not found for button click.");
            }
        });
    } else {
        console.error("Convert button not found.");
    }

    if (summarizeButton) {
        summarizeButton.addEventListener('click', () => {
            if (currentConversionData) {
                localStorage.setItem('summaryData', JSON.stringify(currentConversionData));
                window.open('kesimpulan.html', '_blank');
            } else {
                alert("Silakan lakukan konversi terlebih dahulu.");
            }
        });
    } else {
        console.error("Summarize button not found.");
    }


    if (gregorianDateInput && gregorianDateInput.value) {
        const initialDateParts = gregorianDateInput.value.split('-');
        if (initialDateParts.length === 3) {
            const initialYear = parseInt(initialDateParts[0]);
            const initialMonth = parseInt(initialDateParts[1]);
            const initialDay = parseInt(initialDateParts[2]);
            if (!isNaN(initialYear) && !isNaN(initialMonth) && !isNaN(initialDay) &&
                initialMonth >= 1 && initialMonth <= 12 && initialDay >= 1 && initialDay <= 31) {
                const tempDate = new Date(initialYear, initialMonth - 1, initialDay);
                if (tempDate.getFullYear() === initialYear && tempDate.getMonth() === initialMonth - 1 && tempDate.getDate() === initialDay) {
                    convertAll(gregorianDateInput.value);
                } else {
                    console.warn("Initial date in input is invalid (e.g., Feb 30). Clearing outputs.");
                    clearAllOutputs();
                }
            } else {
                console.warn("Initial date components in input are invalid. Clearing outputs.");
                clearAllOutputs();
            }
        } else {
            console.warn("Initial date format in input is invalid. Clearing outputs.");
            clearAllOutputs();
        }
    } else {
        console.log("Initial date input is empty or element not found. No conversion on load.");
        clearAllOutputs();
    }
});