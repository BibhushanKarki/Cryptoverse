import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '8d556744d6mshc2c30232c064e09p13d782jsnb1cf10fb614e'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos:builder.query({
      query:()=>createRequest('./coins')
    })
  })
})

export const {
  useGetCryptosQuery,
}=cryptoApi;