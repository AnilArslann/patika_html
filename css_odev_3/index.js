const search_bar=document.querySelector("div.main-part div.search-bar ");

search_bar.addEventListener('click',function(){
   search_bar.classList.toggle('clicked');

});
document.addEventListener('click', function (e) {
    if (!search_bar.contains(e.target)) {
      // If the click target is not within the search_bar, remove the animation class
      search_bar.classList.remove('clicked');
    }
});