import csv
import re
with open('B:\git\pythonProjectNew\ФАЙЛ\Crimes.csv', 'r', newline='') as csvFile:
    reader = csv.DictReader(csvFile)
    s = []
    primaryType = {}
    def getprimaryType(row):
        for value in row.values():
            if re.search(r'/2015', value):
                primaryType.update(row)
                return True
        return False

    def getList(primaryType):
        for key, value in primaryType.items():
            if re.search(r'Primary Type', key):
                s.append(value)
                return s

    def getMaxList(s):
        frequency = {}
        total = 0
        x = ''
        for i in s:
            if i not in frequency:
                frequency.update({i: 1})
            else:
                frequency.update({i: frequency[i] + 1})
        for key, value in frequency.items():
            if value > total:
                total = value
                x = key
        print(x)

    def primaryTypes(reader):
        for row in reader:
            if getprimaryType(row):
                getList(primaryType)
        getMaxList(s)

    primaryTypes(reader)



