export interface ProductInterface {
    id: string,
  attributes: {
    catagory: string;
    description: string;
    image: {
      data: {
        attributes: {
          formats: {
            small: {
              url: string;
            };
          };
        };
      };
    };
    price: number;
    slug: string;
    title: string;
  };
}
