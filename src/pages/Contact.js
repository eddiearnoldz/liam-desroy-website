import { useState } from "react";
import { send } from 'emailjs-com';
import rec from '../images/record-icon-png-8.jpg'

const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    text: '',
    from_email: '',
  });

  const onSubmit = (e) => {

    e.preventDefault();
    send(
      '9PocketsRecords',
      'template_ac764uk',
      toSend,
      'gWfY7gMc4qo9a3kBt'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setToSend({from_name: '',
      message: '',
      from_email: '',
    })})
    .catch((err) => {
      console.log('FAILED...', err);
    });

    setToSend({
      from_name: '',
      text: '',
      from_email: '',
    })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="grid place-items-center h-full">
        <div className='p-6 max-w-2xl content-center'>
          <form onSubmit={onSubmit} >
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-2">
                <h1 className=" text-xl font-bold text-center ">Let me know what you're creating and how i can help</h1>
              </div>
              <div className="flex flex-col sm:col-span-1 col-span-2">
                <input 
                  type="text" 
                  placeholder="Name"
                  className="form-input px-3 py-2 rounded-md text-black border-2 border-purple outline-none"
                  id="name" 
                  name='from_name'
                  required="true"
                  value={toSend.from_name}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col sm:col-span-1 col-span-2">
                <input 
                  type="text" 
                  placeholder="Email"
                  className="form-input px-3 py-2 rounded-md text-blackbg-transparent  outline-none border-2 border-purple"
                  id="email" 
                  name='from_email'
                  required="true"
                  value={toSend.from_email}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col col-span-2 outine-none">
                <textarea 
                  type="textarea" 
                  className="form-input px-3 py-2 rounded-md text-black outine-none border-2 border-purple"
                  id="text"
                  rows={5}
                  cols={5}
                  name='text'
                  placeholder="Whats good?"
                  required="true"
                  value={toSend.text}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col space-between col-span-2 max-w-100 items-center">
                <button className="flex mt-3 hover:scale-105 duration-300" type="submit" name="action"><img className="h-5 animate-pulse" src={rec} alt='rec'/>Hit Play</button>
              </div>
              <div className="flex flex-col col-span-2 items-center text-sm gap-1">
              <button className="cursor-pointer"onClick={() => window.location = 'mailto:liam@liamdesroy.com'}>liam@liamdesroy.com</button>
              <a target="_blank" href="https://www.greasywafflefilms.com">Greasy Waffle Films</a>
              <a target="_blank" href="https://vimeo.com/liamdesroy">Vimeo</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
    )
  }

export default Contact