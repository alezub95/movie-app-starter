'use strict';
(function () {
    
    function addEventListenerToForm(){
        var form = document.querySelector("#add-movie-form");
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var formElements = e.target.elements;
            var newMovie = { 
                id: (new Date()).getTime(),
                title: formElements["title"].value,
                image: formElements["image"].value,
                genre: formElements["genre"].value,
                year: formElements["year"].value,
                mark: formElements["mark"].value,
            }
            MoviesModule.addMovieToLocalStorage(newMovie);
        } );
        
    }
    
    
    
    
  addEventListenerToForm();
})()