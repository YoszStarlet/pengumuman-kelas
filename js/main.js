fetch("data/pengumuman.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      const target = document.getElementById(p.kategori);
      if (!target) return;

      const box = document.createElement("div");
      box.style.background = "#fff";
      box.style.padding = "10px";
      box.style.marginBottom = "10px";

      box.innerHTML = `
        <b>${p.judul}</b><br>
        <small>${p.tanggal}</small>
        <p>${p.isi}</p>
      `;

      target.appendChild(box);
    });
  })
  .catch(() => {
    alert("Gagal memuat pengumuman");
  });
