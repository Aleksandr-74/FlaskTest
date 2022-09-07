class User():
    def __init__(self, name, surname, email, password):
        self.name = name
        self.surname = surname
        self.email = email
        self.password = password

    def out(self):
        return {'name': {self.name}, 'surname': {self.surname}, 'email': {self.email}, 'password': {self.password}}

    def __str__(self):
        return f"name: {self.name}; surname: {self.surname}; email: {self.email}; password: {self.password}"