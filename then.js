const searchInput = document.querySelector("[data-search]")

    // var searchResult = "horse"
    const img = document.querySelector('img');
    function fetchtest(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=nyk9hIL4CPC7TdxZcOBMuOQgIW40Ghv6&s='+searchInput.value, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function(err){
      alert("Use search for giph.  If giph doesn't exist, try again.")
    })
  }
  fetchtest()
  document.querySelector('button').addEventListener("click", fetchtest)
