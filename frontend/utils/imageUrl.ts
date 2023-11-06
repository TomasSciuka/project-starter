const urlBuilder = (src: string) => {
  return `${process.env.STRAPI_URL}${src}`
}

export default urlBuilder;