let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
  html {
    background-color: #002B36;
  }
  
  #html {
    width: 48%;
    height: 90vh;
    margin:5vh 1%;
    padding: 20px;
    background-color: #303030;
    border: #fff solid 1px;
    word-break: break-all;
    overflow : auto;
  }
  
  #html::-webkit-scrollbar {
    width: 0 !important 
  }
  
  #div1Wrapper {
    position: fixed;
    top: 2vh;
    right: 1%;
    height: 96vh;
    width: 48%;
    background-color:#ffffff;
  }
  
  @media (max-width: 500px) {
    #html {
        height: 48vh;
        width: 90%;
        overflow: auto;
        margin:1vh auto;
    }
  
    #div1Wrapper {
        top: 51vh;
        right: 5%;
        height: 48vh;
        width: 90%;
        margin-left: 0;
    }
  }
  
  #div1 {
    position: relative;
    border: 1px solid red;
    width: 200px;
    height: 200px;
  }
  
  #div1 {
    margin:calc(50vh - 100px) auto 0;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
  }
  
  #div1 {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 1) 100%);
  }
  
  @media (max-width: 500px) {
    #div1 {
      margin:calc(25vh - 100px) auto 0;
    }
  }
  
  #div1::before {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    border: #000 solid 35px
  }
  
  #div1::after {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    border: #fff solid 35px
  }
  
  @keyframes round{
    from{
    transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
  
  #div1{
    animation: round 2s infinite linear;
  }
  
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 25);
};
step(); 