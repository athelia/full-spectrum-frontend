export const getHostname = () => {
  const env = process.env.NODE_ENV
  let hostname = ''
  if (env == 'development') {
    hostname = '127.0.0.1:3000'
  } else if (env == 'production') {
    hostname = ''  // TODO: get production hostname when available
  }
  return hostname
}