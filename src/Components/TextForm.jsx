import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("On Click" + Text);
        let newText = Text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () => {
      //console.log("On Click" + Text);
      let newText = Text.toLocaleLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
  }
    const handleOnChange = (event)=> {
        //console.log("On Change");
        setText(event.target.value)
    }

    const extractEmail = () => {
      const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
      const emails = Text.match(emailRegex);
      if (emails && emails.length > 0) {
        setText(emails.join(", ")); // Join emails as a string for proper display
      } else {
        setText("No email address found.");
      }
    };
    const [Text, setText] = useState("")
  return (
    <>
    <div className='my-3 mx-3  ' style = {{color: props.mode === 'dark'?'white':'black'}} >
     <h1>{props.heading}</h1>  
<div className="mb-3" style = {{color: props.mode === 'dark'?'white':'black'}}>

  <textarea className="form-control" value = {Text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={extractEmail}>Extract Email</button>
    </div>

    <div className="mx-4  my-3"  style = {{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(" ").filter((element)=>{return element.length!=0}).length} Words and  {Text.length} Characters</p>
      <p>  {0.008*Text.split(" ").length} minutes read</p>
      <h2>Text Preview</h2>
      <p>{Text.length>0?Text:"Enter Text to preview here"}</p>
    </div>
    </>
  )
}
