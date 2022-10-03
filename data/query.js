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
  primaryMenus {
    data {
      id,
      attributes {
        name,
        slug
      }
    }
  },
  categories {
    data {
      id,
      attributes {
        name,
        slug,
      }
    }
  },
  footers {
    data {
      id,
      attributes {
        name,
        slug,
      }
    }
  },
  socials {
    data {
      id,
      attributes {
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
}
`;

export const GET_CATEGORY_QUERY = `
  query getCategory($slug: String!, $position: String!) {
    categories(filters: {slug: { eq: $slug}}) {
      data {
        id,
        attributes {
          name,
          slug,
          posts(filters: {position: {eq: $position}}) {
            data {
              id,
              attributes {
                title,
                description,
                slug,
                position,
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

export const MENUS_QUERY = `
  query {
    footers {
      data {
        id,
        attributes {
          name,
          slug,
        }
      }
    },
    socials {
      data {
        id,
        attributes {
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
    primaryMenus {
      data {
        id,
        attributes {
          name,
          slug
        }
      }
    },
  }
`;