import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_BLOGS = gql`
  query getBlogs{
    blogs: allPosts(limit: 10 offset: 0) {
      _id
      title
    	author{
        name
      }
      mainImage{
       	asset{
          url
        }
        hotspot{
          height
          width
        }
        crop{
          _type
        }
      }
      categories{
        title
      }
    	bodyRaw
      slug{
        current
      }
      publishedAt
    } 
  }
`;

export const withBlogs = graphql(GET_BLOGS);