


window.addEventListener("DOMEontentLoaded", function(){
    
  var form =document.getElementsByClassName("news-form");
  var status = document.getElementsByClassName("status");
  
  function success(){
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thank You For Your Submition!";
  }
  
  
  function error(){
      form.reset();
      status.classList.add("error");
      status.innerHTML = "Sorry! please try again";
  }
  
  form.EventListener("submit", function (event) {
      event.preventDefault();
      var data = new formData(form);
      ajax(form.method, form.section, data, success, error);
  
      });
  });
  
  function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    }



    const button = document.querySelector(".btn");
const close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup__wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
