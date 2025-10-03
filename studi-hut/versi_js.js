fetch('data/pizza.json')
    .then(response => response.json())
    .then(data => {
        const menu = data.menu;
        let cards = '';

        menu.forEach(m => {

            cards += `
            <div class="col-md-4">
                <div class="card">
                    <img src="img/pizza/${m.gambar}" class="card-img-top" alt="${m.gambar}">
                    <div class="card-body">
                        <h5 class="card-title">${m.nama}</h5>
                        <p class="card-text">${m.deskripsi}</p>
                        <h5 class="card-title">${m.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Euy</a>
                    </div>
                </div>
            </div>
            `
        });

        const menuContainer = document.querySelector('#daftar-menu');
        menuContainer.innerHTML = cards;
    })
    .catch(err => {
        console.error('Tidak bisa mengambil data:', err);
    });