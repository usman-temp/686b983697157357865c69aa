export const authorData = {
  name: 'John Doe',
  role: 'Lead Developer',
  bio: 'A passionate developer with 10+ years of experience in building scalable web applications.',
  profileImage: '/vercel.svg'
};

export default function AboutUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <div className="author-section" data-testid="author-section">
          <p className="text-lg text-gray-600">
            Meet our lead developer: <span className="font-semibold author-name">{authorData.name}</span>
          </p>
        </div>
      </div>
    </section>
  );
}