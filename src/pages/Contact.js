import { useState } from "react";
import { send } from 'emailjs-com';
import playButton from '../images/play-button.png';
import insta from '../images/instagram.svg';

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
      <div className="mt-20 grid place-items-center h-full w-full ">
          <form onSubmit={onSubmit} >
            <div className="p-5 grid grid-cols-4 gap-5 max-w-xl">
              <div className="flex flex-col col-span-4">
                <h1 className=" text-xl font-bold text-center ">Let me know what you're creating and how we can bring it to life</h1>
              </div>
              <div className="flex flex-col sm:col-span-2 col-span-4 ">
                <input 
                  type="text" 
                  placeholder="name"
                  className="form-input px-3 py-2 rounded-md text-black bg-heroPink border-x-2 border-purple outline-none placeholder:text-black"
                  id="name" 
                  name='from_name'
                  required={true}
                  value={toSend.from_name}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col sm:col-span-2 col-span-4">
                <input 
                  type="text" 
                  placeholder="email"
                  className="form-input px-3 py-2 bg-heroPink outline-none border-y-2 rounded-md border-purple placeholder:text-black"
                  id="email" 
                  name='from_email'
                  required={true}
                  value={toSend.from_email}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col col-span-4 outine-none">
                <textarea 
                  type="text" 
                  className="form-input px-3 py-2 rounded-md placeholder:text-black outline-none border-x-2 bg-heroPink border-purple resize-none"
                  id="text"
                  rows={4}
                  cols={5}
                  name='text'
                  placeholder="what we making?"
                  required={true}
                  value={toSend.text}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col space-between col-span-4 max-w-4xl items-center">
                <button className="flex mt-3 hover:scale-105 duration-500 items-center p-1 text-lg border-2 rounded-md pr-2" type="submit" name="action"><img className="h-4 mr-2" src={playButton} alt='rec'/>hit record</button>
              </div>
              <div className="flex flex-col col-span-4 items-center text-md gap-1">
              <button className="cursor-pointer hover:text-heroSand duration-300 mt-10"onClick={() => window.location = 'mailto:liam@liamdesroy.com'}>liamdesroy@gmail.com</button>
              <a className="hover:scale-105 duration-300" href="https://www.instagram.com/liamdesroy/"><img className="h-10 mt-3" src={insta} alt=""/></a>
              </div>
            </div>
          </form>
        </div>
    </>
    )
  }

export default Contact