module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "gatsby-learning-bucket",
      },
    },
  ],
};
