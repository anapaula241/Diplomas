import React from 'react'
import {FaGraduationCap} from "react-icons/fa";
// FaGraduationCap
// FaUserGraduate
const HomeScreen = () => {
    return (
        <div>
            <div className='diploma'><FaGraduationCap  color='#c32b3f' size='5rem' className='diploma ' ></FaGraduationCap></div>
            <div className='initialTitle mt-5'>
                <p>Registro de Diplomas</p>
            </div>
        </div>
    )
}

export default HomeScreen
