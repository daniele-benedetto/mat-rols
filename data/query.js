export const HOME_QUERY = `
query {
  home {
    data {
      id,
      attributes {
        title,
        textLeft,
        textRight,
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  },
}
`;

export const GET_CATEGORY_QUERY = `
  query getCategory($slug: String!) {
    categories(filters: {slug: { eq: $slug}}) {
      data {
        id,
        attributes {
          name,
          slug,
          title,
          description,
          projects {
            data {
              id,
              attributes {
                title,
                description,
                slug,
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
  }
`;

export const GET_POST_QUERY = `
  query getPosts($slug: String!) {
    projects(filters: {slug: { eq: $slug}}) {
      data {
        id,
        attributes {
          title,
          slug,
          description,
          posts {
            data {
              id,
              attributes {
                title,
                description,
                slug,
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          },
          category {
            data {
              attributes {
                name, 
                slug,
              }
            }
          }
        }
      }
    },
  }
`;