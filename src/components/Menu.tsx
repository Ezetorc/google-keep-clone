import { MenuButton } from './MenuButton'

export function Menu () {

  return (
    <aside className='w-full h-full col-span-1 row-[span_14_/_span_14] pt-[2%]'>
      <MenuButton
        toSection='notes'
        label='Notes'
      />
      <MenuButton
        toSection='trash'
        label='Trash'
      />
    </aside>
  )
}
