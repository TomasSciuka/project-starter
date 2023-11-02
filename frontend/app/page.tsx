import Post from "@/app/components/Post/Post";

const posts = []
const Page = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sample movies list</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
              This is an example movies list filled in Strapi CMS, stored in Postgres database and fetched through GraphQL.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Post {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
