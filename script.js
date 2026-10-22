const eventName = "TechStarter Day";
const maxSeats = 40;
let registered = 27;

// const remaining = maxSeats - registered;

// const requested = 5;

// if (requested <= remaining) {
//     console.log("Permintaan dapat dilayani");
// } else {
//     console.log("kursi tidak cukup");
// }

function checkSeats(requested) {
    const remaining = maxSeats - registered;

    if(!Number.isInteger(requested) || requested <= 0) {
        return "Masukkan jumlah kursi berupa  bilangan bulat lebih dari 0.";
    }

    if (requested <= remaining) {
        return `Tersedia. Sisa saat ini ${remaining} kursi.`;
    }

        return `Tidak cukup. Hanya tersisa ${remaining} kursi.`;
}

function registerSeats(requested) {
    const remaining = maxSeats - registered;

    if(!Number.isInteger(requested) || requested <= 0) {
        return "Input tidak valid.";
    }

    if(requested > remaining) {
        return `Gagal. Hanya tersisa ${remaining} kursi.`;
    }

    registered = registered + requested;
    return `Berhasil. Total terdaftar sekarang ${registered}.`;

}

const checkSeatBtn = document.querySelector("#checkSeatBtn");
const checkRegBtn = document.querySelector("#checkRegBtn");

checkSeatBtn.addEventListener("click", function () {
    const requested = Number(prompt("Berapa kursi yang ingin di cek?"));
    const result = checkSeats(requested);
    console.log(result);
    alert(result);
});

checkRegBtn.addEventListener("click", function () {
    const requested = Number(prompt("Berapa kursi yang ingin di cek?"));
    const result = registerSeats(requested);
    console.log(result);
    alert(result);
});

