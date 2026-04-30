 import './App.css'
 import {RecoilRoot , useRecoilValue} from 'recoil'
 import { jobsAtom , networkAtom , notificationAtom , messageAtom} from './stores/Atoms'

function App() {
  
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp () {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messageCount = useRecoilValue(messageAtom);


  return (

    <>
      <button>Home</button>

      <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>jobs({jobsAtomCount})</button>
      <button>Message({messageCount})</button>
      <button>Notifications ({notificationCount})</button>

      <button>Me</button>
    </>


  )
}

export default App
