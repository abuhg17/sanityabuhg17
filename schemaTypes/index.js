import food from './food'
import subscription from './subscription'

export const schemaTypes = [
  food,
  subscription,
  {
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid',
        },
      },
    ],
  },
  {
    name: 'videos',
    title: 'Videos',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'videos',
        title: 'Videos',
        type: 'array',
        of: [
          { 
            type: 'file',
            options: {
              accept: 'video/*', // 接受所有影片檔案
            },
          }
        ],
      },
    ],
  },
  {
    name: 'musics',
    title: 'Musics',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'musics',
        title: 'Musics',
        type: 'array',
        of: [
          { 
            type: 'file',
            options: {
              accept: 'audio/*', // 限制為所有音訊檔案
            },
          }
        ],
      },
    ],
  },
  {
    name: 'files',
    title: 'Files',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'files',
        title: 'Files',
        type: 'array',
        of: [{ type: 'file' }], // 不限制檔案類型
      },
    ],
  },
]