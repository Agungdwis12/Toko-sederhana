document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.closest(".card");
    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi") ? parent.querySelector(".deskripsi").innerHTML : "<i>Tidak ada informasi</i>";

    // Memunculkan modal
    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    // Update konten modal
    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    // Menyiapkan link ke WhatsApp
    const nohp = "6285766727120"; // Ganti dengan nomor WhatsApp Anda
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Saya ingin memesan produk ini: ${gambar}` ;

    // Mengatur URL pada tombol Beli di modal
    document.querySelector(".btnBeli").href = pesan;

    console.log("Script berjalan!");

  });
});
