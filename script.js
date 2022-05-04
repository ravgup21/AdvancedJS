
fetch("https://jsonplaceholder.typicode.com/comments").then(
  response => {
    response.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.postId + "</td>";
           
            //temp += "<td><a href='userDetails.html'>" + itemData.id + "</a></td>";
            temp += "<td><a href='userDetails.html'><Link to={'/userDetails.html?Id=' +itemData.id}>" + itemData.id + "</Link></a></td>";
            
           // '<a href="userDetails.html">' + itemData.id +'</a>';
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.body + "</td></tr>";
            console.log(itemData.id);

            //window.location.href = 'userDetails.html'; 
            //document.getElementById(itemData.id).click();
          });
          document.getElementById('data').innerHTML = temp;
          
        }
      }
    )
  }
)