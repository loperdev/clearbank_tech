function getRandomCat()
  {
		var settings = {
    "url": "https://api.thecatapi.com/v1/images/search?format=json",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
  "x-api-key": "b4452170-626c-4009-be74-9af487b5482d"
		  },
		};

  $.ajax(settings).done(function (response) {
    document.getElementById("randomCat").innerHTML = "<img src='" + response[0].url + "' width='100%' height='260' />";
		});
	}
  document.getElementById("getRandomCat").addEventListener("click", function() {
    getRandomCat();
	});

  function getBreeds()
  {
		var settings = {
    "url": "https://api.thecatapi.com/v1/breeds",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
		  },
		};

  $.ajax(settings).done(function (response) {
		  for(let b = 0; b < response.length; b++)
  {
    document.getElementById("allBreeds").innerHTML += "<option value=" + response[b].id + ">" + response[b].name + "</option>";
		  }
		});
	}
  getBreeds();

  function getBreedDetails(b)
  {
		var settings = {
    "url": "https://api.thecatapi.com/v1/breeds/"+b,
  "method": "GET",
  "timeout": 0,
		};
  let catimage = document.getElementById("catImage");
  let catfacts = document.getElementById("catFacts");
  $.ajax(settings).done(function (response) {
			var settings = {
    "url": "https://api.thecatapi.com/v1/images/"+response.reference_image_id,
  "method": "GET",
  "timeout": 0,
			};

  $.ajax(settings).done(function (response) {
    catimage.innerHTML = "<img src='" + response.url + "' width='100%' height='300' />";
			});
  var settings = {
    "url": "https://api.thecatapi.com/v1/breeds/"+b,
  "method": "GET",
  "timeout": 0,
			};
  $.ajax(settings).done(function (response) {
    catfacts.innerHTML = "<p><b>Origin : </b>" + response.origin + "<br/><b>Description : </b>" + response.description + "<br/>---<br/>" + response.temperament + "</p>";
			});
		});
	}

  function getCategory()
  {
		var settings = {
    "url": "https://api.thecatapi.com/v1/categories",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
		  },
		};

  $.ajax(settings).done(function (response) {
		  for(let c = 0; c < response.length; c++)
  {
    document.getElementById("allCategories").innerHTML += "<option value=" + response[c].id + ">" + response[c].name + "</option>";
		  }
		});
	}
  getCategory();

  function getCategoryDetails(cid)
  {
		var settings = {
    "url": "https://api.thecatapi.com/v1/images/search?category_ids="+cid,
  "method": "GET",
  "timeout": 0,
		};
  let catimage = document.getElementById("catImageC");
  $.ajax(settings).done(function (response) {
    catimage.innerHTML = "<img src='" + response[0].url + "' width='100%' height='300' />";
		});
	}
