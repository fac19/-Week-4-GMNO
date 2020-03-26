function sharedLayout(bodyContent) {
    return `<!DOCTYPE html>
    <html lang="en">    
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="public/style.css">
        <title>Blog</title>
        </head>
        <body>
        ${bodyContent}
        </body>
        <script src="public/script.js"></script>
    </html>
    `
}

function home() {
    return sharedLayout(`    
    <section class="form-section">
    <form id="form" action="/blog-update" method="POST">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" placeholder="Type your title">
    <label for="user-name">Your Name:</label>
    <input type="text" id="user-name" name="user-name" placeholder="Type your user name">
    <label for="textBox">Enter your blog post below.</label>
    <textarea form="form" id="textBox" name="textBox" placeholder="Let your imagination run free..."></textarea>
    <button type="submit">Submit</button>
    </form>
    </section>`);
}


let str = ''; 

function submit(title, name, textBox) {
    let localStr = `
    <section class="display-post">
        <article>
            <h2>${title}</h2>
            <h3>${name}</h3>
            <p>${textBox}</p>
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