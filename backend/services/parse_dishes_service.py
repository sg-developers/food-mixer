def call(raw_dishes=[]):
    response = {'metadata': {'count': 0}, 'dishes': []}
    for raw_dish in raw_dishes:
        dish = {}
        dish['title'] = raw_dish['Title']
        dish['directions'] = raw_dish['Directions']
        dish['category'] = raw_dish['Category']
        dish['ingredients'] = []
        for i in range(1, 19):
            i_suffix = str(i).zfill(2)
            name = raw_dish['Ingredient' + i_suffix]
            unit = raw_dish['Unit' + i_suffix]
            if not bool(name.strip()):
                continue
            if i == 1:
                quantity = raw_dish['Quantity']
            else:
                quantity = raw_dish['Quantity' + i_suffix]
            dish['ingredients'].append({
                'name:': name,
                'quantity': quantity,
                'unit': unit
            })
        response['metadata']['count'] += 1
        response['dishes'].append(dish)
    return response
