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
      'service_aa1hpes',
      'template_osu6lju',
      toSend,
      'VCoxZiFVhr0fpyRUt'
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
      <div className="mt-20 grid place-items-center h-full">
        <div className='p-6 content-center'>
          <form onSubmit={onSubmit} >
            <div className="grid grid-cols-4 gap-5">
              <div className="flex flex-col col-span-4">
                <h1 className=" text-xl font-bold text-center ">Let me know what you're creating and how we can bring it to life</h1>
              </div>
              <div className="flex flex-col sm:col-span-2 col-span-4">
                <input 
                  type="text" 
                  placeholder="name"
                  className="form-input px-3 py-2 rounded-md text-black bg-heroPink border-x-2 border-purple outline-none placeholder:text-heroSand"
                  id="name" 
                  name='from_name'
                  required="true"
                  value={toSend.from_name}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col sm:col-span-2 col-span-4">
                <input 
                  type="text" 
                  placeholder="email"
                  className="form-input px-3 py-2 bg-heroPink outline-none border-y-2 rounded-md border-purple placeholder:text-heroSand"
                  id="email" 
                  name='from_email'
                  required="true"
                  value={toSend.from_email}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col col-span-4 outine-none">
                <textarea 
                  type="text" 
                  className="form-input px-3 py-2 rounded-md placeholder:text-heroSand outline-none border-x-2 bg-heroPink border-purple"
                  id="text"
                  rows={4}
                  cols={5}
                  name='text'
                  placeholder="what we making?"
                  required="true"
                  value={toSend.text}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col space-between col-span-4 max-w-100 items-center">
                <button className="flex mt-3 hover:scale-105 duration-500 items-center p-2 text-lg" type="submit" name="action"><img className="h-4" src={rec} alt='rec'/>Hit Play</button>
              </div>
              <div className="flex flex-col col-span-4 items-center text-md gap-1">
              <button className="cursor-pointer hover:text-heroSand duration-300"onClick={() => window.location = 'mailto:liam@liamdesroy.com'}>liam@liamdesroy.com</button>
              <a className="hover:text-heroSand duration-300" href="https://www.greasywafflefilms.com">Greasy Waffle Films</a>
              <a className="hover:text-heroSand duration-300" href="https://vimeo.com/liamdesroy">Vimeo</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
    )
  }

export default Contact