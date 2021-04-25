export * from './auth'
export * from './product'

if(process.env.PROD) {
  export const API_PROD = process.env.API_PROD;
} else {
  export const API_DEV = process.env.API_DEV;
}
