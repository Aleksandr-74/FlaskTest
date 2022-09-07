from flask import Flask, render_template, request, redirect, url_for
import csv
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, InputRequired, Length
from DataBase import DataBase
from User import User


app = Flask(__name__)
app.config['SECRET_KEY'] = 'Yo'

listUser = []

class MessageForm(FlaskForm):
    name = StringField("name: ", validators=[DataRequired(), Length(min=1, max=30, message=None)])
    surname = StringField("surname: ", validators=[DataRequired(), Length(min=1, max=30, message=None)])
    email = StringField("email: ", validators=[])
    password = StringField("password: ", validators=[InputRequired(), Length(max=30, message=None)])
    submit = SubmitField("submit")


@app.route("/forms", methods=['GET', 'POST'])
def forms():
    form = MessageForm()
    if form.validate_on_submit():
        name = form.name.data
        surname = form.surname.data
        email = form.email.data
        password = form.password.data
        user = User(name, surname, email, password)
        listUser.append(user)
        print(len(listUser))
        return redirect(url_for('forms'))

    return render_template("form.html", form=form, User=User)




@app.route("/")
@app.route("/citi", methods=['GET', 'POST'])
def citis():
    if request.method == 'POST':
         with open('B:\git\Test\\flask\static\Base.csv', mode='r+', encoding='UTF-8', newline='') as csv:
            email = request.form.get('email')
            password = request.form.get('password')
            if email != "" in password != "":
                user = User(email, password)
                print(user)
                uz = DataBase(csv, user)
                if uz.authentication():
                    outs = f'user:  {email} авторизировался'
                    return render_template('index.html', outs=outs,  user=user, email=email)
                outs = f"user: {email} добавден!"
                uz.newUser()
                return render_template('index.html', outs=outs)
            outs = "Введите данные!"
            return render_template('index.html', outs=outs)
    return render_template('index.html')


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'POST':
       pass



    return render_template("user.html", listUser=listUser)



@app.route('/citi/small')
def parserSmall():
    with open('B:\git\Test\\flask\static\small towns.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template("small towns.html", reader=reader)


@app.route('/citi/medium')
def parserMedium():
    with open('B:\git\Test\\flask\static\medium cities.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template("medium cities.html", reader=reader)


@app.route('/citi/largest')
def parserLargest():
    with open('B:\git\Test\\flask\static\largest cities.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template("largest cities.html", reader=reader)


@app.route('/citi/millionaires')
def parserMillionaires():
    with open('B:\git\Test\\flask\static\cities millionaires.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template("cities millionaires.html", reader=reader)


@app.route('/citi/bigСities')
def parserBigСcities():
    with open('B:\git\Test\\flask\static\\bigСcities.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template("bigСcities.html", reader=reader)


@app.route('/citi/big_cities')
def parserBig_cities():
    with open('B:\git\Test\\flask\static\\big_cities.csv', mode='r', encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        return render_template('big_cities.html', reader=reader)


if __name__ == '__main__':
    app.run()
