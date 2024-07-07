import { FiPlus, FiEdit2, FiTrash, FiSend, FiUpload } from 'react-icons/fi'
import { MdBookmarkAdd, MdBookmarkRemove } from 'react-icons/md'

type SubmitButtonProps = {
  type: 'button' | 'submit'
  text: string
  icon?: 'add' | 'edit' | 'mark' | 'marked' | 'delete' | 'send' | 'upload'
  classname?: string
  onClick?: () => void
  disabled?: boolean
}

const iconMap = {
  add: <FiPlus />,
  edit: <FiEdit2 />,
  delete: <FiTrash />,
  mark: <MdBookmarkAdd />,
  marked: <MdBookmarkRemove />,
  send: <FiSend />,
  upload: <FiUpload />
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  icon,
  classname,
  onClick,
  type,
  disabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classname} inline-flex items-center justify-center gap-x-1 rounded-md border-2 border-double border-plt-hv bg-plt-btn px-1 py-2 text-center font-medium text-plt-txt shadow-md hover:bg-plt-hv hover:text-black md:px-3 md:text-lg`}
    >
      {icon ? iconMap[icon] : null}
      {text}
    </button>
  )
}
