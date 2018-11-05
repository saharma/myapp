let settings = {
   clientId : 'xcqzmrmdhs',
   clientSecret : 'vhy0lod2ssttqpofycxshus0v7roes',
   oAuthUrl : 'https://oauth.wildapricot.org/auth/token'


}

var userData = {};

var loginData = {
    grant_type : 'password',
    username : 'imranqau5373@gmail.com',
    password : 'imrankhan',
    scope : 'auto'
};

const otherParms = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        "Authorization": "Basic " + window.btoa(settings.clientId +':'+settings.clientSecret)
      },
      body : loginData,
      method:"POST"
      
}







function loginOnApi()
{
    
    // loginData.username = $('#inputUsername').val();
    // loginData.password = $('#inputPassword').val();

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://oauth.wildapricot.org/auth/token",
        "method": "POST",
        "headers": {
          "authorization": "Basic eW5pY2o3eDR4cTp4cWo0emowcWYzYXJ1d203ejlqMmtlbGxieWc0MG0=",
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "postman-token": "74909c41-09cf-a4c4-4a4c-e377f9586951"
        },
        "data": ""
      }
      debugger;


      var data = 'grant_type=password&username=imranqau5373@gmail.com&password=imrankhan&scope=auto';

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://oauth.wildapricot.org/auth/token");
xhr.setRequestHeader("authorization", "Basic eW5pY2o3eDR4cTp4cWo0emowcWYzYXJ1d203ejlqMmtlbGxieWc0MG0=");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "8a1b1f11-ab8c-3a96-cb55-34bc20ef4afe");

xhr.send(data);
      
    //   $.ajax({
    //     type: 'POST',
    //     url: 'https://oauth.wildapricot.org/auth/token',
    //     data: JSON.stringify(loginData),
    //     dataType: "json",
    //     headers: {
    //        'Authorization': "Basic " + window.btoa(settings.clientId +':'+settings.clientSecret),
    //        "content-type": "application/x-www-form-urlencoded",
    //        "cache-control": "no-cache",
    //     },
    //     success: function (result) {
    //        var token = result;
    //     },
    //     //complete: function (jqXHR, textStatus) {
    //     //},
    //     error: function (req, status, error) {
    //         debugger;
    //     alert(error);
    //     }
    // });


}