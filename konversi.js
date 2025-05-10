// konversi.js

// --- FUNGSI KONVERSI ---
// Dependencies:
// - TanggalData (from tanggal.js)
// - PranataMangsaData (from pranata_mangsa.js)
// - WukuData (from wuku.js)
// - isGregorianLeap (from tanggal.js)
// - getJulianDayNumber (from tanggal.js)

function convertToSakaJawa(gYear, gMonth, gDay, gregorianDate) {
    const isLeapGregorianYear = isGregorianLeap(gYear);
    const chaitra1GregorianDay = isLeapGregorianYear ? 21 : 22;
    const chaitra1GregorianMonth = 3;

    let sakaYear;
    if (gMonth < chaitra1GregorianMonth || (gMonth === chaitra1GregorianMonth && gDay < chaitra1GregorianDay)) {
        sakaYear = gYear - 79;
    } else {
        sakaYear = gYear - 78;
    }

    const gregorianYearOfSakaNewYear = sakaYear + 78;
    const isLeapForSakaNewYear = isGregorianLeap(gregorianYearOfSakaNewYear);
    const chaitra1ThisSakaYear = new Date(
        gregorianYearOfSakaNewYear, 2, isLeapForSakaNewYear ? 21 : 22
    );

    let daysSinceSakaNewYear = Math.floor((gregorianDate - chaitra1ThisSakaYear) / (1000 * 60 * 60 * 24));

    const sakaMonthLengths = [
        isLeapForSakaNewYear ? 31 : 30, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30
    ];

    let sakaDay = daysSinceSakaNewYear + 1;
    let sakaMonthIndex = 0;
    for (let i = 0; i < sakaMonthLengths.length; i++) {
        if (sakaDay <= sakaMonthLengths[i]) {
            sakaMonthIndex = i;
            break;
        }
        sakaDay -= sakaMonthLengths[i];
    }

    return {
        day: sakaDay,
        monthJawa: TanggalData.SAKA_MONTH_NAMES_JAWA[sakaMonthIndex],
        mangsaAssociated: TanggalData.MANGSA_NAMES_FOR_SAKA[sakaMonthIndex],
        year: sakaYear
    };
}

function getPranataMangsaInfo(gYear, gMonth, gDay, gregorianDate) {
    let currentPranataMangsaData = JSON.parse(JSON.stringify(PranataMangsaData.DETAIL.map((item, index) => ({...item, originalIndex: index}))));
    const isLeap = isGregorianLeap(gYear);

    currentPranataMangsaData[7].startDay = isLeap ? 4 : 3; // Kawolu
    currentPranataMangsaData[7].duration = isLeap ? 27 : 26;

    for (let i = 8; i < currentPranataMangsaData.length; i++) {
        const prevMangsa = currentPranataMangsaData[i-1];
        let prevMangsaYearForCalc = gYear;

        if (prevMangsa.originalIndex === 0) {
             if ( ( (gMonth -1) < prevMangsa.startMonth || ((gMonth -1) === prevMangsa.startMonth && gDay < prevMangsa.startDay) ) ) {
                prevMangsaYearForCalc = gYear -1;
             }
        } else {
            if (prevMangsa.startMonth > (gMonth -1) && prevMangsa.startMonth >= 5 && (gMonth-1) < 5) {
                 prevMangsaYearForCalc = gYear -1;
            }
        }

        const prevMangsaStartDate = new Date(prevMangsaYearForCalc, prevMangsa.startMonth, prevMangsa.startDay);
        const prevMangsaEndDate = new Date(prevMangsaStartDate);
        prevMangsaEndDate.setDate(prevMangsaStartDate.getDate() + prevMangsa.duration -1);

        const nextMangsaStartDate = new Date(prevMangsaEndDate);
        nextMangsaStartDate.setDate(prevMangsaEndDate.getDate() + 1);

        currentPranataMangsaData[i].startMonth = nextMangsaStartDate.getMonth();
        currentPranataMangsaData[i].startDay = nextMangsaStartDate.getDate();
    }

    for (let i = 0; i < currentPranataMangsaData.length; i++) {
        const mangsa = currentPranataMangsaData[i];
        let mangsaStartYear = gYear;

        if (mangsa.originalIndex === 0 && ( (gMonth -1) < mangsa.startMonth || ((gMonth -1) === mangsa.startMonth && gDay < mangsa.startDay) ) ) {
            mangsaStartYear = gYear - 1;
        }
        else if (mangsa.originalIndex > 0 && mangsa.startMonth > (gMonth -1) && mangsa.startMonth >= 5 && (gMonth-1) < 5) {
             mangsaStartYear = gYear -1;
        }

        const startDate = new Date(mangsaStartYear, mangsa.startMonth, mangsa.startDay);
        let currentDuration = (mangsa.originalIndex === 7) ? mangsa.duration : PranataMangsaData.DETAIL[mangsa.originalIndex].duration;
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + currentDuration -1);

        if (gregorianDate >= startDate && gregorianDate <= endDate) {
            return {
                ...PranataMangsaData.DETAIL[mangsa.originalIndex],
                startMonth: startDate.getMonth(),
                startDay: startDate.getDate(),
                duration: currentDuration,
                originalIndex: mangsa.originalIndex
            };
        }
    }
    console.warn("Pranata Mangsa not found directly, attempting fallback.");
    if (gregorianDate < new Date(gYear, currentPranataMangsaData[0].startMonth, currentPranataMangsaData[0].startDay)) {
         const lastMangsaOriginal = PranataMangsaData.DETAIL[PranataMangsaData.DETAIL.length -1];
         const lastMangsaAdjusted = currentPranataMangsaData[currentPranataMangsaData.length -1];
         return { ...lastMangsaOriginal, startDay: lastMangsaAdjusted.startDay, startMonth: lastMangsaAdjusted.startMonth, originalIndex: PranataMangsaData.DETAIL.length -1 };
    }
    const firstMangsaOriginal = PranataMangsaData.DETAIL[0];
    const firstMangsaAdjusted = currentPranataMangsaData[0];
    return { ...firstMangsaOriginal, startDay: firstMangsaAdjusted.startDay, startMonth: firstMangsaAdjusted.startMonth, originalIndex: 0 };
}

