//since the api url is dynamic as it is based on the stuff user types...
var api_url = "https://autosuggest-backend.onrender.com/api/autosuggest?";
//this takes info from the search bar that user has typed
var search_bar = document.getElementById("bar");
var search = document.getElementById("searchsuggestions");
//the event listener is added to dynamically take user typed data and put it as a query in url 
//call api
//append all suggestions one after the other as result
search_bar.addEventListener("input",function(){
    var query = search_bar.value.trim();
    fetchsuggestions(query);

})
function fetchsuggestions(query) {
    var full_api = api_url + "q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(full_api)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            //console.log(data);
            show_suggestions(data);
        })
        .catch(function(error){
            console.log("Error: "+error);
        })
}
function show_suggestions(data){
    var values = data.results;
    if(data.count === 0){
        searchsuggestions.innerHTML = "<div class='search_box'>No Matching results found</div>";
    }
    else{
        var html_string = "";
        for(var i = 0; i<data.count; i++){
            html_string += "<div class='search_box'><span class = 'sug-text'>"+values[i].text+"    </span><span class='sug-wgt'>"+values[i].weight+"</span></div>";
        }
        searchsuggestions.innerHTML = html_string;
    }
}
