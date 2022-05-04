const addAlbum = document.querySelector('.add-album');
const postID = document.getElementById('postId');
const Idd = document.getElementById('Id');
const nameValue = document.getElementById('candName');
const emailValue = document.getElementById('email');
const bodyValue = document.getElementById('body');
var a = document.createElement('a'); 
a.title = "Id"; 
a.href = 'userDetails.html'; 
document.body.appendChild(a); 

const renderAlbums = (albums) =>{
    

          var temp = "";
          albums.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.postId + "</td>";
            
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.body + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        
    
}
          
const url = 'https://jsonplaceholder.typicode.com/comments';
addAlbum.addEventListener('submit' ,(e) =>{
    e.preventDefault();
    //console.log(postID.value);
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            ID : postID.value,
            identity: Idd.value,
            name: nameValue.value,
            mail: emailValue.value,
            content: bodyValue.value
            })
    })
            .then(response => response.json())
            .then(data => {
                /*const dataArr = [];
                dataArr.push(data);
                renderAlbums(dataArr);*/
                window.location.href = 'index.html'; 
            })
      
    })
    
