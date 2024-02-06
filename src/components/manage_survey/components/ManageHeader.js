import { SiManageiq } from 'react-icons/si'
import ManageSearchBar from './ManageSearchBar'

function ManageHeader() {
    return (
        <div className='pb-4 border-b-2 border-rose-400 relative flex justify-between items-center'>

            <h2 className="text-3xl font-bold  flex items-center gap-3">
                <button className="bg-red-300 text-neutral-800 btn text-3xl flex justify-center items-center" ><SiManageiq /></button>
                Manage Survey</h2>

            <ManageSearchBar />

        </div>
    )
}

export default ManageHeader