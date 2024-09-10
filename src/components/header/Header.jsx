import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <header className="bg-teal-900 py-5 px-4 text-white  items-center">
        <div className="mx-auto items-center flex justify-between">
            <h1 className="text-[23px]">Redux & Redux Toolkit</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
