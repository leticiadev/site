import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre | Leticia Martins</title>
        <meta
          name="description"
          content="Saiba mais sobre Letícia Martins, engenheira de software e empreendedora em Florianópolis, Brasil, com foco em desenvolvimento web utilizando React e Next.js."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Sobre Mim
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Olá, sou Letícia Martins, engenheira de software e empreendedora
                baseada em Florianópolis, Brasil. Com uma paixão por tecnologia
                e inovação, dedico-me a criar soluções que fazem a diferença
              </p>
              <p>
                Ao longo da minha carreira, tenho trabalhado em projetos de
                desenvolvimento de software, sempre com o objetivo de trazer
                impacto positivo através da tecnologia.
              </p>
              <p>
                Atualmente, estou ativamente buscando conhecimentos na área do
                desenvolvimento web, explorando tecnologias modernas como React
                e Next.js.
              </p>
              <p>
                Acredito no poder da colaboração e estou sempre em busca de
                novas oportunidades para aprender e crescer, tanto
                profissionalmente quanto pessoalmente.
              </p>
              <p>
                Se você deseja trocar ideias, discutir projetos ou simplesmente
                dizer olá, sinta-se à vontade para entrar em contato. Você pode
                me encontrar no GitHub, LinkedIn, ou enviar um email
                diretamente. Estou sempre aberta a novas conexões e
                oportunidades!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/leticia-martins-dev/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/leticiadev"
                icon={GitHubIcon}
                className="mt-1 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="mailto:leticia@leticia-martins.com"
                icon={MailIcon}
                className="mt-1 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                leticia@leticia-martins.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
