function myself(id) {
    setInfo(id);
    document.getElementById("info").onclick = function() {
        myInfo(id);
    };
    myInfo(id);
}

function others(id) {
    var dynamic = document.getElementById("dynamic");
    var chat = document.getElementById("chat");
    dynamic.style.display = "none";
    chat.style.display = "none";
    document.getElementById("info").onclick = function() {
        otherInfo(id);
    };
    setInfo(id);
    otherInfo(id);
}

function setInfo(id) {
    var headAvatar = document.getElementById("head-avatar");
    var headName = document.getElementById("head-name");
    var headIdentity = document.getElementById("head-identity");
    ajax({
        "url": "Image.php",
        "method": "GET",
        "data": {
            "Userid": id
        },
        "success": function(res) {
            var response = resToJson(res);
            if (response.result == "N") {
                document.write("404 NOT FOUND!");
                return;
            }
            headAvatar.src = response.userphoto;
            headName.innerHTML = response.username;
            headIdentity.innerHTML = response.identity;
        }
    })
}

function myInfo(id) {
    var container = document.getElementById("inner-body-right");
    document.getElementById("info").firstChild.style.color = "#fb7299";
    ajax({
        "url": "Image.php",
        "method": "GET",
        "data": {
            "Userid": id
        },
        "success": function(res) {
            var response = resToJson(res);
            container.innerHTML = "<div class='right-container'>ID：" + response.userid + "<br><br>昵称：" + response.username + "<br><br>身份：" + response.identity + "<br><br>性别：" + response.sex + "<br><br>生日：" + response.birth + "<br><br>QQ：" + response.QQ + "<br><br>电子邮箱：" + response.email + "<br><br><button class='blueButton' onclick=\"location.href=\'modify.html\'\">修改个人信息</button></div>";
        }
    })
}

function otherInfo(id) {
    var container = document.getElementById("inner-body-right");
    document.getElementById("info").firstChild.style.color = "#fb7299";
    ajax({
        "url": "Image.php",
        "method": "GET",
        "data": {
            "Userid": id
        },
        "success": function(res) {
            var response = resToJson(res);
            container.innerHTML = "<div class='right-container'>ID：" + response.userid + "<br><br>昵称：" + response.username + "<br><br>身份：" + response.identity + "<br><br>性别：" + response.sex + "<br><br>生日：" + response.birth + "<br><br>QQ：" + response.QQ + "<br><br>电子邮箱：" + response.email + "</div>";
        }
    })
}