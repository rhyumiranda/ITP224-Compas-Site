import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="wrapper w-full py-6 md:py-12">
      <div className="container mt-6 flex flex-col items-center justify-between gap-4 border-t py-6 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm text-gray-500 md:text-left">
          © {new Date().getFullYear()} Compass Adventures. All rights reserved.
        </p>
        <p className="text-center text-sm text-gray-500 md:text-left">
          compass@support.com
        </p>
      </div>
    </footer>
  )
}
