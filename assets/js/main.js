fetch("data/pengumuman.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      if (!document.getElementById(p.kategori)) return;

      const box = document.createElement("div");
      box.innerHTML = `
        <b>${p.judul}</b><br>
        <small>${p.tanggal}</small>
        <p>${p.isi}</p>
      `;
      document.getElementById(p.kategori).appendChild(box);
    });
  })
  .catch(() => {
    document.body.innerHTML += "<p>⚠️ Gagal memuat pengumuman</p>";
  });
