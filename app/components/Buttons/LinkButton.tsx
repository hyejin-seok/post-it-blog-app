import Link from 'next/link'
import {
  FiPlus,
  FiSkipBack,
  FiHome,
  FiEdit2,
  FiEye,
  FiTrash,
  FiX,
  FiFileText
} from 'react-icons/fi'

type LinkButtonProps = {
  text?: string
  href: string
  icon: 'add' | 'back' | 'blog' | 'cancel' | 'edit' | 'delete' | 'home' | 'view'
  classname?: string
}

const iconMap = {
  add: <FiPlus />,
  back: <FiSkipBack />,
  blog: <FiFileText />,
  cancel: <FiX />,
  edit: <FiEdit2 />,
  delete: <FiTrash />,
  home: <FiHome />,
  view: <FiEye />
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  icon,
  classname
}) => {
  return (
    <Link
      href={href}
      className={`${classname} inline-flex items-center gap-x-1 rounded-md border-2 border-double border-plt-hv bg-plt-btn px-1 py-2 text-center font-medium text-plt-txt shadow-md hover:bg-plt-hv hover:text-black md:px-3 md:text-lg`}
    >
      {iconMap[icon]}
      {text}
    </Link>
  )
}
