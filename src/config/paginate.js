const mongoosePaginate = require('mongoose-paginate-v2');

mongoosePaginate.paginate.options = {
  limit: 2,
  sort: { name: 'asc' }
};

export default mongoosePaginate;
