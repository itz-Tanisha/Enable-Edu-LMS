"use client";

import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faAtom, 
  faLanguage, 
  faRunning, 
  faDesktop 
} from "@fortawesome/free-solid-svg-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Accessible Mathematics": faChartLine,
  "Adaptive Science": faAtom,
  "Inclusive Language Arts": faLanguage,
  "Adapted Physical Education": faRunning,
  "Digital Literacy and Computer Science": faDesktop,
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
          icon={<FontAwesomeIcon icon={iconMap[item.name]} />}
          value={item.id}
        />
      ))}
    </div>
  )
}
