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
  query getCategory($slug: String!) {
    categories(filters: {slug: { eq: $slug}}) {
      data {
        id,
        attributes {
          name,
          slug,
          posts {
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