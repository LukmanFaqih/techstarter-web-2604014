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
        


        // ..::PERTEMUAN 07::..
        const seatForm = document.querySelector("#seatForm");
        const seatRequestInput = document.querySelector("#seatRequest");
        const seatMessage = document.querySelector("#seatMessage");
        
        function setStatus(message, type) {
            seatMessage.textContent = message;
            seatMessage.classList.remove("neutral", "success", "error");
            seatMessage.classList.add(type);
        }
        // seatForm.addEventListener("submit", function (event) {
        //     event.preventDefault();
        //     console.log("Form diterima tanpa reload");
        // });

        seatForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const requested = Number(seatRequestInput.value);
            const remaining = maxSeats - registered;
            
            if (!Number.isInteger(requested) || requested <= 0) {
            setStatus("Masukkan jumlah kursi bulat lebih dari 0.", "error");
            return;
            }
            if (requested <= remaining) {
            setStatus(`Tersedia. Masih ada ${remaining} kursi.`, "success");
            } else {
            setStatus(`Tidak cukup. Sisa kursi hanya ${remaining}.`, "error");
            }
        });
        
        console.log(seatForm);
        console.log(seatRequestInput);
        console.log(seatMessage);

        seatRequestInput.addEventListener("input", function () {
            setStatus("Nilai berubah. Tekan Cek Kursi untuk memeriksa.", "neutral");
        });


        // const wrongTarget = document.querySelector("#seatMessages");
        // console.log(wrongTarget);
        // wrongTarget.textContent = "Tes";