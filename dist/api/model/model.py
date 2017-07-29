import sys
import os
import json
import numpy as np

from sklearn.linear_model import LinearRegression
from sklearn.neural_network import MLPRegressor

def train(data):
  X = np.zeros((180, 17))
  y = np.zeros(180)
  curr = 0

  for room in data['rooms']:
    for row in room['data']:
      temp = np.zeros(17)

      if row['day'] == 'Monday':
        temp[0] = 1
      elif row['day'] == 'Tuesday':
        temp[1] = 1
      elif row['day'] == 'Wednesday':
        temp[2] = 1
      elif row['day'] == 'Thursday':
        temp[3] = 1
      elif row['day'] == 'Friday':
        temp[4] = 1

      # Assume that start time is 7 am and end time is 7 pm
      temp[int(row['time'][0:2]) - 2] = 1

      X[curr] = temp
      y[curr] = row['person_count']
      curr += 1

  # reg = LinearRegression()
  reg = MLPRegressor(verbose=False)
  reg.fit(X, y)

  return reg, reg.score(X, y)

def predict(reg, day):
  X = np.zeros((12, 17))
  curr = 0

  for i in range(5, 17):
    temp = np.zeros(17)

    if day == 'Monday':
      temp[0] = 1
    elif day == 'Tuesday':
      temp[1] = 1
    elif day == 'Wednesday':
      temp[2] = 1
    elif day == 'Thursday':
      temp[3] = 1
    elif day == 'Friday':
      temp[4] = 1

    temp[i] = 1
    X[curr] = temp
    curr += 1

  return np.ceil(reg.predict(X))

if __name__ == "__main__":
  dir_path = os.path.dirname(os.path.realpath(__file__)) + '/../../data'
  with open(dir_path + '/dummy.json') as data:
    data = json.load(data)

  reg, score = train(data)

  res = [score]
  if len(sys.argv) > 1:
    res.append(predict(reg, str(sys.argv)[1]).tolist())

  print(res)

