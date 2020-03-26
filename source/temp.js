function sharedLayout(bodyContent) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Blog</title>
    </head>
    <body>
        ${bodyContent}
    </body>
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

function submit() {

}

function missing() {

}

module.exports = {
    home,
    submit,
    missing
}