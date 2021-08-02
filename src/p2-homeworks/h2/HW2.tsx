import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high" | "middle" | "low";
export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType;
}
export type FilterType = 'all' | AffairPriorityType
export type DefaultAffairs = Array<AffairType>

// constants
const defaultAffairs: DefaultAffairs = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: DefaultAffairs, filter: FilterType): DefaultAffairs => { // need to fix any
    if (filter === 'all') return affairs
    else {
        return affairs.filter((item) => item.priority === filter)
    }
}
export const deleteAffair = (affairs: DefaultAffairs, _id: number): DefaultAffairs => {
    return affairs.filter((item) => item._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairs>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))// need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
