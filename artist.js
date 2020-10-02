fetch("https://api.happi.dev/v1/music/artists?page=1",{
    headers:{
        "x-happi-key":"30222bGVNePLlfzl7v8OK2Qm7Utxd3OvS5Ngs7McOHajNShwRSPWgruz"
    }
})
.then(function(response){ //callback funktion 
    return response.json()
})

.then(function(data){
    //console.log(data);

    var artistSection = document.querySelector(".artistSection");

    data.result.forEach(function(artist){
        var artistTemplate = document.querySelector("#artistTemplate").content.cloneNode(true);
        var albums = artistTemplate.querySelector(".albums")
        artistTemplate.querySelector(".artistName").innerText = artist.artist;
        fetch(artist.api_albums, {
            headers:{
                "x-happi-key":"30222bGVNePLlfzl7v8OK2Qm7Utxd3OvS5Ngs7McOHajNShwRSPWgruz"
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            //console.log(data);
            //console.log(albums);
            data.result.albums.forEach(function(album){
                if (albums.childElementCount < 3){
                    let li = document.createElement("li")
                    li.innerText = album.album
                    albums.appendChild(li);
                    console.log(albums.childElementCount);

                }
                //console.log(album.album);


            })
        })
        //artistTemplate.querySelector(".albumName").innerText = artist.api_albums;
        artistSection.appendChild(artistTemplate);
    })
})


