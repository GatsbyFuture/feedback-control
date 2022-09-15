console.log("Hello world");
// o'z - o'zidan ishga tuhuvchi function...
(function () {
    var countTime = 0;
    // bazadan vrach id ni olib keladi...
    fetch(`http://localhost:8000/api/clearFile`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data["result"]);
        }).catch(error => {
            //handle error
            console.log(error);
        });
    // backenddan statusni olish...
    var timeOut = setInterval(() => {
        if (countTime < 10) {

            console.log("Tekshirilmoqda!!");
            countTime++;

            fetch(`http://localhost:8000/api/response`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    if (data["result"]) {
                        // console.log("Delayed for 1 second.");
                        document.getElementById("gif").setAttribute('src', '../gif/7efs.gif');
                        // 1.5 sekunddan keyin pageni yopamiz...
                        setTimeout(() => {
                            clearInterval(timeOut);
                            window.close();
                        }, 1500);
                        // console.log(data["data"]);
                    } else {
                        console.log(data["result"]);
                    }
                }).catch(error => {
                    //handle error
                    console.log(error);
                });

        } else {
            clearInterval(timeOut);
            window.close();
        }
    }, 5000);
}());
