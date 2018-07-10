'use strict';

// More information: https://www.omise.co/charge-schedules-api
var omise = require('../index')({
  'publicKey': 'pkey_test_58uputp2pjvubug0rza',
  'secretKey': 'skey_test_58uputp2xdsnktje7u4',
});

// Charge every 2 days
var chargeEvery2Days = {
  every:      2,
  period:     'day',
  start_date: '2018-01-01',
  end_date:   '2018-12-01',
  charge: {
    customer:    'cust_test_57m2wcnfx96k634rkqq',
    card:        'card_test_57m2w8iemdovs4f92m2',
    amount:      1000000,
    description: 'Membership fee',
  },
};

omise.schedules.create(chargeEvery2Days, function(err, schedule) {
  if (err) {
    console.log('error', err);
    return;
  }

  // Print out schedules
  console.log(schedule.next_occurrence_dates);
});

// Charge on eery Monday and Friday
var monthlyCharge = {
  every:      1,
  period:     'month',
  start_date: '2018-01-01',
  end_date:   '2018-12-01',
  on: {
    days_of_month: [1],
  },
  charge: {
    customer:    'cust_test_57m2wcnfx96k634rkqq',
    card:        'card_test_57m2w8iemdovs4f92m2',
    amount:      1000000,
    description: 'Membership fee',
  },
};

omise.schedules.create(monthlyCharge, function(err, schedule) {
  if (err) {
    console.log('error', err);
    return;
  }

  // Print out schedules
  console.log(schedule.next_occurrence_dates);
});
