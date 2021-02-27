import json
from collections import OrderedDict
f = open("./data.txt", "r")
json_path = "./data_json.json"
count = 1
data = {}

while True:
    r = f.readline()
    if not r:
        break
    print(r.strip())
    data[count] = []
    data[count].append({
        'quiz': r.strip(),
    })
    count = count + 1
# Print JSON
print(data)

with open('./data_json.json', 'w', encoding="utf-8") as out_file:
    json.dump(data, out_file, ensure_ascii=False)
