        $('#search-button').on('click', function () {

            const keyword = $('#search-input').val();

            $.ajax({
                url: 'https://api.jikan.moe/v4/anime',
                type: 'get',
                dataType: 'json',
                data: {
                    'q': keyword,
                    'limit': 12 
                },
                success: function (result) {
                    const animes = result.data;
                    $('#anime-list').empty();
                    if (animes.length > 0) {
                        $.each(animes, function (i, anime) {
                            $('#anime-list').append(`
                                <div class="col-md-4 col-lg-3 mb-4">
                                    <div class="card h-100">
                                        <img src="${anime.images.jpg.large_image_url}" class="card-img-top" alt="${anime.title}">
                                        <div class="card-body d-flex flex-column">
                                            <h5 class="card-title">${anime.title}</h5>
                                            <p class="card-text">Skor: ${anime.score || 'N/A'}</p>
                                            <a href="${anime.url}" target="_blank" class="btn btn-dark mt-auto">Lihat Detail</a>
                                        </div>
                                    </div>
                                </div>
                            `);
                        });
                    } else {
                        $('#anime-list').html(`
                            <div class="col text-center">
                                <h3>Anime tidak ditemukan!</h3>
                                <p>Coba gunakan kata kunci lain.</p>
                            </div>
                        `);
                    }
                },
                error: function (error) {
                    console.error('Terjadi kesalahan:', error);
                    $('#anime-list').html(`
                        <div class="col text-center">
                            <h3>Oops! Terjadi Kesalahan</h3>
                            <p>Tidak bisa memuat data. Coba lagi beberapa saat.</p>
                        </div>
                    `);
                }
            });
        });