import React from 'react'
import { useState } from 'react';

const BookingForm = () => {
    const FirstNameErrorMessage = () => {
        return (
            <p className="FieldError">First Name should have at least 2 characters</p>
          );
    }

    const LastNameErrorMessage = () => {
        return (
            <p className="FieldError">Last Name should have at least 2 characters</p>
          );
    }

    const EmailErrorMessage = () => {
        return (
            <p className="FieldError">Please enter valid email</p>
        );
    }

    const CardErrorMessage = () => {
        return (
            <p className="FieldError">Please enter full credit card number</p>
          );
    }


    const [submited, setSubmited] = useState(false)

    const submitForm = () => {
        setSubmited(!submited)
    }


    const [date, setDate] = useState("");
    const [time,setTime] = useState("");
    const [seats,setSeats] = useState("")
    const [firstName, setFirstName] = useState({
        value: "",
        isTouched: false,
    });
    const [lastName, setLastName] = useState({
        value: "",
        isTouched: false,
    });
    const [email,setEmail] = useState({
        value: "",
        isTouched: false,
    });
    const [cardNumber,setCardNumber] = useState({
        value: "",
        isTouched: false,
    })

    const clearForm = () => {
        setDate("");
        setTime("");
        setSeats("");
        setFirstName({
            value: "",
            isTouched:false,
        });
        setLastName({
            value: "",
            isTouched: false,
        });
        setEmail({
            value: "",
            isTouched: false,
        });
        setCardNumber({
            value: "",
            isTouched: false,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (
            firstName.value.length >= 2 &&
            lastName.value.length >= 2 &&
            email.value.length >= 6 &&
            cardNumber.value.length >= 16
        ){
            clearForm();
            submitForm();
        } else {
            alert("Please fill all required fields properly")
        }
      }; 



  return (
    <div className='order-form '>
        <form onSubmit={handleSubmit} action="" className={`form ${submited ? "none" : ""}`}>
            <div className='form-container'>
            <label htmlFor="" className='form-label'>Date</label>
            <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}}  min="2024-10-14" max="2024-10-21" required className='form-input'/>
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>Time</label>
            <input type="time" value={time} onChange={(e) => {setTime(e.target.value)}}  min="12:00:00" max="22:00:00" required className='form-input'/>
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>Number of seats</label>
            <input type="number" value={seats} onChange={(e) => {setSeats(e.target.value)}}pattern="[0-9]*(.[0-9]+)?" placeholder="2" min="2" max="8"  required className='form-input'/>
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>First Name</label>
            <input type="text" value={firstName.value} onChange={(e) => {setFirstName({...firstName, value : e.target.value})}} onBlur={() => {setFirstName({...firstName, isTouched:true})}} placeholder='Jacob' min="2" className='form-input-type-2'/>
            {firstName.isTouched && firstName.value.length < 2 ? (<FirstNameErrorMessage/>) : null}
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>Last Name</label>
            <input type="text" value={lastName.value} onChange={(e) => {setLastName({...lastName, value : e.target.value})}}  onBlur={() => {setLastName({...lastName, isTouched:true})}} placeholder='Parker'  className='form-input-type-2'/>
            {lastName.isTouched && lastName.value.length < 2 ? (<LastNameErrorMessage/>) : null}
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>Email</label>
            <input type="text" value={email.value} onChange={(e) => {setEmail({...email, value : e.target.value})}} onBlur={() => {setEmail({...email, isTouched:true})}}  placeholder='jacobparker@example.com'  className='form-input-type-2'/>
            {email.isTouched && email.value.length < 6 ? (<EmailErrorMessage/>) : null}
            </div>

            <div className='form-container'>
            <label htmlFor="" className='form-label'>Credit Card Number</label>
            <input type="text" value={cardNumber.value} onChange={(e) => {setCardNumber({...cardNumber,value: e.target.value})}} onBlur={() => {setCardNumber({...cardNumber, isTouched:true})}}  placeholder='xxxxxxxxxxxxxxxx'  className='form-input-type-2'/>
            {cardNumber.isTouched && cardNumber.value.length < 16 ? (<CardErrorMessage/>) : null}
            </div>

            <button className='form-btn'>Submit</button>
        </form>

        <div className={`submited-form ${submited ? "" : "none"}`}>
            <h1>Congratulations!{firstName.value} {lastName.value}, your table has been booked on {date} at {time} for {seats} seats</h1>
        </div>
    </div>
  )
}

export default BookingForm