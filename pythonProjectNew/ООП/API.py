import requests

link = 'http://jservice.io/api/random'

def getInfo(a):
    response = requests.get(link)
    return response.json()

def game(a):
    date = getInfo(link)
    for key, values in date[0].items():
        if key == 'answer':
            answer = values
            print(values) # Проверочный ответ
        if key == 'question':
            print(f'Вопрос:{values}?')
            answerUser = input('ВВедите ответ:\t')
            if answer == answerUser:
                print('Верный ответ')
            else:
                print('Ответ не верный')
            proceed = input('Продолжить?\n Да = 1 или Нет = 0\n')
            if proceed == '1':
               game(date)
            else:
                print('Игра закончена!')
                break

game(link)