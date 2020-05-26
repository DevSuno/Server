getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "style.css"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "testJS.js");
    request.onload = () => {
        //创建 script 标签
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => {};
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "testXml.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const text = request.responseXML.getElementsByTagName("warning")[0];
            console.log(text);
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "testJSON.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send();
};
