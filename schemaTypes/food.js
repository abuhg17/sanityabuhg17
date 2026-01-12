export default {
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'amount', title: 'Amount', type: 'number' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'shop', title: 'Shop', type: 'string' },
    { name: 'todate', title: 'ToDate', type: 'date' },
    { name: 'photourl', title: 'Photo URL', type: 'url' },
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'photohash', title: 'Photo Hash', type: 'string' }
  ]
}