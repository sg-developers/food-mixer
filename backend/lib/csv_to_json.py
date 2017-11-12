import csv


def convert(filepath):
    with open(filepath) as f:
        a = [{k: v for k, v in row.items()}
             for row in csv.DictReader(f, skipinitialspace=True)]
        return a
