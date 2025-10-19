// Menunggu sampai seluruh konten HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
  
  // Menambahkan event listener ke form dengan id "laporanForm"
  document.getElementById("laporanForm").addEventListener("submit", function(event) {
    // Mencegah form mengirim data secara tradisional (agar halaman tidak reload)
    event.preventDefault();
    
    /* ================================================
    1. ATUR NOMOR WHATSAPP TUJUAN DI SINI
    ================================================
    Ganti 628988669000 dengan nomor WA tujuan Anda.
    Harus diawali dengan 62 (bukan 0).
    Contoh: 628123456789
    */
    const nomorWA = "6285855557724"; 
    
    /* ================================================
    2. MENGAMBIL DATA DARI SEMUA INPUT FIELD
    ================================================
    */
    const judul = document.getElementById("judul").value;
    const hariTanggal = document.getElementById("hariTanggal").value;
    const pukul = document.getElementById("pukul").value;
    const selesai = document.getElementById("selesai").value;
    const tujuan = document.getElementById("tujuan").value;
    
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    
    const status = document.getElementById("status").value;
    const kondisiPasien = document.getElementById("kondisiPasien").value;
    const keluhanPasien = document.getElementById("keluhanPasien").value;
    const riwayatPenyakit = document.getElementById("riwayatPenyakit").value;
    
    const tindakan = document.getElementById("tindakan").value;
    
    // === DATA BARU DITAMBAHKAN ===
    const alatDigunakan = document.getElementById("alatDigunakan").value;
    
    const driver = document.getElementById("driver").value;
    const crew = document.getElementById("crew").value;
    const posko = document.getElementById("posko").value;
    
    /* ================================================
    3. MEMBUAT TEMPLATE PESAN WHATSAPP
    ================================================
    */
    const templatePesan = `*${judul.toUpperCase()}*

- *Hari/Tanggal* : ${hariTanggal}
- *Pukul* : ${pukul}
- *Selesai* : ${selesai}
- *Tujuan* : ${tujuan}

- *Dengan Rincian Sebagai Berikut* :

- *Nama* : ${nama}
- *Usia* : ${umur}
- *Alamat* : ${alamat}
- *Jenis Kelamin* : ${jenisKelamin}

- *Status* : ${status}
- *Kondisi Pasien* : ${kondisiPasien}
- *Keluhan Pasien* : ${keluhanPasien}
- *Riwayat Penyakit* : ${riwayatPenyakit}

- *Tindakan* :
${tindakan}

- *Alat Yang Digunakan* :
${alatDigunakan}

*Demikian Yang Dilaporkan*
- *Driver* : ${driver}
- *Crew* : ${crew}
- *Posko* : ${posko}

Call Center :
PMI Kota Jakarta Utara
Telp. 089-8866-9000
#Terus Kobarkan Kebaikan`;
    
    /* ================================================
    4. MEMBUKA WHATSAPP DI TAB BARU
    ================================================
    */
    
    // Meng-encode pesan agar formatnya benar untuk URL
    const pesanWA = encodeURIComponent(templatePesan);
    
    // Membuat URL lengkap
    const urlWA = `https://wa.me/${nomorWA}?text=${pesanWA}`;
    
    // Membuka URL di tab baru
    window.open(urlWA, "_blank");
  });
  
});
