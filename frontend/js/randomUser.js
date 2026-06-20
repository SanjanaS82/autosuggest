function rando(){
    fetch("https://randomuser.me/api/")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var user = data.results[0];
            var full_name = user.name.title + " " + user.name.first + " " + user.name.last;
            document.getElementById("user_img").src = user.picture.large;
            document.getElementById("user_name").innerText = full_name;
            document.getElementById("user_gen").innerText = user.gender;
        })
        .catch(function(error){
            console.log("Error: "+error);
        })
}