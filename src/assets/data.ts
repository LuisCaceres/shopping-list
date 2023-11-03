const quantitiesInStock = {
  'Avocadoes': 0,
  'Bananas (5)': 0,
  'Tomatoes': 0.1,
  'Zuchinnis (750 grams)': 0.1,
  'Capsicums (1 kilo)': 0.65,
  'Cucumbers': 0.175,
  'Carrots (1 kilo)': 0.5,
  'Betroots': 0.525,
  'Swedes': 0.5,
  'Chokoes': 0.225,
  'Green beans': 0,
  'Whole pumpkin': 1.175,
  'Potatoes Washed Bag 2kg': 0.25,
  'Potatoes': 0.55,
  'Sweet Potatoes': 0.55,
  'Onions (1)': 1,
  'Chicken breasts': 0,
  'Turkey breasts': 0,
  'Wraps (8)': 0,
  'Quinoa (1 kilo)': 0.4,
  'Oat milk (1 liter)': 5,
  'Oats (1.5 kilos)': 1,
  'Oats (750 grams)': 2,
  'Basa fish': 0,
  'Salmon': 1.088,
  'Brown rice (5 kilos)': 8,
  'Chick Peas': 0,
  'Toothpaste': 9,
  'Tofu regular firm (900 grams)': 0,
  'Eggs (12)': 0.5,
  'Frozen corn (1 kilo)': 0.8,
  'Frozen peas (1 kilo)': 0,
  'Frozen broccolies (500 grams)': 2.5,
  'Frozen cauliflowers (500 grams)': 0,
  'Frozen brussel sprouts (500 grams)': 1.75,
  'Mixed berries (1 kilo)': 1.675,
};