function getPawukonInfo(gYear, gMonth, gDay, gregorianDate) {
    console.log("getPawukonInfo called with:", gYear, gMonth, gDay);
    try {
        const jdn = getJulianDayNumber(gYear, gMonth, gDay);
        console.log("getPawukonInfo - JDN:", jdn);

        const saptawaraDayIndex = gregorianDate.getDay();
        const saptawaraName = TanggalData.SAPTAWARA_NAMES[saptawaraDayIndex];
        const saptawaraNeptu = TanggalData.SAPTAWARA_NEPTU[saptawaraDayIndex];
        console.log("getPawukonInfo - Saptawara:", saptawaraName, saptawaraNeptu);

        const pancawaraIndex = (jdn - 2451545 + 4 + 5000) % 5;
        const pancawaraName = TanggalData.PANCAWARA_NAMES[pancawaraIndex];
        const pancawaraNeptu = TanggalData.PANCAWARA_NEPTU[pancawaraIndex];
        const totalNeptu = saptawaraNeptu + pancawaraNeptu;
        console.log("getPawukonInfo - Pancawara:", pancawaraName, pancawaraNeptu, "Total Neptu:", totalNeptu);

        const paringkelanIndex = (jdn + 1) % 6;
        const paringkelanName = TanggalData.PARINGKELAN_NAMES[paringkelanIndex];
        console.log("getPawukonInfo - Paringkelan:", paringkelanName);

        const padangonIndex = (jdn + 7) % 8;
        const padangonName = TanggalData.PADANGON_NAMES[padangonIndex];
        console.log("getPawukonInfo - Padangon:", padangonName);

        const padewanIndex = (jdn + 2) % 9;
        const padewanName = TanggalData.PADEWAN_NAMES[padewanIndex];
        console.log("getPawukonInfo - Padewan:", padewanName);

        const nogoDino = TanggalData.NOGO_DINO_DIRECTION[pancawaraName] || "Tidak diketahui";
        console.log("getPawukonInfo - Nogo Dino:", nogoDino);

        const wukuEpochJDN = 2415040;
        const daysSinceWukuEpoch = jdn - wukuEpochJDN;
        const wukuCycleDayNumber = (daysSinceWukuEpoch % 210 + 210) % 210;
        const wukuIndex = Math.floor(wukuCycleDayNumber / 7) % 30;
        console.log("getPawukonInfo - Wuku Index:", wukuIndex);

        let wukuName = "Error";
        let wukuDetails = { dewa: "Data Wuku Error", kayu: "-", burung: "-", gedhong: "-", senjata: "-", candra: "-", watak: "-", nasib: "-", sengkala: "-", arah: "-", hariSial: "-", anjuran: "-" };

        if (wukuIndex >= 0 && wukuIndex < WukuData.NAMES.length) {
            wukuName = WukuData.NAMES[wukuIndex];
            if (wukuIndex < WukuData.DETAILS.length && WukuData.DETAILS[wukuIndex]) {
                wukuDetails = WukuData.DETAILS[wukuIndex];
            } else {
                console.error("getPawukonInfo - WukuData.DETAILS[wukuIndex] is missing or undefined for index:", wukuIndex);
            }
        } else {
            console.error("getPawukonInfo - Wuku index out of bounds:", wukuIndex);
        }

        console.log("getPawukonInfo - Wuku Name:", wukuName);
        console.log("getPawukonInfo - wukuDetails object:", JSON.stringify(wukuDetails, null, 2));

        return {
            saptawara: { name: saptawaraName, neptu: saptawaraNeptu },
            pancawara: { name: pancawaraName, neptu: pancawaraNeptu },
            totalNeptu: totalNeptu,
            paringkelan: paringkelanName,
            padangon: padangonName,
            padewan: padewanName,
            nogoDino: nogoDino,
            wuku: { name: wukuName, details: wukuDetails }
        };
    } catch (e) {
        console.error("Error inside getPawukonInfo:", e);
        return {
            saptawara: { name: "Error", neptu: 0 },
            pancawara: { name: "Error", neptu: 0 },
            totalNeptu: 0,
            paringkelan: "Error",
            padangon: "Error",
            padewan: "Error",
            nogoDino: "Error",
            wuku: { name: "Error", details: { dewa: "Error Fungsi Pawukon", kayu: "-", burung: "-", gedhong: "-", senjata: "-", candra: "-", watak: "-", nasib: "-", sengkala: "-", arah: "-", hariSial: "-", anjuran: "-" } }
        };
    }
}