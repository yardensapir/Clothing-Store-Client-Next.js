export const PRODUCTS_QUERY = `query{
    products{
      data{
        id
        attributes{
          title
          description
          slug
          price
          category
          selectSize
          image{
            data{
              attributes{
                formats
              }
            }
          }
          }
        }
      }
    }
  `;

