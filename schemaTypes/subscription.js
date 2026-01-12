export default {
  name: 'subscription',
  title: 'Subscription',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'site', title: 'Site', type: 'url' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'nextdate', title: 'Next Date', type: 'date' },
    { name: 'note', title: 'Note', type: 'text' },
    { name: 'account', title: 'Account', type: 'string' }
  ]
}