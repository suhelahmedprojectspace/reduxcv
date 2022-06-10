import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../store/ContactSlice';
import { addwork } from '../store/WorkSlice';
import { Typography } from "@material-ui/core";
const Sidebar = () => {
    const dispatch = useDispatch()
    const [serviceList, setService] = useState([
        { service: "" }
    ])
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        pincode: "",
        city: "",
        states: "",
        desc: '',
        position: '',
        company: '',
        start: '',
        end: '',
        jobsummary: '',


    })
    console.log(state)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setState({ ...state, [name]: value })

    }
    // console.log(state)

    const handleService = () => {
        setService([...serviceList, { service: "" }])
    }
    const Serviceremove = (index) => {
        const list = [...serviceList]
        list.splice(index, 1);
        setService(list)
    }
    const handleInput = (e, index) => {
        const { name, value } = e.target
        const list = [...serviceList];
        list[index][name] = value;
        // console.log('list ka value', JSON.stringify(list))
        setService(list)

    }
    const handleResume = (event) => {

        if (state.firstName && state.lastName && state.email && state.address && state.phone && state.pincode && state.city && state.states) {
            dispatch(
                add(state.firstName, state.lastName, state.email, state.address, state.phone, state.pincode, state.city, state.states),
            )
            dispatch(addwork(state.position, state.company, state.desc, state.start, state.end)
            )
            event.preventDefault()
            setState('')
        }


        alert('click kiya dispatch')

    }
    return (
        <div>
            <Typography
                variant="h6"
                style={{
                    textAlign: "center",
                    margin: "2rem",
                }}
            >
                Resume Builder
            </Typography>
            <form>
                <label>First name</label>
                <input type="text" placeholder='First Name' value={state.firstName} onChange={handleChange} name="firstName" required />
                <label>Last name</label>
                <input type="text" placeholder='Last Name' value={state.lastName} onChange={handleChange} required name="lastName" />
                <label>Email</label>
                <input type="email" placeholder='Enter your email' value={state.email} onChange={handleChange} required name="email" />
                <label>Phone number</label>
                <input type="tel" id="phone" name="phone" value={state.phone} onChange={handleChange} required />
                <label>Address </label>
                <input type="text" placeholder='Address' value={state.address} onChange={handleChange} required name="address" />
                <label>city</label>
                <input type="text" placeholder='City' required value={state.city} onChange={handleChange} name="city" />
                <label>state</label>
                <input type="text" placeholder='State' value={state.states} onChange={handleChange} required name="states" />
                <label>Pincode</label>
                <input type="text" placeholder='Pincode' value={state.pincode} onChange={handleChange} required name="pincode" />


                <br /><br /><br /><br /><br /><br />

                <h1>work experience</h1>
                {serviceList.map((singleService, index) => (
                    <div key={index}>
                        <input type="date" name={`${index}start`} onChange={handleChange} />
                        <input type="date" name={`${index}end`} onChange={handleChange} />
                        <textarea placeholder='Share your experience' name={`${index}jobsummary`} onChange={handleChange} ></textarea>
                        {serviceList.length > 1 && (
                            <button onClick={() => Serviceremove(index)}>Remove</button>
                        )}

                        {serviceList.length - 1 === index && serviceList.length < 4 &&
                            <button onClick={handleService} >Add</button>

                        }

                    </div>


                ))}


                <input type="submit" onClick={handleResume} value="Next" />

            </form>
            {/* <h1>Ouptput hai bhai</h1>
            {serviceList.map((singleService, index) => (
                <ul key={index}>
                    <li>{singleService.service}</li>
                </ul>
            ))} */}
        </div>

    )
}

export default Sidebar;