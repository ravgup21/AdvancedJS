
fetch("https://jsonplaceholder.typicode.com/comments").then(
  (response) => {
    response.json().then(
      (data) => {
        console.log(data);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.postId + "</td>";

            const url = "userDetails.html?id=" + itemData.id;
           
            //temp += "<td><a href='userDetails.html'>" + itemData.id + "</a></td>";
            temp += "<td><a href=" + url + ">"  + itemData.id + "</a></td>";
            
           
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.body + "</td></tr>";
            console.log(itemData.id);

            
          });
          document.getElementById('data').innerHTML = temp;
          
        }
      }
    )
  }
)