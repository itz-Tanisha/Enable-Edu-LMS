import { Category } from "@prisma/client";
import {
  FaRegLightbulb,
  FaRegKeyboard,
  FaRegNewspaper,
  FaRegHeart,
  FaRegStar,
  FaRegUser,
  FaRegPlayCircle
} from "react-icons/fa";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Accessible Mathematics": FaRegStar,
  "Adaptive Science": FaRegLightbulb,
  "Inclusive Language Arts": FaRegKeyboard,
  "Adapted Physical Education": FaRegHeart,
  "Digital Literacy and Computer Science": FaRegUser,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}
