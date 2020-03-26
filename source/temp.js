function sharedLayout(bodyContent) {
    return `<!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="public/style.css">
            <title>Blog</title>
        </head>
        <body class="main">
            ${bodyContent}
        </body>
        <script src="public/script.js"></script>
    </html>
    `
}

function home() {
    return sharedLayout(`    
    <section class="form-wrapper">
        <form class="form" id="form" action="/blog-update" method="POST">
            <label class="form__label" for="title">Title:</label>
            <input class="form__input" type="text" id="title" name="title" placeholder="Type your title">
            <label class="form__label" for="user-name">Your Name:</label>
            <input class="form__input" type="text" id="user-name" name="user-name" placeholder="Type your user name">
            <label class="form__label" for="textBox">Enter your blog post below.</label>
            <textarea class="form__input form__textbox" form="form" id="textBox" name="textBox" placeholder="Let your imagination run free..."></textarea>
            <button class="form__button" type=submit">Submit</button>
        </form>
    </section>`);
}


let str = ''; 

function submit(title, name, textBox) {
    let localStr = `
    <section class="display-post">
        <article class="post">
            <div class="post__info">
                <h2>${title}</h2>
                <p>Author: ${name}</p>
            </div>26
            <div class="post__textbox">
                <p>${textBox}</p>
            </div>
        </article>
    </section>
    `;

    str += localStr;

    return sharedLayout(str);
}

function missing() {
    
}

module.exports = {
    home,
    submit,
    missing
}