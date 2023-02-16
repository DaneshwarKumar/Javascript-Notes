
// fetching the data from api 

fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(finalData=> {

            var value = "";

            finalData.map((x) => {

                value += `
                <div class="card">
                <h2 class="title"> ${x.title} </h2>
                <img src= ${x.image} alt="" class="img">
                <p class="description"> ${x.description} </p>
                <p class="category"> ${x.category} </p>
                <p class="price">${x.price} </p>
                </div>
                `
            });


            document.getElementById('cards').innerHTML = value;
        });




