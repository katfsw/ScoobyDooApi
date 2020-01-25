
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: "Scoobert 'Scooby' Doo", gender: 'Male', imageurl: 'https://i.ibb.co/TM3yyhf/59f87a353cec115efb3623a4.png'},
        {id: 2, name: 'Shaggy Rogers', gender: 'Male', imageurl: 'https://i.ibb.co/kKPzKVd/59f87a063cec115efb36239f.png'},
        {id: 3, name: 'Fred Jones', gender: 'Male', imageurl: 'https://i.ibb.co/Bq3QWfR/59f879ff3cec115efb36239e.png'},
        {id: 4, name: 'Daphne Blake', gender: 'Female', imageurl: 'https://i.ibb.co/s32fYyw/59f879ef3cec115efb36239c.png'},
        {id: 5, name: 'Velma Dinkley', gender: 'Female', imageurl: 'https://i.ibb.co/Kq2Pc46/59f879e53cec115efb36239b.png'},
        {id: 6, name: 'Scrappy-Doo', gender: 'Male', imageurl: 'https://i.ibb.co/2jDwD6k/59f879973cec115efb362395.png'}
      ]);
    });
};
