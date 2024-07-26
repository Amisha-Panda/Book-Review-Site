document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchResults = document.getElementById('search-results');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchForm.querySelector('input').value;
    searchResults.innerHTML = `<p>Search results for "${query}" will appear here.</p>`;
  });
});
