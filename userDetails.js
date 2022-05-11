var id;
function fetchId() {
 const urlParams = new URLSearchParams(window.location.search);
 id = urlParams.get("id");
}
fetchId();
fetch("https://jsonplaceholder.typicode.com/comments/" + id).then(
  (response) => {
    response.json().then(
      (data) => {
        console.log(data);
        if (Object.keys(data).length > 0) {

          var temp = "";

            temp += "<tr>";
            temp += "<td>" + data.postId + "</td>";
           

            temp += "<td>" + data.id + "</td>";
            temp += "<td>" + data.name + "</td>";
            temp += "<td>" + data.email + "</td>";
            temp += "<td>" + data.body + "</td></tr>";
            console.log(data.id);

          document.getElementById('data').innerHTML = temp;
          
        }
      }
    );
  }
);
      
    
    
