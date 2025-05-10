// tanggal.js

const TanggalData = {
    SAKA_MONTH_NAMES_JAWA: ["Kasa", "Wesaka", "Jesta", "Asada", "Srawana", "Padrawana", "Asuji", "Kartika", "Margasira", "Posya", "Magha", "Palguna"],
    MANGSA_NAMES_FOR_SAKA: ["Kasa (Kartika)", "Karo", "Katelu (Katiga)", "Kapat", "Kalima", "Kanem", "Kapitu", "Kawolu", "Kasanga", "Kasepuluh (Kadasa)", "Desta", "Saddha"],
    SAPTAWARA_NAMES: ["Radite", "Soma", "Anggara", "Buda", "Respati", "Sukra", "Saniscara"], // Minggu s.d Sabtu
    SAPTAWARA_NEPTU: [5, 4, 3, 7, 8, 6, 9],
    PANCAWARA_NAMES: ["Legi", "Paing", "Pon", "Wage", "Kliwon"],
    PANCAWARA_NEPTU: [5, 9, 7, 4, 8],
    PARINGKELAN_NAMES: ["Tungle", "Aryang", "Wurukung", "Paningron", "Uwas", "Mawulu"],
    PADANGON_NAMES: ["Sri", "Indra", "Guru", "Yama", "Ludra", "Brahma", "Kala", "Uma"],
    PADEWAN_NAMES: ["Dangu", "Jagur", "Gigis", "Kerangan", "Nohan", "Wogan", "Tulus", "Wurung", "Dadi"],
    NOGO_DINO_DIRECTION: {
        "Legi": "Utara-Timur", "Paing": "Selatan", "Pon": "Barat",
        "Wage": "Utara", "Kliwon": "Tengah (di tempatnya)"
    },
    // BARU: Nama hari Masehi dalam bahasa Indonesia
    MASEHI_DAY_NAMES_ID: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
};

function isGregorianLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getJulianDayNumber(gYear, gMonth, gDay) {
    let a = Math.floor((14 - gMonth) / 12);
    let y = gYear + 4800 - a;
    let m = gMonth + 12 * a - 3;
    let jdn = gDay + Math.floor((153 * m + 2) / 5) + 365 * y +
              Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    return jdn;
}