var users = [
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"../images/john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"../images/jane.png"
    }
]
var currId = 0;
function toggle(){
    // use currid to update which user is displayed as user 1 is at index 0 and user 2 is at index 1
    currId = (currId+1)%2;

    //use id to get the elements from html file
    var user = users[currId];
    document.getElementById("user_img").src = user.image;
    document.getElementById("user_name").innerText = user.name;
    document.getElementById("user_gen").innerText = user.gender;
}