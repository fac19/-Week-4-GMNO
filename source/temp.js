function sharedLayout(bodyContent) {
    return `<!DOCTYPE html>
    <html lang="en">    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="public/style.css">
            <link href="https://fonts.googleapis.com/css?family=PT+Serif|Inconsolata|Karla:400,700&display=swap"rel="stylesheet">
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
            <input class="form__input" type="text" id="title" name="title" placeholder="Type your title" required>
            <label class="form__label" for="user-name">Your Name:</label>
            <input class="form__input" type="text" id="user-name" name="user-name" placeholder="Type your user name" required>
            <label class="form__label" for="textBox">Enter your blog post below:</label>
            <textarea class="form__textbox" form="form" id="textBox" name="textBox" placeholder="Let your imagination run free..." required></textarea>
            <button class="form__button" type=submit">Submit</button>
        </form>
    </section>`);
}


let str = ''; 

function submit(title, name, textBox) {
    let localStr = `
    <section class="display-post">
        <article class="post">
                <h2 class="post__info">${title}</h2>
                <p class="post__info--emph">Author: ${name}</p>
                <p class="post__textbox" >${textBox}</p>
                <button class="post-remove__button" aria-label="button to remove post" type="button">Remove Post</button>
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