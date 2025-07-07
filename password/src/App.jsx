/**
 * Password Generator App
 *
 * Features:
 * - Generates a random password based on user-selected options:
 *   - Length (slider, 6-100)
 *   - Include numbers (checkbox)
 *   - Include symbols (checkbox)
 * - Displays the generated password in a read-only input
 * - Allows copying the password to clipboard
 * - Uses Tailwind CSS for styling
 */




import { useState, useCallback, useEffect, useRef} from 'react' 

function App() {
  const [length, setLength] = useState(8)
  const [numCheck, setnumCheck] = useState(false)
  const [charCheck, setCheck] = useState(false)
  const [pass, setPass] = useState("")
  const passwodRef = useRef(null)   // Ref for the password input (for clipboard copy)
  const passGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numCheck) str += "0123456789"
    if (charCheck) str += "!@#$%^&*+_{}[]~`"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      password += str.charAt(charIndex)
    }
    setPass(password)
  }, [length, numCheck, charCheck, setPass])

    /**
   * Copies the generated password to the clipboard.
   * Selects the input and uses the Clipboard API.
   */

  const copyPasswordClipBoard = useCallback(() => {
    passwodRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  // Regenerate password whenever options change
  useEffect(() => {
    passGenerator()
  }, [length, numCheck, charCheck, passGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 bg-gray-800 text-orange-500">
  <h1 className="text-white text-center text-2xl font-semibold mb-4">Password Generator</h1>

  {/* Password Output + Copy */}
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={pass}
      readOnly
      ref={passwodRef}
      placeholder="Generated Password"
      className="outline-none w-full py-2 px-3 text-gray-800"
    />
    <button
      onClick={copyPasswordClipBoard}
      className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shrink-0"
    >
      Copy
    </button>
  </div>

  {/* Controls */}
  <div className="flex flex-col gap-4">
    {/* Length Slider */}
    <div className="flex items-center gap-x-4">
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="cursor-pointer w-full"
      />
      <label className="text-white font-medium">Length: {length}</label>
    </div>

    {/* Checkboxes */}
    <div className="flex flex-wrap gap-6 justify-between text-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="numberInput"
          checked={numCheck}
          onChange={() => setnumCheck((prev) => !prev)}
        />
        <label htmlFor="numberInput">Include Numbers</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="charInput"
          checked={charCheck}
          onChange={() => setCheck((prev) => !prev)}
        />
        <label htmlFor="charInput">Include Symbols</label>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
