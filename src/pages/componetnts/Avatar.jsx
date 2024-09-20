import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import useLogout from "../../hooks/useLogout";


export default function Avatar() {
  const {logout} = useLogout();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="h-12 w-12">
        <img
          alt=""
          src="https://avatar-placeholder.iran.liara.run/logo.png"
          className="inline-block h-12 w-12 rounded-full border-2 border-gray-500"
        />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
            <MenuItem  >
              <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                onClick={logout}
              >
                Sign out
              </button>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
