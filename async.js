const searchInput = document.querySelector("[data-search]")

    // var searchResult = "horse"
    const img = document.querySelector('img');
    async function fetchtest(){
    try{
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=nyk9hIL4CPC7TdxZcOBMuOQgIW40Ghv6&s='+searchInput.value, {mode: 'cors'})
    
        const imgData = await response.json();
    
        img.src = imgData.data.images.original.url;
    }
    catch(error){
      alert("Use search for giph.  If giph doesn't exist, try again.")
    }
  }
  fetchtest()
  document.querySelector('button').addEventListener("click", fetchtest)
