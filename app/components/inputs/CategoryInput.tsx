import { IconType } from "react-icons"

interface CategoryInputProps{
    label: string,
    icon: IconType,
    selected?: boolean,
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    label,
    icon: Icon,
    selected,
    onClick
}) => {
  return (
    <div
    onClick={() => onClick(label)} 
    className={`
        flex 
        flex-col 
        gap-3
        rounded-xl
        border-2
        p-4
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
    `}>
        <Icon size={30} />
        <div className="font-semibold">
            {label}
        </div>
    </div>
  )
}

export default CategoryInput