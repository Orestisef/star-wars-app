//allows us to call the API, and it defines what field we can access the data by (swapi)
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
      // This type will contain remote schema Query type
      typeName: "SWAPI",
      // This is field under which it's accessible
      fieldName: "swapi",
      // Url to query from
      url: "https://api.graphcms.com/simple/v1/swapi",
      },
    }
  ]
}
