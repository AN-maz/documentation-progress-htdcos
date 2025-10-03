const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

fetch('data/pizza.json')
    .then(response => response.json())
    .then(data => {
        const allMenu = data.menu;
        displayMenu(allMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                const kategori = this.innerHTML;
                document.querySelector('.col h1').innerHTML = kategori === 'Home' ? 'All Menu' : kategori;

                if (kategori === 'Home') {
                    displayMenu(allMenu);
                } else {
                    const filteredMenu = allMenu.filter(
                        m => m.kategori.toLowerCase() === kategori.toLowerCase()
                    );
                    displayMenu(filteredMenu);
                }
            });
        });
    })
    .catch(err => {
        console.error('Tidak bisa mengambil data:', err);
    });


function displayMenu(menu) {
    const menuContainer = document.querySelector('#daftar-menu');
    let cards = '';

    menu.forEach(m => {

        cards += `
            <div class="col-md-4">
                <div class="card">
                    <img src="img/pizza/${m.gambar}" class="card-img-top" alt="${m.nama}">
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

    menuContainer.innerHTML = cards;
}