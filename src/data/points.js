const points = [
  {
    id: 'aaa58766-79b1-4773-b44a-12acdfe8881d',
    basePrice: 1703,
    dateFrom: '2026-04-26T04:09:05.738Z',
    dateTo: '2026-04-27T04:25:05.738Z',
    destination: '43117485-a0d7-48a1-b2b3-8ced0f203ede',
    isFavorite: true,
    offers: [
      'b270d8dc-f643-4482-b448-39d145eaf890'
    ],
    type: 'bus'
  },
  {
    id: 'e009a1cb-63c0-40c2-a13f-127ef4bc0097',
    basePrice: 3271,
    dateFrom: '2026-04-28T01:33:05.738Z',
    dateTo: '2026-04-28T23:52:05.738Z',
    destination: '0d0f25f7-360e-4f7a-8527-3245923b43de',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: '59dc2319-6222-4b6d-a00c-f46e3d213ef3',
    basePrice: 8874,
    dateFrom: '2026-04-29T09:40:05.738Z',
    dateTo: '2026-04-30T19:26:05.738Z',
    destination: 'fd6934d9-3fbb-4c2f-8673-1be933c460e8',
    isFavorite: true,
    offers: [],
    type: 'bus'
  },
  {
    id: '02c70bd6-924b-43be-8953-d230d2f115b2',
    basePrice: 3750,
    dateFrom: '2026-05-01T20:57:05.738Z',
    dateTo: '2026-05-03T12:19:05.738Z',
    destination: 'f23c9d22-b780-4f18-98a2-339f9293c292',
    isFavorite: true,
    offers: [],
    type: 'train'
  },
  {
    id: '6856109c-7a38-4a82-a322-985c98896c21',
    basePrice: 3108,
    dateFrom: '2026-05-04T16:07:05.738Z',
    dateTo: '2026-05-05T03:47:05.738Z',
    destination: '43117485-a0d7-48a1-b2b3-8ced0f203ede',
    isFavorite: true,
    offers: [
      '727171de-34e9-4073-833a-7a21159d2f76',
      '88b1bac1-2953-4810-bbe4-4e08dbc0fdea'
    ],
    type: 'train'
  },
  {
    id: '62a2bdc3-6a93-4587-b84d-fe75364615f0',
    basePrice: 2234,
    dateFrom: '2026-05-06T19:42:05.738Z',
    dateTo: '2026-05-08T00:46:05.738Z',
    destination: '8e3e6f35-8e6b-477a-9a17-824022dc14fb',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: '6b8bebe0-6aee-40b9-bda5-86c07450ce78',
    basePrice: 7157,
    dateFrom: '2026-05-08T19:49:05.738Z',
    dateTo: '2026-05-10T15:29:05.738Z',
    destination: 'fd6934d9-3fbb-4c2f-8673-1be933c460e8',
    isFavorite: false,
    offers: [
      '23f2b4e9-504b-43c4-89e9-c2edbbe1f285',
      '0712d75d-bada-4b31-87b0-63deac1dcd0a',
      'b270d8dc-f643-4482-b448-39d145eaf890'
    ],
    type: 'bus'
  },
  {
    id: 'baadd111-a1c0-453d-bc1d-7d4bbf5ee0cd',
    basePrice: 9812,
    dateFrom: '2026-05-11T07:39:05.738Z',
    dateTo: '2026-05-11T23:48:05.738Z',
    destination: '685af9e8-8a9e-4332-a58f-acb878dd173c',
    isFavorite: true,
    offers: [
      '46d1f98f-c2b5-4ec9-b04d-a9210665c276',
      '93b138fa-a2c9-4786-b4e8-b012c4e9b958',
      '7b2715be-4d0b-47f6-b8a2-8a26fda6fa28',
      '9137c9c9-35f2-4a4b-9310-49e33579b41e',
      '3ee1bdb1-dfc1-4478-b8cb-bcea6474a74a'
    ],
    type: 'taxi'
  },
  {
    id: '1d49df12-f74b-46fc-95c4-f6e997be1f38',
    basePrice: 6438,
    dateFrom: '2026-05-13T15:02:05.738Z',
    dateTo: '2026-05-14T14:26:05.738Z',
    destination: '0335aae9-ab34-466e-98d3-ff5f10a41c64',
    isFavorite: true,
    offers: [
      '6408a3b8-d123-49e2-8aba-3b1339c62aae'
    ],
    type: 'restaurant'
  },
  {
    id: '37e66bcd-bc4b-4fc8-a3e3-e0a65c1c5161',
    basePrice: 6785,
    dateFrom: '2026-05-16T07:22:05.738Z',
    dateTo: '2026-05-17T23:41:05.738Z',
    destination: 'bd5b489f-927c-4360-90db-ff4dfbf68e37',
    isFavorite: true,
    offers: [
      '21f1c2d4-d385-4c82-82f8-402e39ac19d4',
      '4266eb90-4764-467e-a0bc-16d84d985bfa',
      '6ccc3739-e92d-4772-a6ea-3445cd67cb7e',
      'b4e7f961-d468-45fc-a12d-4ae3db67ec70',
      'b6ef10b3-4761-4b37-b1e5-ee2e7b649a4e'
    ],
    type: 'ship'
  },
  {
    id: '25e8e52c-93f2-42c9-83e2-16b0499a8410',
    basePrice: 3061,
    dateFrom: '2026-05-19T18:31:05.738Z',
    dateTo: '2026-05-21T09:05:05.738Z',
    destination: 'ee7b7a90-7b44-4c1e-8d6a-b2ce48ba44de',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '1230e9db-a3d7-4da4-b18b-5a433077f14a',
    basePrice: 7386,
    dateFrom: '2026-05-23T05:58:05.738Z',
    dateTo: '2026-05-25T03:04:05.738Z',
    destination: '0335aae9-ab34-466e-98d3-ff5f10a41c64',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '7c80fb76-a996-4ed1-82fa-342419121e95',
    basePrice: 1183,
    dateFrom: '2026-05-26T22:05:05.738Z',
    dateTo: '2026-05-27T20:07:05.738Z',
    destination: '43117485-a0d7-48a1-b2b3-8ced0f203ede',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '6d722d54-a06e-4aa6-b244-999e2015d7ff',
    basePrice: 7353,
    dateFrom: '2026-05-28T20:14:05.738Z',
    dateTo: '2026-05-30T11:49:05.738Z',
    destination: 'f23c9d22-b780-4f18-98a2-339f9293c292',
    isFavorite: false,
    offers: [
      '727171de-34e9-4073-833a-7a21159d2f76',
      '88b1bac1-2953-4810-bbe4-4e08dbc0fdea'
    ],
    type: 'train'
  },
  {
    id: '0802fa6c-8e0d-4ffa-92d4-423ac72ff4c0',
    basePrice: 2052,
    dateFrom: '2026-05-31T14:53:05.738Z',
    dateTo: '2026-06-01T18:21:05.738Z',
    destination: '895224ab-a2fb-4e51-925c-f6312c4bacba',
    isFavorite: false,
    offers: [
      '6408a3b8-d123-49e2-8aba-3b1339c62aae'
    ],
    type: 'restaurant'
  },
  {
    id: 'eca46bd4-00b1-4519-95d9-9756c9b9f0ea',
    basePrice: 4438,
    dateFrom: '2026-06-03T08:39:05.738Z',
    dateTo: '2026-06-04T13:17:05.738Z',
    destination: '895224ab-a2fb-4e51-925c-f6312c4bacba',
    isFavorite: true,
    offers: [],
    type: 'taxi'
  },
  {
    id: '60413337-01c4-417f-b03d-76eab57b8376',
    basePrice: 7799,
    dateFrom: '2026-06-05T12:03:05.738Z',
    dateTo: '2026-06-06T17:36:05.738Z',
    destination: 'f23c9d22-b780-4f18-98a2-339f9293c292',
    isFavorite: true,
    offers: [
      '8a13a596-2123-4551-9566-d2c1b530589a',
      'f6137790-2256-48cf-a9c8-267838a425d4',
      '0a0f53ea-9b6c-4118-b04a-e7d9b64a4969'
    ],
    type: 'check-in'
  },
  {
    id: '5c1e4d1d-08cf-46c2-8641-dd6df51719e9',
    basePrice: 609,
    dateFrom: '2026-06-07T21:50:05.738Z',
    dateTo: '2026-06-08T21:10:05.738Z',
    destination: '0335aae9-ab34-466e-98d3-ff5f10a41c64',
    isFavorite: true,
    offers: [
      '727171de-34e9-4073-833a-7a21159d2f76',
      '88b1bac1-2953-4810-bbe4-4e08dbc0fdea'
    ],
    type: 'train'
  },
  {
    id: 'cb17362a-f906-4f6e-b06b-6035bcd392ed',
    basePrice: 2553,
    dateFrom: '2026-06-09T20:01:05.738Z',
    dateTo: '2026-06-10T20:34:05.738Z',
    destination: '895224ab-a2fb-4e51-925c-f6312c4bacba',
    isFavorite: true,
    offers: [],
    type: 'check-in'
  },
  {
    id: '31954c61-77b6-40c3-a98e-a708294945cb',
    basePrice: 2791,
    dateFrom: '2026-06-12T01:49:05.738Z',
    dateTo: '2026-06-12T11:32:05.738Z',
    destination: '8e3e6f35-8e6b-477a-9a17-824022dc14fb',
    isFavorite: true,
    offers: [
      'b4e7f961-d468-45fc-a12d-4ae3db67ec70',
      'b6ef10b3-4761-4b37-b1e5-ee2e7b649a4e'
    ],
    type: 'ship'
  },
  {
    id: '43243aa0-06dd-47b5-9844-3bb6d2053a9d',
    basePrice: 941,
    dateFrom: '2026-06-13T11:02:05.738Z',
    dateTo: '2026-06-14T11:54:05.738Z',
    destination: 'bd5b489f-927c-4360-90db-ff4dfbf68e37',
    isFavorite: false,
    offers: [
      '569d3b2c-edcc-4b47-b55f-f601dfebe884',
      '6408a3b8-d123-49e2-8aba-3b1339c62aae'
    ],
    type: 'restaurant'
  },
  {
    id: 'b338e4e4-6606-47fd-b2a8-e1df3188c374',
    basePrice: 364,
    dateFrom: '2026-06-15T13:51:05.738Z',
    dateTo: '2026-06-16T14:40:05.738Z',
    destination: 'f23c9d22-b780-4f18-98a2-339f9293c292',
    isFavorite: false,
    offers: [
      '46d1f98f-c2b5-4ec9-b04d-a9210665c276',
      '93b138fa-a2c9-4786-b4e8-b012c4e9b958',
      '7b2715be-4d0b-47f6-b8a2-8a26fda6fa28',
      '9137c9c9-35f2-4a4b-9310-49e33579b41e',
      '3ee1bdb1-dfc1-4478-b8cb-bcea6474a74a'
    ],
    type: 'taxi'
  },
  {
    id: '804b10d0-38a6-48e3-ac36-be5d74ca62b1',
    basePrice: 5137,
    dateFrom: '2026-06-17T12:39:05.738Z',
    dateTo: '2026-06-18T23:30:05.738Z',
    destination: '895224ab-a2fb-4e51-925c-f6312c4bacba',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '5c750ef2-214e-461a-9b63-f8d91022c9d0',
    basePrice: 6926,
    dateFrom: '2026-06-19T16:01:05.738Z',
    dateTo: '2026-06-20T13:38:05.738Z',
    destination: '685af9e8-8a9e-4332-a58f-acb878dd173c',
    isFavorite: false,
    offers: [
      '6ccc3739-e92d-4772-a6ea-3445cd67cb7e',
      'b4e7f961-d468-45fc-a12d-4ae3db67ec70',
      'b6ef10b3-4761-4b37-b1e5-ee2e7b649a4e'
    ],
    type: 'ship'
  },
  {
    id: '32f8f799-6bb4-4b6b-9e36-41774a6b4fb1',
    basePrice: 8045,
    dateFrom: '2026-06-22T08:55:05.738Z',
    dateTo: '2026-06-23T15:31:05.738Z',
    destination: '0d0f25f7-360e-4f7a-8527-3245923b43de',
    isFavorite: true,
    offers: [],
    type: 'ship'
  }
];

export { points };

