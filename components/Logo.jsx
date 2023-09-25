import Image from 'next/image';

export default function Logo({ domain, logo }) {
  if (logo != null && logo != '') {
    return <Image src={logo} width={120} height={120} alt="" className="d-inline-flex img-fluid mb-3 tw-pr-3" />;
  } else {
    return <><span className='font-qwitcher font-bold text-7xl py-4'>{domain.charAt(0).toUpperCase() + domain.substring(1)}</span></>;
  }
}
