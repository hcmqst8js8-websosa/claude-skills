export default function BusinessForm() {
  return (
    <form className="space-y-6">

      <input
        className="w-full border p-3"
        placeholder="Business Idea"
      />

      <select className="w-full border p-3">
        <option>Ecommerce</option>
        <option>Newsletter</option>
        <option>SaaS</option>
        <option>Content Brand</option>
      </select>

      <input
        className="w-full border p-3"
        placeholder="Target Audience"
      />

      <textarea
        className="w-full border p-3"
        placeholder="Describe your idea"
      />

      <button className="bg-black text-white px-6 py-3">
        Build My Business
      </button>

    </form>
  )
}
