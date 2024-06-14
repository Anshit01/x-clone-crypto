import LeftSidebar from 'components/LeftSidebar'
import RightSidebar from 'components/RightSidebar'
import './App.css'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="w-full max-w-screen-xl justify-center flex flex-row">
      <div className="flex-auto w-[30%] lg:w-[20%] hidden sm:block">
        <LeftSidebar />
      </div>
      <div className="sm:flex-auto w-full sm:w-[70%] lg:w-[50%] px-12 pt-4">
        <Profile />
      </div>
      <div className="flex-auto w-[30%] hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
