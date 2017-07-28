import sys
import os
import json
import numpy as np

from sklearn.linear_model import LinearRegression
from sklearn.neural_network import MLPRegressor

def main(data):
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
  reg = MLPRegressor(verbose=True)
  reg.fit(X, y)

  print(reg.score(X, y))

if __name__ == "__main__":
  dir_path = os.path.dirname(os.path.realpath(__file__)) + '/../../data'
  with open(dir_path + '/dummy.json') as data:
    data = json.load(data)

  main(data)
