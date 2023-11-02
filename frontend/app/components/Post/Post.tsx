interface Post {
  name: string,
  description: string,
  date: string,
  length: string,
  director: string,
  preview: string
}
const Post = ({ name, description, date, director, preview, length }: Post) => (
  <article key={name} className="flex max-w-xl flex-col items-start justify-between">
    <div className="flex items-center gap-x-4 text-xs">
      <time dateTime={date} className="text-gray-500">
        Release date: {date}
      </time>
    </div>
    <time className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
      Length: {length}
    </time>
    <img src={preview} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <span className="absolute inset-0" />
        {name}
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
    </div>
    <div className="relative mt-8 flex items-center gap-x-4">
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <span className="absolute inset-0" />
          {director}
        </p>
      </div>
    </div>
  </article>
)

export default Post
