import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Leticia-Martins.com
              </p>
              <p className="flex items-center justify-center text-sm text-zinc-400 dark:text-zinc-500">
                Desenvolvido com <FaRegHeart className="mx-1 text-red-600" /> e
                com{' '}
                <Link
                  className="mx-1 text-zinc-700"
                  target="_blank"
                  href="https://nextjs.org/"
                >
                  Next.js
                </Link>{' '}
                em Florianópolis / SC
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
