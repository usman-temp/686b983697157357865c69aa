import { config } from '@/app/config/config';

export default function AboutUs() {
  if (!config?.developerName) {
    return (
      <div className="p-4 bg-red-50 text-red-700" role="alert">
        Developer information is currently unavailable
      </div>
    );
  }

  return (
    <section aria-labelledby="about-heading" className="max-w-4xl mx-auto p-6">
      <h1 id="about-heading" className="text-3xl font-bold text-gray-900 mb-6">
        About Our Project
      </h1>
      <div className="space-y-4 text-gray-600">
        <p>
          This project is developed by{' '}
          <span className="font-semibold text-indigo-600" data-testid="developer-name">
            {config.developerName}
          </span>.
        </p>
        <p>
          Our mission is to create accessible and maintainable software solutions
          that prioritize user experience.
        </p>
      </div>
    </section>
  );
}
