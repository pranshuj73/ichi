import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunDimIcon } from 'lucide-react'

export default function ThemeSwitcher({className}: {className?: string}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme} className={className}>
      {
        theme === 'dark' ? (
          <SunDimIcon />
        ) : (
          <MoonIcon />
        )
      }
    </button>
  )
}