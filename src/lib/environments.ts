const isDevEnvironment = () => {
  return process.env.NODE_ENV == 'development'
}

const isStagingEnvironment = () => {
  return process.env.NODE_ENV == 'staging'
}

const isProdEnvironment = () => {
  return process.env.NODE_ENV == 'production'
}

const getEnvironment = () => {
  return process.env.NODE_ENV
}

export { isDevEnvironment, isStagingEnvironment, isProdEnvironment, getEnvironment }
