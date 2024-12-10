import json

x = {
  "name": "Sudip",
  "age": 23,
  "city": "BBSR"
}

# convert into JSON:
y = json.dumps(x)

# the result is a JSON string:
print(y)