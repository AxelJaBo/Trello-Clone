import { DeleteIcon } from '../icons/DeleteIcon'
import { Column, Id } from '../types'

type Props = {
    column: Column
    deleteColumn: (id: Id) => void
}

const ColumnContainer = (props: Props) => {
    const { column, deleteColumn } = props
    return (
        <div className='flex justify-between bg-columnBackgroundColor w-[200px] h-[300px] p-4'>
            {column.title}
            <button
                onClick={() => {
                    deleteColumn(column.id)
                }}
                className='h-fit bg-columnBackgroundColor'
            >
                <DeleteIcon />
            </button>
        </div>
    )
}

export { ColumnContainer };