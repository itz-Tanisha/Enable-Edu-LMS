"use client";

import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import { 
  FcLineChart, 
  FcScience, 
  FcReading, 
  FcSportsClub, 
  FcTechnology 
} from "react-icons/fc";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Accessible Mathematics": FcLineChart, // Line chart for mathematics
  "Adaptive Science": FcScience, // Science flask for science
  "Inclusive Language Arts": FcReading, // Book for language arts
  "Adapted Physical Education": FcSportsClub, // Sports club for physical education
  "Digital Literacy and Computer Science": FcTechnology, // Technology icon for computer science
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
