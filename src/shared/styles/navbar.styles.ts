import classNames from 'classnames'

const $s: Record<string, string> = {
  textSize: 'text-sm font-normal',
  textColor: 'text-black dark:text-gray-200',
  textActive: 'text-emerald-400',
  textHover: 'hover:text-gray-100 dark:hover:text-emerald-400',
  boxHover: 'hover:bg-gray-100 dark:hover:bg-zinc-700',
  boxSelected: 'bg-gray-100 dark:bg-zinc-700',
  boxBg: 'bg-gray-100 dark:bg-zinc-800',
  boxBorder:
    'rounded border border-zinc-800 bg-gray-100 shadow-md dark:bg-zinc-900',
}

export const navClass = classNames($s.boxBorder, 'p-4')
export const wrapperClass = classNames('mx-auto max-w-7xl px-2 sm:px-4 lg:px-6')

export const webContainerClass = classNames(
  $s.textColor,
  'flex items-center justify-between ',
  'py-1',
)
export const logoClass = classNames('flex-shrink-0')
export const webNavigationClass = classNames('hidden space-x-4 md:flex')

export const webNavItemClass = classNames($s.textHover, $s.textSize, 'py-2 ')

export const webNavGroupClass = classNames(
  'group relative py-2',
  'cursor-pointer',
)

export const webNavGroupItemClass = classNames('flex', $s.textSize)
export const webNavGroupItemWrapperClass = classNames(
  $s.boxBg,
  'group-hover:block',
  'absolute left-0 hidden w-40 rounded-md shadow-lg',
  'mt-2',
)
export const webNavGroupChildClass = (index: number, length: number) => {
  return classNames(
    index == 0 ? 'rounded-t' : index == length - 1 ? 'rounded-b' : '',
    'block',
    $s.boxHover,
    $s.textSize,
    'px-4 py-2',
  )
}
export const activeAltClass = classNames($s.boxSelected)
export const activeClass = classNames($s.textActive)
export const disableEvents = classNames('pointer-events-none')
