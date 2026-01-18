fetch("data/pengumuman.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `
        <b>${p.judul}</b><br>
        <small>${p.tanggal}</small>
        <p>${p.isi}</p>
      `;
      document.getElementById(p.kategori).appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
  });
