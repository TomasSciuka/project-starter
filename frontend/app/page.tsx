import Post from "@/app/components/Post";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const query = gql`
  query Posts {
    posts {
      data {
        attributes {
          name,
          shortDescription,
          description,
          featuredImage {
            data {
              attributes {
                url
              }
            }
          },
          slug
        }
      }
    }
  }
`

interface PostTypes {
  attributes: {
    name: string,
    shortDescription: string,
    description: string,
    slug: string,
    featuredImage: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

interface DataTypes {
  data: {
    posts: {
      data: Array<PostTypes>
    }
  }
}

export const revalidate = 5;
const Page = async () => {
  const { data }: DataTypes = await getClient().query(
    {
      query,
      context: {
        fetchOptions: {
          next: { revalidate: 5 }
        }
      }
    }
  );
  const posts = data?.posts?.data;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From sample blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Sample blog posts fetch with GraphQL and server side rendered with Next.js
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts?.map((post: PostTypes, index: number) => (
              <Post
                key={index}
                {...post.attributes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
