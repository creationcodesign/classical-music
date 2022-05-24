import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Composer from './components/Composer'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/compositor/:name" element={<Composer />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}