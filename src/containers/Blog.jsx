import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import IndividualBlog from '../components/IndividualBlog';

const GET_SINGLE_BLOG = gql`
  query getBlog($id: ID!) {
    blog: Post(id: $id){
      _id
      title
      author{
        name
        twitter
      }
      mainImage{
        asset{
          url
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

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { blog = {} } = data;

  return <IndividualBlog {...blog} />;
};

const Blog = (props) => {
  const { match: { params: { id } } } = props;

  return (
    <Query query={GET_SINGLE_BLOG} variables={{ id }}>
      {renderProp}
    </Query>
  );
};

export default Blog;