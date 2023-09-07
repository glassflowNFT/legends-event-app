import React from 'react'
import Navbar from './Navbar'
import Footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Vote() {

    let navigate = useNavigate()

    function toCategories() {
        navigate('/Voting-Categories')
    }

    const [lookValue, setLookValue] = useState('5')
    const [smellValue, setSmellValue] = useState('5')
    const [tasteValue, setTasteValue] = useState('5')
    const [meltValue, setMeltValue] = useState('5')

    const handleLookChange = e => setLookValue(e.target.value)
    const handleSmellChange = e => setSmellValue(e.target.value)
    const handleTasteChange = e => setTasteValue(e.target.value)
    const handleMeltChange = e => setMeltValue(e.target.value)

  return (
    <div className='base'>
       <Navbar />
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <div className='container'>
            <div className='holder'>
                <p onClick={toCategories}>Return to Categories</p>
                <div className='row mt-3'>
                    <div className='col me-5'>
                        <img className='img-fluid w-100 mb-3' src={rectangle8} />
                        <div className='hash-name mb-3'><p className='name-text'>Entry Name</p></div>
                        <div className='hash-category mb-3'><p className='name-text'>Entry Category</p></div>
                        <div className='hash-breeder mb-3'><p className='name-text'>Entry Breeder</p></div>
                        <div className='hash-farmer mb-3'><p className='name-text'>Entry Farmer</p></div>
                        <div className='hash-genetics mb-3'><p className='name-text'>Entry Genetics</p></div>
                        <div className='description'><p className='desc-text'>Entry Description</p>
                        <p className='small-des'>Description goes here</p></div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <p className='name-text'>Entry Maker</p>
                                <p className='name-text'>Vote On Entry-Name Elements: </p>
                            </div>
                            <div className='col'>
                                <p className='holder-name-text'>Wallet Address</p>
                            </div>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry Proposal Look</p>
                            <p className='range-slider-text'>{lookValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleLookChange} value={lookValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry Proposal Look</p>
                            <p className='range-slider-text'>{smellValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleSmellChange} value={smellValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry Proposal Look</p>
                            <p className='range-slider-text'>{tasteValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleTasteChange} value={tasteValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry Proposal Look</p>
                            <p className='range-slider-text'>{meltValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleMeltChange} value={meltValue}></input>
                        </div>

                        <button className='confirm-button'>Confrim Vote</button>
                    </div>
                </div>
            </div>
          </div>
          <img className="footer" src={Footer} />
    </div>
  )
}

export default Vote