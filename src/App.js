import React, {useState} from "react";

function App() {
    const [str, setStr] = useState('');
    const [sum, setSum] = useState('');
    
    const handleStrChange = (event) => {
        setStr(event.target.value);
    };

    const handleSumChange = (event) => {
        setSum(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(str);
        console.log(sum);
        strComma();
        showstr();
    }

    const strComma = () => {
      let target = 0;
      let sep = str.split(",");
      for (let i =0; i < sep.length; i ++){
        var a = parseInt(sep[i].toString().match(/(\d+)/));
        i++;
        var b = parseInt(sep[i].toString().match(/(\d+)/));
        target = a + b;
        console.log(target);
        if (target == sum){
          console.log(a,b);
        }
      }
    }

    const showstr = () => {
      let s = str.split(",");
      const a = [];
      for (let i = 0; i < s.length; i++ ) {
        var val = parseInt(s[i].toString().match(/(\d+)/));
        a.push(val);
      }
      console.log(a);
    }

    // const list = a.map((a,index) => (
    //   <li key={index} >{a}</li>
    // ));

    return( 
        <div>
            <h1>Comma separated String elements sum finder</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                    value={str}
                    placeholder="Enter String"
                    onChange={handleStrChange}
                    />

                    <input 
                    type="text"
                    value={sum}
                    placeholder="Enter targeted number"
                    onChange={handleSumChange}
                    />

                </div>
                <button type="submit">Submit</button>
            </form>
            {/* <ul>{list}</ul> */}
        </div>
    )

}

export default App;
