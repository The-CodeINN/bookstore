import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icons/facebookIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import MailIcon from "../../assets/icons/mailIcon";

type Props = {
  className?: string;
  placeBottom?: boolean;
};

const SocialGroup = ({ className = "", placeBottom = false }: Props) => {
  return (
    <ul
      className={`${className} flex justify-center gap-x-4 py-2 ${
        placeBottom ? "mt-auto mb-0" : ""
      }`}
    >
      {socialData.map(({ id, title, href, icon }) => (
        <li key={id}>
          <Link
            to={href}
            title={title}
            className='rounded  bg-skin-gray bg-opacity-0 p-2 hover:bg-opacity-30'
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const socialData = [
  {
    id: 1,
    title: "Follow StocBookstore on Facebook",
    href: "https://web.facebook.com/emijere.richard",
    icon: (
      <FacebookIcon className='stroke-skin-dark stroke-2 opacity-80 hover:opacity-100' />
    ),
  },
  {
    id: 2,
    title: "Follow StocBookstore on Instagram",
    href: "https://www.instagram.com/richie_richy112/",
    icon: (
      <InstagramIcon className='stroke-skin-dark stroke-2 opacity-80 hover:opacity-100' />
    ),
  },
  {
    id: 3,
    title: "Send StocBookstore an Email",
    href: "mailto:emijere.richard@gmail.com",
    icon: (
      <MailIcon className='stroke-skin-dark stroke-2 opacity-80 hover:opacity-100' />
    ),
  },
];

export default SocialGroup;
