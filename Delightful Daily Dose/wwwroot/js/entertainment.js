function loadEntertainmentNews() {
    window.fetch(`Entertainment/GetEntertainmentNews`).then((response) => {
        response.json().then((data) => {
            let mainArticle = document.getElementById("main-article");
            let secondArticle = document.getElementById("second-article");
            let articles = document.getElementById("articles");
            if (data["results"][0]["image_url"] !== null)
                mainArticle.innerHTML += `<img width="300" src="${data["results"][0]["image_url"]} " alt="no image available"/>`;
            mainArticle.innerHTML += `<img width="300" src="${data["results"][0]["image_url"]}" alt="no image available"/>
                <h5><a target="_blank" href="${data["results"][0]["link"]}">${ data["results"][0]["title"]}</a></h5>
                <h6>${data["results"][0]["description"]}</h6>`;
            if (data["results"][1]["image_url"] !== null)
                secondArticle.innerHTML += `<img width="300" src="${data["results"][1]["image_url"]} " alt="no image available"/>`;
            secondArticle.innerHTML = `<img width="300" src="${data["results"][1]["image_url"]}" alt="no image available"/>
                <h5><a target="_blank" href="${data["results"][1]["link"]}">${ data["results"][1]["title"]}</a></h5>
                <h6>${data["results"][1]["description"]}</h6>`;
            for (let i = 2; i < data["results"].length; i++) {
                articles.innerHTML += `<div id="article-${i}"></div>`;
            }
            for (let i = 2; i < data["results"].length; i++) {
                let article = "article-" + i;
                let articleToFill = document.getElementById(article);
                articleToFill.innerHTML = `<h5><a href="${data["results"][i]["link"]}">${data["results"][i]["title"]}</a></h5>
                            <h6>${data["results"][i]["description"]}</h6>`;
            };
        });
    });
}

//loadEntertainmentNews();