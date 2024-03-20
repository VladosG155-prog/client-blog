'use client'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

import { usePathname, useRouter } from '../../../../navigation'
import { Button } from '../../ui/Button'

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const locale = useLocale()

  const [isPending, startTransition] = useTransition()
  const params = useParams()
  const onChangeLocale = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale === 'ru' ? 'en' : 'ru' }
      )
    })
  }

  return (
    <div>
      <Button onClick={onChangeLocale}>gagaga</Button>
    </div>
  )
}