const products = [
  {
    name: 'Avocadoes',
    costPerUnit: [1.3],
    id: 120080,
    quantityRequired: 2,
    unitType: 'items',
  },
  {
    name: 'Bananas (5)',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 5,
    unitType: 'kilos',
  },
  {
    name: 'Tomatoes',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 1,
    unitType: 'kilos',
  },
  {
    name: 'Zuchinnis (750 grams)',
    originalName: 'The Odd Bunch Zucchini Prepacked 750g',
    costPerUnit: [2.3],
    id: 825869,
    quantityRequired: 2,
    unitType: 'bags',
  },
  {
    name: 'Capsicums (1 kilo)',
    originalName: 'The Odd Bunch Capsicum Prepacked 1kg',
    costPerUnit: [3.9],
    id: 825870,
    quantityRequired: 1,
    unitType: 'bags',
  },
  {
    name: 'Cucumbers',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 1,
    unitType: 'kilos',
  },
  {
    name: 'Carrots (1 kilo)',
    originalName: 'The Odd Bunch Carrot Prepacked 1kg',
    costPerUnit: [1.2],
    id: 824508,
    quantityRequired: 1,
    unitType: 'bags',
  },
  {
    name: 'Betroots',
    costPerUnit: [6.5],
    id: -1,
    quantityRequired: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Swedes',
    costPerUnit: [7],
    id: -1,
    quantityRequired: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Chokoes',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 1.4,
    unitType: 'kilos',
  },
  {
    name: 'Green beans',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 0.3,
    unitType: 'kilos',
  },
  {
    name: 'Whole pumpkin',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 0.4,
    unitType: 'kilos',
  },
  {
    name: 'Potatoes Washed Bag 2kg',
    originalName: 'Woolworths Washed Potatoes Bag 2kg',
    costPerUnit: [4],
    id: 262783,
    quantityRequired: 1,
    unitType: 'bags',
  },
  {
    name: 'Potatoes',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 2.1,
    unitType: 'kilos',
  },
  {
    name: 'Sweet Potatoes',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 2.1,
    unitType: 'kilos',
  },
  {
    name: 'Onions (1)',
    costPerUnit: [0],
    id: -1,
    quantityRequired: 1,
    unitType: 'kilos',
  },

  // POULTRY
  {
    name: 'Chicken breasts',
    originalName: 'Woolworths Rspca Approved Chicken Breast Fillet Min. 250g',
    costPerUnit: [11],
    id: 710953,
    quantityRequired: 0.525,
    unitType: 'kilos',
  },
  {
    name: 'Turkey breasts',
    originalName: 'Ingham\'s Turkey Breast Strips 400g',
    costPerUnit: [8.5],
    id: 67763,
    quantityRequired: 1,
    unitType: 'packages',
  },

  // ANOTHER AISLE

  {
    name: 'Wraps (8)',
    originalName: 'Woolworths Wholegrain Wrap 8pk 360g',
    costPerUnit: [2.5],
    id: 634919,
    quantityRequired: 1,
    unitType: 'bags',
  },
  {
    name: 'Quinoa (1 kilo)',
    originalName: 'Macro White Quinoa 1kg',
    costPerUnit: [10],
    id: 499695,
    quantityRequired: 1,
    unitType: 'bags',
  },

  // BREAKFAST ITEMS
  {
    name: 'Oat milk (1 liter)',
    originalName: 'Macro Organic Oat Milk Unsweetened 1l',
    costPerUnit: [2.25],
    id: 150166,
    quantityRequired: 4,
    unitType: 'cartons',
  },
  {
    name: 'Oats (1.5 kilos)',
    originalName: 'Woolworths Australian Rolled Oats 1.5kg',
    costPerUnit: [2.60],
    id: 196293,
    quantityRequired: 2,
    unitType: 'bags',
  },
  {
    name: 'Oats (750 grams)',
    originalName: 'Woolworths Rolled Traditional Oats 750g',
    costPerUnit: [1.40],
    id: 150166,
    quantityRequired: 3,
    unitType: 'bags',
  },

  // SEAFOOD
  {
    name: 'Basa fish',
    originalName: 'Woolworths Freshwater Basa Fillets Thawed Per Kg',
    costPerUnit: [11],
    id: 87465,
    quantityRequired: 0.9,
    unitType: 'kilos',
  },
  {
    name: 'Salmon',
    originalName: 'Salmon Tasmanian Atlantic Fillets Skinned & Boned Per Kg',
    costPerUnit: [36],
    id: 126497,
    quantityRequired: 0.525,
    unitType: 'kilos',
  },

  // ANOTHER AISLE
  {
    name: 'Brown rice (5 kilos)',
    originalName: 'Sunrice Brown Rice 5kg',
    costPerUnit: [19],
    id: 126497,
    quantityRequired: 1,
    unitType: 'bags',
  },
  {
    name: 'Chick Peas',
    originalName: 'Woolworths Chickpeas No Added Salt 420g',
    costPerUnit: [1.1],
    id: 259399,
    quantityRequired: 2,
    unitType: 'cans',
  },

  // TOILETRIES
  {
    name: 'Toothpaste',
    originalName: 'All Smiles Total Care Toothpaste 140g',
    costPerUnit: [1.5],
    id: 581163,
    quantityRequired: 1,
    unitType: 'tubes',
  },

  // FROM THE FRIDGE
  {
    name: 'Tofu regular firm (900 grams)',
    originalName: 'Evergreen Original Tofu Regular Firm 900g',
    costPerUnit: [5.15],
    id: 119028,
    quantityRequired: 3,
    unitType: 'packages',
  },
  {
    name: 'Eggs (12)',
    originalName: 'Woolworths 12 Extra Large Free Range Eggs 700g',
    costPerUnit: [5.6],
    id: 175905,
    quantityRequired: 1,
    unitType: 'trays',
  },

  // FROM THE FREEZER
  {
    name: 'Frozen corn (1 kilo)',
    originalName: 'Woolworths Corn Kernels 1kg',
    costPerUnit: [4.2],
    id: 768570,
    quantityRequired: 0.5,
    unitType: 'bags',
  },
  {
    name: 'Frozen peas (1 kilo)',
    originalName: 'Essentials Frozen Peas 1kg',
    costPerUnit: [0],
    id: 96845,
    quantityRequired: 0.5,
    unitType: 'bags',
  },
  {
    name: 'Frozen broccolies (500 grams)',
    originalName: 'Woolworths Broccoli Florets 500g',
    costPerUnit: [3],
    id: 768559,
    quantityRequired: 3,
    unitType: 'bags',
  },
  {
    name: 'Frozen cauliflowers (500 grams)',
    originalName: 'Woolworths Cauliflower Florets 500g',
    costPerUnit: [3],
    id: 768560,
    quantityRequired: 3,
    unitType: 'bags',
  },
  {
    name: 'Frozen brussel sprouts (500 grams)',
    originalName: 'Woolworths Brussels Sprouts 500g',
    costPerUnit: [3],
    id: 768583,
    quantityRequired: 2,
    unitType: 'bags',
  },
  {
    name: 'Mixed berries (1 kilo)',
    originalName: 'Woolworths Frozen Mixed Berries 1kg',
    costPerUnit: [11],
    id: 768583,
    quantityRequired: 1,
    unitType: 'bags',
  },




  // //  COST  -  ID   -  STOCK   - REQUIRED -  PRODUCT - UNIT TYPE 

  // `10.00 - 120080 - 0.000 kg -        2 - Avocados`,
  // `00.00 - ?????? - 0.000 kg -        5 - Bananas`,
  // `00.00 - ?????? - 0.000 kg - 1.000 kg - Tomatoes`,
  // `00.00 - 825869 - 0.000 kg - 1.500 kg - Zucchinis`,
  // `00.00 - 825870 - 0.000 kg - 1.000 kg - Capsicums`,
  // `00.00 - ?????? - 0.000 kg - 1.000 kg - Cucumbers`,
  // `00.00 - 824508 - 0.000 kg - 1.000 kg - Carrots`,
  // `00.00 - ?????? - 0.000 kg - 1.400 kg - Beetroots`,
  // `00.00 - ?????? - 0.000 kg - 1.400 kg - Swedes`,
  // `00.00 - ?????? - 0.000 kg - 1.400 kg - Chokoes`,
  // `00.00 - ?????? - 0.000 kg - 0.300 kg - Green beans`,
  // `00.00 - ?????? - 0.000 kg - 0.400 kg - Whole pumpkin`,
  // `00.00 - ?????? - 0.000 kg - 2.100 kg - Potatoes`,
  // `00.00 - ?????? - 0.000 kg - 2.100 kg - Sweet potatoes`,
  // `00.00 - ?????? - 0.000 kg -        1 - Onions`,

  // `00.00 - 710953 - 0.600 kg - 1.050 kg - Chicken breasts`,
  // `00.00 -  67763 - 0.400 kg - 0.800 kg - Turkey breasts`,

  // `00.00 - 634919 -        0 -        1 - Bag of wraps`,
  // `00.00 - 499695 -        0 -        1 - Bag of quinoa (1 kg)`,

  // `00.00 - 779134 - 0 - 4 or 3.850 lt  - Carton of almond milk (1 lt)`,
  // `00.00 - 321220 - 0 - 3 or 1.750 kg  - Bag of oats (0.750 kg)`,

  // `00.00 -  87465 - 0.425 kg - 1.800 kg - Basa fish`,
  // `00.00 - 126497 - 0.525 kg - 1.050 kg - Salmon`,

  // `00.00 - 750029 - 0 - 1 or 3.150 kg  - Bag of rice (5 kg)`,
  // `00.00 - 259399 - 0.000 kg - 0.600 kg - Chick peas`,

  // `00.00 - 581163 - 0 - 1              - Tube of toothpaste`,

  // `00.00 - 119028 - 0 - 3 or 2.100 kg  - Package of tofu (0.900 kg) ORIGINAL REGULAR FIRM`,
  // `00.00 - 175905 - 0 - 1 or 7 eggs    - Package of eggs (12 eggs / 0.700 kg)`,

  // `00.00 - 768570 - 0.300 kg - 0.500 kg - Frozen corn`,
  // `00.00 -  96845 - 0.200 kg - 0.500 kg - Frozen peas`,
  // `00.00 - 768559 - 0.000 kg - 1.500 kg - Frozen broccolies`,
  // `00.00 - 768583 - 0.000 kg - 1.000 kg - Frozen brussel sprouts`,
  // `00.00 - 768560 - 0.000 kg - 1.500 kg - Frozen cauliflowers`,

  // `00.00 - 586517 - 2 - 1 or 0.900 kg  - Bag of mixed berries (1 kg)`,

];

products.forEach(product => {
  product.inCart = false;
  product.quantityInCart = 0;
  product.quantityInStock = quantitiesInStock[product.name];
});

export {
    products,
}