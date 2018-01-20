
export const createBgImg = ({ path, position, size }) => ({
  background: `url(/assets/${path}) center center / ${size || 'contain'} no-repeat`
})
