import urlBuilder from '../../../utils/imageUrl'

interface Post {
  name: string,
  shortDescription: string,
  slug: string,
  featuredImage: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}
const Post = ({ name, shortDescription, slug, featuredImage }: Post) => (
  <article className="relative isolate flex flex-col gap-8 lg:flex-row">
    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      <img
        src={urlBuilder(featuredImage?.data?.attributes?.url)}
        alt=""
        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div>
      <div className="group relative max-w-xl">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={`/${slug}`}>
            <span className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600">{shortDescription}</p>
      </div>
    </div>
  </article>
)

export default Post
