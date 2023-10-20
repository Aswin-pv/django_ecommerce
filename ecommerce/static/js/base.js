// SEARCHBAR-TOP

const searchForm = document.querySelector('.search-form');

const searchNavbar = document.querySelector('.search-navbar');

const responsiveNavbar = document.querySelector('.navbar-responsive')

function toggleSearchBar(){
    if (window.innerWidth <= 1198){
        searchForm.style.display = 'none';
        searchNavbar.style.display = 'block';
    }else{
        searchForm.style.display = 'block';
        searchNavbar.style.display = 'none';
    }
}

window.addEventListener('resize',toggleSearchBar);

toggleSearchBar();