import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {opacity: 1, scale: 1},
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
      variants={childVariant}
      transition={{duration: 0.5}}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {icon}
        </div>
      </div>

      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink
        className='font-sm font-bold text-primary-500 underline hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>

  )
} 

export default Benefit;