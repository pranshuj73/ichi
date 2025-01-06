import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";

export default function Nav({midBtnFunc}: {midBtnFunc?: () => void}) {
  const btnClasses = "px-4 py-2 hover:bg-black/5 dark:text-background"
  return (
    <nav className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center bg-primary rounded-xl overflow-hidden">
      <button className={btnClasses}>
        <ChevronLeftIcon />
      </button>
      <button className={btnClasses} onClick={midBtnFunc}>
        <PlusIcon />
      </button>
      <ThemeSwitcher className={btnClasses} />
    </nav>
  )
}