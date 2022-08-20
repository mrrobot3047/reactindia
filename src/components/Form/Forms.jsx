import React from 'react'
import '../Form/Form.css'
import image from '../../images/india2.png'

const Forms = () => {
  return (
    <>
        
        <section className='py-5'>
              
           
            <div className='container'>
                <h1 className='head' id="contact" >Contact Us</h1>
               
                <div className='row'>
                    <div className='col-md-8'>
                           <img src={image} style={{width:'890px',height:'300px',marginRight:'40px'}}/>
                        
                       
                    </div>
                    
                   
                    <div className='col-md-4'>
                     
                        <div className='card shadow'>
                            <div className='card-body'>
                                  <h4>Fill below form to Book places</h4>
                                    <div className='underline mb-3'></div>
                                    <form>
                                        <label for="">Name</label>
                                        <input type="text" placeholder='enter your name' className='form-control mb-3'/>
                                        <label for="">Email</label>
                                        <input type="text" placeholder='enter your mail' className='form-control'/>
                                        <label for="">Phone no</label>
                                        <input type="number" placeholder='enter your number' className='form-control'/>
                                        <button type='submit' className='btn btn-primary py-2 w-100'  >Submit</button>
                                    </form>

                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default Forms
