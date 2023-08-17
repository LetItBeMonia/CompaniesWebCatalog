const changePage = e => {
    e.preventDefault();
    console.log(e.target.dataset.page);
    const search = new URLSearchParams(window.location.search);
    search.set('page', e.target.dataset.page);
    const url = window.location.origin + window.location.pathname + '?' + search.toString();
    window.location.href = url;
};

document.querySelectorAll('.pagination a').forEach(a => {
    a.addEventListener('click', changePage);
});