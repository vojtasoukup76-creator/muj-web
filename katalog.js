// katalog.js — client-side search and sort
(function(){
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    const container = document.getElementById('vystup');

    function getProducts(){
        return Array.from(container.querySelectorAll('.produkt'));
    }

    function normalizeText(s){
        return (s||'').toString().toLowerCase().trim();
    }

    function parsePrice(el){
        // price stored in data-price attribute (integer CZK)
        const p = el.getAttribute('data-price');
        return p ? Number(p) : NaN;
    }

    function applyFilterAndSort(){
        const q = normalizeText(searchInput.value);
        const products = getProducts();

        let filtered = products.filter(p => {
            const name = normalizeText(p.querySelector('[data-template="name"]').textContent);
            return name.indexOf(q) !== -1;
        });

        const sort = sortSelect.value;
        if(sort === 'price-asc'){
            filtered.sort((a,b)=> parsePrice(a) - parsePrice(b));
        } else if(sort === 'price-desc'){
            filtered.sort((a,b)=> parsePrice(b) - parsePrice(a));
        } else if(sort === 'name-asc'){
            filtered.sort((a,b)=> normalizeText(a.querySelector('[data-template="name"]').textContent).localeCompare(normalizeText(b.querySelector('[data-template="name"]').textContent)));
        } else if(sort === 'name-desc'){
            filtered.sort((a,b)=> normalizeText(b.querySelector('[data-template="name"]').textContent).localeCompare(normalizeText(a.querySelector('[data-template="name"]').textContent)));
        }

        // reflow DOM
        container.innerHTML = '';
        filtered.forEach(p => container.appendChild(p));
    }

    searchInput.addEventListener('input', applyFilterAndSort);
    sortSelect.addEventListener('change', applyFilterAndSort);

    // initial
    document.addEventListener('DOMContentLoaded', applyFilterAndSort);
})();
