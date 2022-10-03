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
}
`;
