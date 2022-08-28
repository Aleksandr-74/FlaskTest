from flask import Flask, render_template

app = Flask(__name__)


@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/films")
def films():
    return render_template('films.html')


@app.route("/rating")
def rating():
    return render_template('rating.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


@app.route("/index/show")
def snow():
    return render_template('show.html')


if __name__ == '__main__':
    app.run()
