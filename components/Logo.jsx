import Image from 'next/image';

export default function Logo({ domain = '', logo }) {
  if (logo) {
    return (
      <Image
        src={logo}
        width={120}
        height={120}
        alt="Logo"
        className="d-inline-flex img-fluid mb-3 tw-pr-3"
      />
    );
  }

  const formattedDomain = domain
    ? domain.charAt(0).toUpperCase() + domain.slice(1)
    : 'YourSite';

  return (
    <span className="font-qwitcher font-bold text-7xl py-4">
      {formattedDomain}
    </span>
  );
}
