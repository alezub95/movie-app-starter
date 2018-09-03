    'use strict';

    var ValidationModule = (function () {
        var state = {
            isFormValid: true
        };
        
        function showError(message, elem){
            elem.classList.add("validate-error");
            state.isFormValid = false;
        }
        
        function validateTitle() {
            var titleElem = document.querySelector("#title");
            var titleValue = titleElem.value;
            if (titleValue.length<3 || titleValue.length>20){
                showError("Title should consist of 3-20 symbols", titleElem);
            }
                
        }


        function validateAllFields() {
            state.isFormValid = true;
            validateTitle();
            return state.isFormValid;
        }

        return {
            validateAllFields: validateAllFields,
        }
    })()
