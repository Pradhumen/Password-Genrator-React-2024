import { useEffect, useRef } from "react";
import { useState } from "react";

const PasswordBox = () => {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [number, setNumber] = useState(true);
  const [charactor, setCharactor] = useState(true);
  let PasswordRef = useRef();

  const genratePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let newPassword = '';

    if (number) charset += "123456789";
    if (charactor) charset += "!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(Password);

    if (PasswordRef.current) {
      PasswordRef.current.select(); 
    }
  };

  useEffect(() => {
    if (length > 0) { // Password should only be generated if length is set
      genratePassword();
    }
  }, [length]); // Dependency on length

  return (
    <div className="flex items-center justify-center">
      <div className="bg-violet-900 text-black shadow-lg rounded-lg p-6 w-7/8 mt-[100px]">
        <input
          className="border p-2 rounded-md rounded-br-none rounded-tr-none "
          type="text"
          readOnly
          ref={PasswordRef}
          value={Password}
          placeholder="Password"
        />
        <button className="bg-black text-white p-2 rounded rounded-tl-none rounded-bl-none" onClick={copyPassword}>
          Copy
        </button>
        <div className="flex text-white">
          <div>
            <label htmlFor="length">Length: {length}</label>
            <input
              className="mt-2 ml-3 inline-block accent-black"
              min="8"
              max="20"
              type="range"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="inline ml-3 text-white">
            <label htmlFor="number">Number</label>
            <input 
              className="mt-2 ml-3 inline-block" 
              type="checkbox"
              checked={number}
              onChange={() => { setNumber(!number); }} 
            />
          </div>
          <div className="inline ml-3 text-white">
            <label htmlFor="charactor">Character</label>
            <input 
              className="mt-2 ml-3 inline-block"
              type="checkbox" 
              checked={charactor} 
              onChange={() => { setCharactor(!charactor); }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordBox;
