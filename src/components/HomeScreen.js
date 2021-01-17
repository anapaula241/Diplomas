import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
// FaGraduationCap
// FaUserGraduate
const HomeScreen = () => {
    return (
        <div>
            <div className='diploma'><FaGraduationCap color='#c32b3f' size='7rem' style={{ marginLeft: '200px' }} className='diploma ' ></FaGraduationCap></div>
            <div className="row justify-content-end container animeLeft">
                <div className="col-10">
                    <div className='initialTitle '>
                        <p>Registro de Diplomas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
