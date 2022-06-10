import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const item = useSelector((state) => state.contact)
    const work = useSelector((state) => state.work)
    return (
        <>
            {item.map((data, i) => {
                return (
                    <div key={i}>
                        <p >{data.name}</p>
                        <p>{data.secondname}</p>
                        <p>{data.email}</p>
                        <p>{data.address}</p>
                        <p>{data.phone}</p>
                        <p>{data.pincode}</p>
                        <p>{data.city}</p>
                        <p>{data.job}</p>
                        <p>{data.company}</p>
                        <p>{data.desc}</p>
                    </div>
                )
            })}

            {work.map((item, i) => {
                return (
                    <div key={i}>
                        <p >{item.job}</p>
                        <p>{item.company}</p>
                        <p>{item.start}</p>
                        <p>{item.end}</p>
                        <p>{item.jobsummary}</p>

                    </div>
                )
            })}



        </>
    )
}

export default Display